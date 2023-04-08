import { redirect } from "solid-start";
import { createServerAction$ } from "solid-start/server";
import { ButtonForm } from "~/components/Button";
import { getDB } from "~/utils/db";
import { getUserId } from "~/utils/session";

export default function CreateCommunityPage() {
  const [creating, { Form }] = createServerAction$(
    async (form: FormData, { request }) => {
      const db = getDB()!;

      const name = form.get("name") as string; // TODO: can't include spaces
      const description = form.get("description") as string;
      const authorId = await getUserId(request); // TODO: add author id

      await db.community.create({
        data: {
          name: name,
          description: description,
        },
      });

      return redirect("/forum");
    }
  );

  return (
    <div class="m-3 items-center">
      <p class="text-3xl font-bold tracking-tight sm:text-4xl">
        Create a community
      </p>
      <Form class="mt-4">
        <div class="space-y-12">
          <div class="border-b border-gray-900/10 pb-12">
            <div class="sm:col-span-3">
              <label
                for="name"
                class="block text-sm font-medium leading-6 text-gray-100"
              >
                Community name
              </label>
              <div class="mt-2">
                <input
                  type="name"
                  name="name"
                  class="block pl-3 w-full rounded-md border-0 text-gray-100 shadow-sm ring-2 ring-inset ring-gray-600 bg-gray-800
                  placeholder:text-gray-400 focus:ring-3 sm:py-1.5 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="col-span-full">
              <label
                for="description"
                class="block text-sm font-medium leading-6 text-gray-100 mt-3"
              >
                Description (can include rules)
              </label>
              <div class="mt-2">
                <textarea
                  name="description"
                  rows="3"
                  class="block pl-3 w-full rounded-md border-0 text-gray-100 shadow-sm ring-2 ring-inset ring-gray-600 bg-gray-800
                  placeholder:text-gray-400 focus:ring-3 sm:py-1.5 sm:text-sm sm:leading-6"
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
