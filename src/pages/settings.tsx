import { type NextPage } from "next";
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
import AppShell from "~/components/ui/AppShell";
import { useForm } from "react-hook-form";
import { LoadingSection } from "~/components/ui/Loading";
import { api } from "~/utils/api";
import { Textarea } from "~/components/ui/Textarea";
import { useEffect } from "react";

const SettingsPage: NextPage = () => {
  const { data: user, isLoading } = api.user.getMetadata.useQuery({
    id: undefined,
  });
  const updateUserMetadata = api.user.updateMetadata.useMutation();

  const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    bio: z.string().max(255, {
      message: "Bio must not be longer than 255 characters.",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      bio: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    updateUserMetadata.mutate({
      id: undefined,
      ...values,
    });
  };

  useEffect(() => {
    if (user === null || user === undefined) return;
    const defaultValues = {
      username: user?.name as string,
      bio: user?.bio ?? "",
    };
    form.reset(defaultValues);
  }, [form, user]);

  if (isLoading) {
    return <LoadingSection />;
  }

  return (
    <AppShell>
      <div className="mx-auto max-w-5xl px-3">
        <div>
          <h1 className="py-3 text-2xl">User settings</h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder={user?.name ?? ""} {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bio</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={user?.bio as string}
                        {...field}
                      ></Textarea>
                    </FormControl>
                    <FormDescription>This is your bio.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Update</Button>
            </form>
          </Form>
        </div>
      </div>
    </AppShell>
  );
};

export default SettingsPage;
