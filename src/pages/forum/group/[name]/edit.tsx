/* eslint-disable @typescript-eslint/no-unsafe-call */
import { type NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import AppShell from "~/components/ui/AppShell";
import { LoadingSection } from "~/components/ui/Loading";
import { api } from "~/utils/api";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useSession } from "next-auth/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "~/components/ui/Button";
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormDescription,
  Form,
} from "~/components/ui/Form";
import { Textarea } from "~/components/ui/Textarea";
import { Input } from "~/components/ui/Input";
import { toastSuccess } from "~/utils/toast";

dayjs.extend(relativeTime);

export const rulesString = (rules: string[]): string => {
  if (!rules) return "";
  let s = "";
  rules.forEach((rule) => {
    s += rule + "\n";
  });
  return s;
};

const EditGroupPage: NextPage = () => {
  const router = useRouter();
  const user = useSession();

  const group = api.group.getGroup.useQuery({
    name: router.query.name as string,
  });
  const updateGroup = api.group.updateGroup.useMutation();

  const formSchema = z.object({
    description: z.string().max(255, {
      message: "Description must not be longer than 255 characters.",
    }),
    rules: z.string().max(255 * 10, {
      message:
        "Your group can't have more than 10 questions each with 255 characters.",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: group.data?.description ?? "",
      rules: rulesString(group.data?.rules as string[]),
    },
  });
  const watchAllFields = form.watch();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const groupName = router.query.name as string;
    updateGroup.mutate({
      name: groupName,
      description: values.description,
      rules: values.rules.split("\n"),
    });
    toastSuccess("Group edited!");
    await router.push(`/forum/group/${groupName}`);
  };

  useEffect(() => {
    if (
      group.isLoading ||
      watchAllFields.description != "" ||
      watchAllFields.rules != ""
    )
      return;
    form.setValue("description", group.data?.description as string);
    form.setValue("rules", rulesString(group.data?.rules as string[]));
  });

  if (user.data?.user.id != group.data?.authorId) {
    void router.push(`/forum/group/${router.query.name as string}`);
    return <LoadingSection />;
  }

  if (
    group.isLoading ||
    group.data == undefined ||
    group.data == null ||
    user.status == "loading"
  ) {
    return <LoadingSection />;
  }

  return (
    <AppShell>
      <div className="mx-auto max-w-5xl px-3">
        <h1 className="py-3 text-2xl">Edit group</h1>
        <p className="pb-3 text-lg">Name: {group.data.name}</p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-8"
          >
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder={"Description"} {...field} />
                  </FormControl>
                  <FormDescription>
                    Write a short and compressive description.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="rules"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      rows={10}
                      placeholder={"Rules"}
                      {...field}
                    ></Textarea>
                  </FormControl>
                  <FormDescription>
                    Each rules should be on a new line!
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Update</Button>
          </form>
        </Form>
      </div>
    </AppShell>
  );
};

export default EditGroupPage;
