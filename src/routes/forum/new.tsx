import { createRouteData, useRouteData, useSearchParams } from "solid-start";
import { createServerAction$, redirect } from "solid-start/server";
import { ButtonForm } from "~/components/Button";
import { getUserId } from "~/utils/session";
import { createMemo } from "solid-js";
import { useUserSession } from "~/utils/auth";
import { getDB } from "~/utils/db";

export function forumData() {
  return createMemo(() =>
    createRouteData(async () => {
      const db = getDB()!;
      return {
        user: useUserSession(),
        communities: await db.community.findMany({}),
      };
    })
  );
}

export default function WriteNewPostPage() {
  const [searchParams] = useSearchParams();
  // searchParams.id -> community id

  const [creating, { Form }] = createServerAction$(
    async (form: FormData, { request }) => {
      const db = getDB()!;

      const title = form.get("title") as string;
      const content = form.get("content") as string;
      const authorId = await getUserId(request);
      const communityId = form.get("id") as string;

      if (authorId == null) throw redirect("/login");

      await db.post.create({
        data: {
          content: content,
          title: title,
          authorId: authorId,
          communityId: communityId,
        },
      });

      return redirect("/forum");
    }
  );

  return (
    <div class="m-3 items-center">
      <p class="text-3xl font-bold tracking-tight sm:text-4xl">Create a post</p>
      <Form class="mt-4">
        <div class="space-y-12">
          <div class="pb-12">
            <div class="sm:col-span-3">
              <label
                for="title"
                class="block text-sm font-medium leading-6 text-secondary-100"
              >
                Title
              </label>
              <div class="mt-2">
                <input
                  type="text"
                  name="title"
                  class="block focus:ring-primary-400 pl-3 w-full rounded-md border-0 text-secondary-100 shadow-sm ring-2 ring-inset ring-secondary-600 bg-secondary-800
                  placeholder:text-secondary-400 focus:ring-3 sm:py-1.5 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <input
              type="text"
              name="id"
              value={searchParams.id}
              class="hidden"
            />
            <div class="col-span-full">
              <label
                for="content"
                class="block text-sm font-medium leading-6 text-secondary-100 mt-3"
              >
                Content
              </label>
              <div class="mt-2">
                <textarea
                  name="content"
                  rows="3"
                  class="block pl-3 focus:ring-primary-400 w-full rounded-md border-0 text-secondary-100 shadow-sm ring-2 ring-inset ring-secondary-600 bg-secondary-800
                  placeholder:text-secondary-400 focus:ring-3 sm:py-1.5 sm:text-sm sm:leading-6"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <ButtonForm text="Create" />
      </Form>
    </div>
  );
}
