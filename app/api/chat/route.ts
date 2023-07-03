import { HfInference } from "@huggingface/inference";
import { HuggingFaceStream, StreamingTextResponse } from "ai";

type Message = { content: string; role: "system" | "user" | "assistant" };

const Hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

function buildOpenAssistantPrompt(messages: Message[]) {
  return (
    messages
      .map(({ content, role }) => {
        if (role === "user") {
          return `<|prompter|>${content}<|endoftext|>`;
        } else {
          return `<|assistant|>${content}<|endoftext|>`;
        }
      })
      .join("") + "<|assistant|>"
  );
}

export const POST = async (req: Request) => {
  const { messages } = (await req.json()) as { messages: Message[] };

  const response = Hf.textGenerationStream({
    model: "OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5",
    inputs: buildOpenAssistantPrompt(messages),
    parameters: {
      temperature: 0.5,
      max_new_tokens: 200,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      typical_p: 0.2,
      repetition_penalty: 1,
      truncate: 1000,
      return_full_text: false,
    },
  });

  const stream = HuggingFaceStream(response);

  return new StreamingTextResponse(stream);
};

export const GET = (_: Request) => {
  return new Response("No GET endpoint available.");
};

export const runtime = "edge";
