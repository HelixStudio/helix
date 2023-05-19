import MarkdownIt from "markdown-it";
import { For, createSignal } from "solid-js";
import { createRouteAction } from "solid-start";
import { ButtonAction } from "~/components/Button";
import Selector from "~/components/Selector";

export default function AICoachPage() {
  const apiEndpoint = import.meta.env.VITE_API_ENDPOINT;

  const [userPrompt, setUserPrompt] = createSignal("");
  const [userModel, setUserModel] = createSignal("conversational");

  const [chat, setChat] = createSignal<{ user: string; ai: string }[]>([
    {
      user: "",
      ai: "Hello! I'm your coding assistant on Helix. Ask me anything programming-related, and I'll provide you with helpful solutions and insights to enhance your coding experience.",
    },
  ]);
  const [_, generate] = createRouteAction(
    async ({
      prompt,
      model,
    }: {
      prompt: string;
      model: string;
    }): Promise<string> => {
      let headersList = {
        "Content-Type": "application/json",
      };

      let bodyContent = JSON.stringify({
        prompt: prompt,
        model: model,
      });

      let response = await fetch(apiEndpoint + "/ai/generate", {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      });

      let data: { generated_text: string } = await response.json();
      return data.generated_text;
    }
  );

  const send = async () => {
    const prompt = userPrompt();
    const oldChat = chat();
    let model = "";

    switch (userModel()) {
      case "conversational":
        model = "microsoft/DialoGPT-medium";
        break;
      case "coder":
        model = "OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5";
        break;
      case "advanced":
        model = "gpt2-large";
        break;
    }

    setUserPrompt("");
    setChat([...oldChat, { user: prompt, ai: "loading..." }]);

    let res = await generate({ prompt, model });
    if (res == undefined)
      res = "Error while generating the response. Please try again later.";
    else if (userModel() != "conversational") {
      res = res.substring(prompt.length);
      // const md = new MarkdownIt();
      // res = md.render(res);
    }
    setChat([...oldChat, { user: prompt, ai: res }]);
    localStorage.setItem("chat", JSON.stringify(chat()));
  };

  return (
    <main class="bg-secondary-800 text-white min-h-screen">
      <div class="ml-auto mr-auto max-w-5xl min-h-screen">
        <div class="p-3 items-start flex flex-col justify-between h-screen">
          <div class="flex flex-row justify-between w-full items-center">
            <div class="flex sm:flex-row flex-col w-full justify-between sm:items-center items-start pb-2">
              <div>
                <h2 class="text-3xl font-bold tracking-tight sm:text-4xl mb-2">
                  AI Coach
                </h2>
                <p class="mb-4">
                  This is you personal assistant. Go ask him anything!
                </p>
              </div>
              <div>
                <Selector
                  label="mode"
                  value={userModel()}
                  options={["conversational", "coder", "advanced"]}
                  callback={(option) => {
                    setUserModel(option);
                  }}
                />
              </div>
            </div>
            {/* <div>
              <Selector
                callback={() => {}}
                label="Model"
                options={["GPT2", "FLAN", "LLaMa"]}
                value="GPT2"
              />
            </div> */}
          </div>
          <div class="h-full w-full overflow-y-auto">
            <For each={chat()}>
              {(chatEntry, i) => {
                return (
                  <div class="mr-2">
                    {chatEntry.user != "" ? (
                      <div class="flex flex-row justify-end mb-2">
                        <p class="p-2 max-w-fit bg-primary-500 rounded-lg">
                          {chatEntry.user}
                        </p>
                      </div>
                    ) : (
                      <></>
                    )}
                    <div class="flex flex-row justify-start mb-2">
                      <p class="p-2 w-fit max-w-xl bg-secondary-700 rounded-lg">
                        {chatEntry.ai}
                      </p>
                    </div>
                  </div>
                );
              }}
            </For>
          </div>
          <div class="flex flex-row gap-3 mt-3 w-full">
            <input
              type="text"
              placeholder="Start writing here!"
              class="relative w-full block rounded-lg transition-colors border-0 py-1.5 ring-2 ring-inset ring-secondary-700 placeholder:text-secondary-100 bg-secondary-700 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-primary-400 sm:text-sm sm:leading-6"
              value={userPrompt()}
              onKeyUp={async (e) => {
                if (e.key == "Enter") {
                  await send();
                }
              }}
              onChange={(e) =>
                setUserPrompt((e.target as unknown as { value: string }).value)
              }
            />
            <ButtonAction
              text="Send"
              action={async () => {
                await send();
              }}
            />
            <ButtonAction
              text="Clear"
              action={async () => {
                setChat([]);
                setUserPrompt("");
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
