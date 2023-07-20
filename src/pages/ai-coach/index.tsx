"use client";

import { useChat } from "ai/react";
import { sanitize } from "isomorphic-dompurify";
import { marked } from "marked";
import Head from "next/head";
import { useRouter } from "next/router";
import AppShell from "~/components/ui/AppShell";
import IconButton from "~/components/ui/IconButton";

export default function Chat() {
  const router = useRouter();

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
    initialMessages:
      router.query.prompt !== undefined
        ? [
            {
              id: Date.now().toString(),
              role: "system",
              content: router.query.prompt as string,
            },
          ]
        : [],
  });

  const renderHTML = (markdown: string) => {
    const renderedContent = marked.parse(markdown);
    const safeContent = sanitize(renderedContent);
    return safeContent;
  };

  return (
    <AppShell>
      <Head>
        <title>Helix | AI Coach</title>
      </Head>
      <div className="ml-auto mr-auto flex min-h-screen max-w-5xl flex-col items-start justify-between overflow-hidden pb-20 md:p-3">
        {messages.length == 0 && (
          <div className="flex w-full flex-col items-start justify-between pb-2 sm:flex-row sm:items-center">
            <div>
              <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">
                AI Coach
              </h2>
              <p className="mb-4">
                This is you personal assistant. AI is an area of active research
                with known problems such as biased generation and
                misinformation. Do not use this application for high-stakes
                decisions or advice. This conversation is not saved.
              </p>
            </div>
            <div>
              {/* <Selector
                    label="mode"
                    value={userModel()}
                    options={["conversational", "coder", "advanced"]}
                    callback={(option) => {
                      setUserModel(option);
                    }}
                  /> */}
            </div>
          </div>
        )}
        <div className="h-full w-full overflow-y-scroll p-2 md:p-0">
          {messages.map((m) => (
            <div key={m.id}>
              <div className="mr-2">
                <div
                  className={`mb-2 flex flex-row ${
                    m.role == "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-fit rounded-lg p-2 ${
                      m.role == "user"
                        ? "bg-accent-500"
                        : m.role == "assistant"
                        ? "prose bg-secondary-800 dark:prose-invert"
                        : "bg-secondary-700"
                    }`}
                    dangerouslySetInnerHTML={{
                      __html: renderHTML(m.content),
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="fixed bottom-16 w-full bg-secondary-700 px-1 md:relative md:bottom-0">
          <div className="mb-2 mt-3 flex w-full flex-row items-center gap-3 bg-secondary-700">
            <form
              onSubmit={handleSubmit}
              className="flex w-full flex-row items-center gap-3"
            >
              <input
                className="flex h-10 w-full rounded-md border border-secondary-600 bg-transparent px-3 py-2 
                    text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium 
                    placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 
                    focus-visible:ring-secondary-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed 
                    disabled:opacity-50"
                value={input}
                placeholder="Write your prompt here!"
                onChange={handleInputChange}
              />
              <IconButton
                label={"send prompt"}
                variant={"outline"}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>
                }
                onClick={() => {
                  // submit form
                  return;
                }}
              />
            </form>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
