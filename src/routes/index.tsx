import { For, Show, Suspense, createMemo, createResource } from "solid-js";
import { createRouteAction, useRouteData } from "solid-start";
import { createServerAction$ } from "solid-start/server";
import { logout, useUserSession } from "~/utils/auth";
import { loadTheme } from "./settings";
import { A } from "@solidjs/router";
import { ButtonAction, ButtonForm } from "~/components/Button";
import Link from "~/components/Link";
import { isClient } from "~/utils/db";

const fetchHackerNews = async (): Promise<{ title: string; url: string }[]> => {
  const topStoriesUrl = "https://hacker-news.firebaseio.com/v0/topstories.json";
  const itemUrl = "https://hacker-news.firebaseio.com/v0/item/";
  let news: { title: string; url: string }[] = [];

  const storiesRes = await fetch(topStoriesUrl);
  const data = await storiesRes.json();
  const maxStories = 10;

  for (let i = 0; i < maxStories; i++) {
    const res = await fetch(`${itemUrl}${data[i]}.json`);
    const storyMetadata = await res.json();
    news.push({ title: storyMetadata.title, url: storyMetadata.url });
  }

  return news;
};

export function userData() {
  return createMemo(() => useUserSession());
}

export function userNewsData() {
  // const [news] = createResource(async () => {
  //   const response = await fetchHackerNews();
  //   return response;
  // });
  return { user: useUserSession(), news: [] };
}

export default function HomePage() {
  const data = useRouteData<typeof userNewsData>();
  loadTheme(data.user()?.theme!);

  const [news, getNews] = createRouteAction(async () => {
    const hn = localStorage.getItem("hn");
    if (hn != null) {
      return JSON.parse(hn);
    }
    const news = await fetchHackerNews();
    localStorage.setItem("hn", JSON.stringify(news));
    return news;
  });

  getNews();

  return (
    <main class="bg-secondary-800 text-white min-h-screen">
      <div class="ml-auto mr-auto max-w-5xl">
        <div class="m-3 items-center">
          <div class="mb-5">
            <h2 class="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Welcome to Helix!
            </h2>
            <p>
              We are a community of young people passionate about IT and
              programming. We learn together by participating in online
              programming competitions, reading computer news and articles, or
              discussing on the forum.
            </p>

            <p>Things you can do:</p>
            <ul class="list-disc ml-7">
              <li>
                Read the{" "}
                <A
                  href="/forum"
                  class="text-primary-400 hover:text-primary-300"
                >
                  forum
                </A>
                !
              </li>
              <li>
                Practice some{" "}
                <A
                  href="/online-judge"
                  class="text-primary-400 hover:text-primary-300"
                >
                  competitve programming
                </A>{" "}
                problems
              </li>

              <li>
                Test out your{" "}
                <A
                  href="/code-runner"
                  class="text-primary-400 hover:text-primary-300"
                >
                  software
                </A>{" "}
              </li>
              <li>
                Chat with our{" "}
                <A
                  href="/ai-coach"
                  class="text-primary-400 hover:text-primary-300"
                >
                  AI bot
                </A>
              </li>
            </ul>
          </div>
          <Show when={news.result}>
            <h1 class="text-3xl mb-3">Latest HN news</h1>
            <div class="flex flex-col gap-2">
              <For each={news.result}>
                {(story, i) => (
                  <div>
                    <p>
                      {i}. <Link text={story.title} href={story.url} />
                    </p>
                  </div>
                )}
              </For>
            </div>
          </Show>
        </div>
      </div>
    </main>
  );
}
