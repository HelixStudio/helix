import { For, createSignal } from "solid-js";
import { createRouteAction } from "solid-start";
import { ButtonAction } from "~/components/Button";

export default function AICoachPage() {
  const apiEndpoint = "https://helix-td2p.onrender.com"; // http://localhost:4000
  const [userPrompt, setUserPrompt] = createSignal("");
  const [chat, setChat] = createSignal<{ user: string; ai: string }[]>([
    {
      user: "",
      ai: "Hello! I'm your coding assistant on Helix. Ask me anything programming-related, and I'll provide you with helpful solutions and insights to enhance your coding experience.",
    },
  ]);
  const [_, generate] = createRouteAction(
    async (prompt: string): Promise<string> => {
      let headersList = {
        "Content-Type": "application/json",
      };

      let bodyContent = JSON.stringify({
        prompt: prompt,
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
    setUserPrompt("");
    setChat([...oldChat, { user: prompt, ai: "loading..." }]);
    const res = await generate(prompt);
    setChat([...oldChat, { user: prompt, ai: res }]);
    localStorage.setItem("chat", JSON.stringify(chat()));
  };

  return (
    <main class="bg-secondary-800 text-white min-h-screen">
      <div class="ml-auto mr-auto max-w-5xl min-h-screen">
        <div class="p-3 items-start flex flex-col justify-between h-screen">
          <div class="flex flex-row justify-between w-full items-center">
            <div>
              <h2 class="text-3xl font-bold tracking-tight sm:text-4xl mb-2">
                AI Coach
              </h2>
              <p class="mb-4">
                This is you personal assistant. Go ask him anything!
              </p>
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
