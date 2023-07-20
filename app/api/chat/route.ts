import { HfInference } from "@huggingface/inference";
import { HuggingFaceStream, StreamingTextResponse } from "ai";
import {
  type ChatModel,
  type Message,
  goodModels,
  modelIndex,
} from "~/utils/ai";

const Hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

function buildPrompt(messages: Message[], model: ChatModel) {
  return (
    messages
      .map(({ content, role }) => {
        if (role === "user") {
          return `<|${model.userToken}|>${content}<|${model.endToken}|>\n`;
        } else if (role === "assistant") {
          return `<|${model.assistantToken}|>${content}<|${model.endToken}|>\n`;
        } else if (role === "system") {
          return `<|${model.systemToken}|>${content}<|${model.endToken}|>\n`;
        }
      })
      .join("") + `<|${model.assistantToken}|>`
  );
}

export const POST = async (req: Request) => {
  const { messages } = (await req.json()) as { messages: Message[] };
  const model = goodModels[modelIndex];

  if (model == undefined) {
    return "Model is not valid";
  }

  const response = Hf.textGenerationStream({
    model: model.name,
    inputs: buildPrompt(messages, model),
    parameters: {
      temperature: 0.5,
      max_new_tokens: 200,
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
