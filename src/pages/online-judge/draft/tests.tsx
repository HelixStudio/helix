import { zodResolver } from "@hookform/resolvers/zod";
import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "~/components/ui/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/Form";
import AppShell from "~/components/ui/AppShell";
import { LoadingSection } from "~/components/ui/Loading";
import { api } from "~/utils/api";
import { toastSuccess } from "~/utils/toast";
import { Textarea } from "~/components/ui/Textarea";
import { Checkbox } from "~/components/ui/Checkbox";
import { Input } from "~/components/ui/Input";

export const zip = <T,>(a: T[], b: T[]) => a.map((k, i) => [k, b[i]]);

const OnlineJudgePage: NextPage = () => {
  const session = useSession();
  const router = useRouter();

  const problem = api.problem.getProblemById.useQuery({
    id: parseInt(router.query.id as string),
  });

  const context = api.useContext();

  const addTest = api.problem.addTestsToDraft.useMutation({
    onSuccess: async () => {
      await context.problem.getProblemById.invalidate({
        id: parseInt(router.query.id as string),
      });
    },
  });

  const addExample = api.problem.addExampleToDraft.useMutation({
    onSuccess: async () => {
      await context.problem.getProblemById.invalidate({
        id: parseInt(router.query.id as string),
      });
    },
  });

  const formSchema = z.object({
    input: z.string(),
    output: z.string(),
    points: z.string(),
    is_example: z.boolean().optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      points: "0",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (!values.is_example) {
      addTest.mutate({
        id: problem.data?.id as number,
        input: values.input,
        output: values.output,
        points: parseInt(values.points),
      });
    } else {
      addExample.mutate({
        id: problem.data?.id as number,
        input: values.input,
        output: values.output,
      });
    }
    form.reset({
      input: "",
      output: "",
      points: "0",
      is_example: false,
    });
    toastSuccess("Test added");
  };

  if (session.status === "loading" || problem.isLoading)
    return <LoadingSection />;

  if (
    session.status === "unauthenticated" ||
    problem.data?.authorId != session.data?.user.id
  ) {
    void router.push("/");
  }

  return (
    <AppShell>
      <Head>
        <title>Helix | Online Judge</title>
      </Head>
      <main className="bg-secondary-700 text-white">
        <div className="m-3 ml-auto mr-auto max-w-5xl p-3">
          <h2 className="items-center text-3xl font-bold tracking-tight sm:text-4xl">
            Add tests to #{router.query.id}
          </h2>
          <p>
            Current tests: {JSON.stringify(problem.data?.tests)}. Examples:
            {JSON.stringify(
              zip(
                problem.data?.inputs as string[],
                problem.data?.outputs as string[]
              )
            )}
          </p>
          <div className="my-4 space-y-2">
            <p className="text-xl">Add test:</p>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="input"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Input</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={"Write the input data here."}
                          {...field}
                        ></Textarea>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="output"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Output</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={"Write the output data here."}
                          {...field}
                        ></Textarea>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="points"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Points</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={
                            "The points gained for passing this test."
                          }
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="is_example"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-end gap-2">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel className="leading-none">
                        Example test
                      </FormLabel>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Update</Button>
              </form>
            </Form>
          </div>
        </div>
      </main>
    </AppShell>
  );
};

export default OnlineJudgePage;
