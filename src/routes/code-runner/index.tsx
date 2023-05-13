import { For, Show, createSignal, onMount } from "solid-js";
import { Portal } from "solid-js/web";
import {
  A,
  Navigate,
  createRouteAction,
  createRouteData,
  useLocation,
  useNavigate,
  useParams,
  useRouteData,
} from "solid-start";
import {
  createServerAction$,
  createServerData$,
  redirect,
} from "solid-start/server";
import { ButtonAction } from "~/components/Button";
import CodeEditor from "~/components/CodeEditor";
import Link from "~/components/Link";
import Selector from "~/components/Selector";
import { getDB, isClient } from "~/utils/db";

export const defaultCode =
  '#include <iostream>\n\nint main() {\n\tstd::cout << "Hello, World!\\n";\n\treturn 0;\n}\n';
export const defaultLang = "cpp";

export default function CodeRunnerPage() {
  const [code, setCode] = createSignal("");
  const [input, setInput] = createSignal("");
  const [didRun, setDidRun] = createSignal(false);

  const [lang, setLang] = createSignal<"cpp" | "c" | "py">("cpp");
  const [modalLang, setModalLang] = createSignal("C++");
  const [openedModal, setOpenModal] = createSignal(false);

  const [runningSolution, runSolution] = createRouteAction(
    async ({
      code,
      input,
      lang,
    }: {
      code: string;
      input: string;
      lang: string;
    }) => {
      let headersList = {
        "Content-Type": "application/json",
        // "X-Auth": "wkjesrc24509873", // TODO: generate API keys
      };

      let response = await fetch(
        "https://helix-td2p.onrender.com/rce/run?unsafe=true",
        // "http://localhost:4000/rce/test?unsafe=true",
        {
          method: "POST",
          body: JSON.stringify({
            input: input,
            code: code,
            lang: lang,
          }),
          headers: headersList,
        }
      );

      const text = await response.text();
      const data = JSON.parse(text) as {
        error: string;
        output: string;
      };

      return data;
    }
  );

  onMount(() => {
    const ls_lang = localStorage.getItem("lang");
    if (ls_lang != null) {
      setLang(ls_lang as "cpp" | "c" | "py");
    }
  });

  const get_human_lang = () => {
    let s = "";
    if (lang() == "cpp") s = "C++";
    else if (lang() == "c") {
      s = "C";
    } else s = "Python 3";
    setModalLang(s);
    return s;
  };

  return (
    <main class="bg-secondary-800 text-white min-h-screen">
      <div class="grid grid-cols-2 w-full h-screen my-0">
        <div class="m-2 rounded-md flex overflow-hidden flex-col">
          <div class="bg-secondary-700 h-8 items-center flex flex-row px-3">
            <p>{get_human_lang()}</p>
          </div>
          <CodeEditor
            style={{ height: "100vh", width: "1fr" }}
            initialContent={
              isClient()
                ? localStorage.getItem("code") || defaultCode
                : defaultCode
            }
            typeCallback={(newContent: string) => {
              setCode(newContent);
              localStorage.setItem("code", newContent);
            }}
          />
        </div>
        <div class="grid grid-rows-3 h-100">
          <div class="rounded-md m-2 flex overflow-y-auto resize-none flex-col row-span-2 max-h-[65vh]">
            <div class="bg-secondary-700 h-8 items-center flex flex-row px-3">
              <p>Output</p>
            </div>
            <div class="font-mono h-full row-span-2 p-2 whitespace-pre bg-secondary-900 overflow-y-auto resize-none">
              {runningSolution.result?.output ||
                runningSolution.result?.error ||
                (!didRun() ? "Click 'Run' to submit your code!" : "loading...")}
            </div>
          </div>
          <div class="rounded-md flex m-2 overflow-hidden flex-col row-span-1 bg-secondary-900">
            <div class="bg-secondary-700 h-8 items-center flex flex-row px-3">
              <p>Input</p>
            </div>
            <Show when={openedModal()}>
              {/*TODO: work on modal options */}
              <div
                class="relative z-10"
                aria-labelledby="modal-title"
                role="dialog"
                aria-modal="true"
              >
                <div
                  class="fixed inset-0 transition-opacity"
                  style={{ "background-color": "rgba(0,0,0,0.4)" }}
                ></div>
                <div class="fixed inset-0 z-10 overflow-y-auto">
                  <div class="flex min-h-full items-end justify-center p-2 text-center sm:items-center sm:p-0">
                    <div class="relative transform overflow-hidden rounded-lg bg-secondary-700 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl">
                      <div class="bg-secondary-800 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div class="mt-3 text-center sm:ml-1 sm:mt-0 sm:text-left">
                          <h2 class="text-3xl font-bold tracking-tight mb-6">
                            Project options
                          </h2>
                          <div class="flex flex-col gap-3" onSubmit={() => {}}>
                            {/* <div class="flex flex-row gap-3">
                              <p>Project name </p>
                              <input
                                type="text"
                                class="relative block w-full rounded-lg transition-colors border-0 py-1.5 ring-2 ring-inset ring-secondary-700 placeholder:text-secondary-100 bg-secondary-700 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-primary-400 sm:text-sm sm:leading-6"
                                placeholder="Project Name"
                              />
                            </div> */}
                            <Selector
                              label="Language"
                              value={modalLang()}
                              options={["C++", "C", "Python 3"]}
                              callback={(option) => {
                                setModalLang(option);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div class="bg-secondary-800 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 gap-3">
                        <ButtonAction
                          action={() => {
                            switch (modalLang()) {
                              case "C++":
                                setLang("cpp");
                                break;
                              case "C":
                                setLang("c");
                                break;
                              case "Python 3":
                                setLang("py");
                                break;
                            }
                            localStorage.setItem("lang", lang());
                            setModalLang(get_human_lang());
                            setOpenModal(false);
                          }}
                          text={"Ok"}
                        />
                        <ButtonAction
                          action={() => {
                            setModalLang(get_human_lang());
                            setOpenModal(false);
                          }}
                          text={"Cancel"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Show>
            <textarea
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter your input data here!"
              class="font-mono border-0 ring-0 h-full row-span-1 resize-none whitespace-pre bg-secondary-900 overflow-y-auto"
            ></textarea>
            <div class="flex flex-row gap-3 p-2">
              <ButtonAction
                action={() => {
                  setDidRun(true);
                  runSolution({
                    code: code(),
                    input: input(),
                    lang: lang(),
                  });
                }}
                text={"Run"}
              />
              <ButtonAction
                action={() => setOpenModal(!openedModal())}
                text={"Options"}
              />

              {/* <ButtonAction
                action={() => {
                  setDidRun(true);
                  runSolution({
                    code: code(),
                    input: input(),
                  });
                }}
                text={"Save"}
              /> */}
            </div>
          </div>
        </div>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></script>
    </main>
  );
}
