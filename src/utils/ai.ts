export type ChatModel = {
  name: string;
  userToken: string;
  assistantToken: string;
  systemToken: string;
  endToken: string;
  productionReady: boolean;
};

export type Message = {
  content: string;
  role: "system" | "user" | "assistant";
};

export const goodModels: ChatModel[] = [
  {
    name: "OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5",
    userToken: "prompter",
    assistantToken: "assistant",
    systemToken: "assistant", // no support
    endToken: "endoftext",
    productionReady: true,
  },
  {
    name: "HuggingFaceH4/starchat-beta",
    userToken: "user",
    assistantToken: "assistant",
    systemToken: "system",
    endToken: "end",
    productionReady: false,
  },
];

export const modelIndex = 1;
