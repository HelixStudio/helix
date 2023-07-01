import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "~/components/ui/Button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/Form";
import { Input } from "~/components/ui/Input";
import { useForm } from "react-hook-form";
import { Textarea } from "~/components/ui/Textarea";
import { useRouter } from "next/router";
import AppShell from "~/components/ui/AppShell";
import { LoadingSection } from "~/components/ui/Loading";
import { api } from "~/utils/api";
import { toastSuccess } from "~/utils/toast";

const WriteNewProblemPage: NextPage = () => {
  const session = useSession();
  const router = useRouter();

  const submit = api.problem.postProblemDraft.useMutation();

  const formSchema = z.object({
    title: z.string(),
    source: z.string(),
    sourceLink: z.string(),
    statement: z.string(),
    inputFormat: z.string(),
    outputFormat: z.string(),

    // inputs: z.array(z.string()),
    // outputs: z.array(z.string()),

    notes: z.string(),
    tags: z.string(),
    difficulty: z.string(),

    timeLimitMs: z.string(),
    memLimitBytes: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    submit.mutate({
      authorId: session.data?.user.id as string,
      difficulty: values.difficulty,
      inputFormat: values.inputFormat,
      memLimitBytes: parseInt(values.memLimitBytes),
      notes: values.notes,
      outputFormat: values.outputFormat,
      source: values.source,
      sourceLink: values.sourceLink,
      statement: values.statement,
      tags: values.tags.split(",").map((t) => t.trim()),
      timeLimitMs: parseInt(values.timeLimitMs),
      title: values.title,
    });
    void router.push("/online-judge");
    toastSuccess("Draft published!");
  };

  if (session.status === "loading") return <LoadingSection />;

  if (session.status === "unauthenticated") {
    void router.push("/");
  }

  return (
    <AppShell>
      <Head>
        <title>Helix | Online Judge</title>
      </Head>
      <main className="bg-secondary-700 text-white">
        <div className="m-3 ml-auto mr-auto max-w-5xl p-3">
          <div className="mb-4">
            <h1 className="items-center text-3xl font-bold tracking-tight sm:text-4xl">
              Propose a problem
            </h1>
            <p>
              This can be a hard process, take your time and fill the form
              carefully.
            </p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="A short title teasing what the problem is about"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-flow-col gap-2">
                <FormField
                  control={form.control}
                  name="source"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Source</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Did you get this problem from somewhere else? Drop the source here"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="sourceLink"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Source link</FormLabel>
                      <FormControl>
                        <Input placeholder="and the link here" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="statement"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Statement</FormLabel>
                    <FormControl>
                      <Textarea {...field}></Textarea>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-flow-col gap-2">
                <FormField
                  control={form.control}
                  name="inputFormat"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Input format</FormLabel>
                      <FormControl>
                        <Textarea {...field}></Textarea>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="outputFormat"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Output format</FormLabel>
                      <FormControl>
                        <Textarea {...field}></Textarea>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Notes</FormLabel>
                    <FormControl>
                      <Textarea {...field}></Textarea>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="tags"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tags</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Separate each tag using a comma"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="difficulty"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Difficulty</FormLabel>
                    <FormControl>
                      <Input placeholder="Easy, medium or hard" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-flow-col gap-2">
                <FormField
                  control={form.control}
                  name="timeLimitMs"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Time limit (milliseconds)</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="memLimitBytes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Memory limit (bytes)</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <p>
                  This form covers the basic information related to the problem.
                  After you submit the draft will be saved and you&apos;ll be
                  able to edit and publish the problem. You need to add the
                  tests and examples after you submit the draft.
                </p>
              </div>
              <Button type="submit">Submit draft</Button>
            </form>
          </Form>
        </div>
      </main>
    </AppShell>
  );
};

export default WriteNewProblemPage;
