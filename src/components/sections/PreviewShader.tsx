/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect, useState } from "react";
import { Panel } from "react-resizable-panels";

const PreviewShader = (props: { shader: string }) => {
  const [device, setDevice] = useState<GPUDevice>();
  const [context, setContext] = useState<GPUCanvasContext>();

  let renderTarget: GPUTexture | undefined = undefined;

  const init = (width: number, resize: boolean) => {
    const canvas = document.querySelector("canvas");
    if (!canvas) return;

    const navWidth = 65;
    canvas.width = ((window.innerWidth - navWidth) * width) / 100;
    canvas.height = window.innerHeight;

    setup()
      .then(() => {
        render(canvas.width, canvas.height, resize);
      })
      .catch((e: Error) => {
        console.log("rendering error: " + e.message);
      });
  };

  const setup = async () => {
    if (!navigator.gpu) {
      throw new Error("WebGPU not supported on this browser.");
    }

    const adapter = await navigator.gpu.requestAdapter();
    if (!adapter) {
      throw new Error("No appropriate GPUAdapter found.");
    }

    if (device == null) {
      setDevice(await adapter.requestDevice());
    }

    const canvas = document.querySelector("canvas")!;

    if (context == null) {
      console.log("getting the context");
      setContext(canvas.getContext("webgpu")!);
    }

    if (context == null || device == null) {
      console.log("null context or device");
      return;
    }

    const canvasFormat = navigator.gpu.getPreferredCanvasFormat();
    context.configure({
      device: device,
      format: canvasFormat,
    });
  };

  const render = (width: number, height: number, resize: boolean) => {
    if (context == null || device == null) {
      console.log("null context or device");
      return;
    }

    const vertices = new Float32Array([
      -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, 1.0, 1.0, -1.0, 1.0,
    ]);

    const vertexBuffer = device.createBuffer({
      label: "Cell vertices",
      size: vertices.byteLength,
      usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
    });

    device.queue.writeBuffer(vertexBuffer, 0, vertices);

    const vertexBufferLayout = {
      arrayStride: 8,
      attributes: [
        {
          format: "float32x2" as GPUVertexFormat,
          offset: 0,
          shaderLocation: 0,
        },
      ],
    };

    const cellShaderModule = device.createShaderModule({
      label: "cool shader",
      code: props.shader,
    });

    const cellPipeline = device.createRenderPipeline({
      label: "Cell pipeline",
      layout: "auto",
      vertex: {
        module: cellShaderModule,
        entryPoint: "vertexMain",
        buffers: [vertexBufferLayout],
      },
      fragment: {
        module: cellShaderModule,
        entryPoint: "fragmentMain",
        targets: [
          {
            format: "bgra8unorm",
          },
        ],
      },
      multisample: {
        count: 1,
      },
    });

    if (resize) {
      renderTarget?.destroy();
    }

    renderTarget = device.createTexture({
      size: [width, height],
      sampleCount: 4,
      format: "bgra8unorm",
      usage: GPUTextureUsage.RENDER_ATTACHMENT,
    });

    const encoder = device.createCommandEncoder();

    const pass = encoder.beginRenderPass({
      colorAttachments: [
        {
          //   view: renderTargetView,
          view: context.getCurrentTexture().createView(),
          loadOp: "clear",
          clearValue: { r: 0, g: 0, b: 0.4, a: 1 },
          storeOp: "store",
        },
      ],
    });

    pass.setPipeline(cellPipeline);
    // pass.setViewport(0, 0, width, height, 0.0, 1.0);
    pass.setVertexBuffer(0, vertexBuffer);
    pass.draw(vertices.length / 2);

    pass.end();

    const commandBuffer = encoder.finish();
    device.queue.submit([commandBuffer]);
  };

  useEffect(() => {
    init(50, false);
  });

  return (
    <Panel
      defaultSize={50}
      minSize={30}
      maxSize={70}
      id="canvas-parent"
      className="h-full rounded-md bg-gray-700"
      onResize={(width) => {
        init(width, true);
      }}
    >
      <canvas />
    </Panel>
  );
};

export default PreviewShader;
