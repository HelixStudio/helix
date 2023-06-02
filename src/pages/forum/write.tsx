import { type NextPage } from "next";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "~/components/ui/Button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "~/components/ui/Form";
import AppShell from "~/components/ui/AppShell";
import { useForm } from "react-hook-form";
import { Input } from "~/components/ui/Input";
import { Textarea } from "~/components/ui/Textarea";
import Combobox from "~/components/ui/Combobox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/Tabs";

const WritePage: NextPage = () => {
  const formSchema = z.object({
    title: z
      .string()
      .min(5, {
        message: "Title must be at least 5 characters.",
      })
      .max(300, {
        message: "Title must not be more than 300 characters.",
      }),
    content: z.string().max(1024, {
      message: "Content cannot be longer than 1024 characters.",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <AppShell>
      <div className="mx-auto max-w-5xl sm:px-3">
        <h1 className="py-3 text-2xl">Write a new post</h1>
        <div className="pb-3">
          <Combobox
            placeholder="Choose a group"
            options={["Personal", "Helix", "CompProg"]}
          />
        </div>
        <Tabs defaultValue="text">
          <TabsList>
            <TabsTrigger value="text">Text</TabsTrigger>
            <TabsTrigger value="image">Image</TabsTrigger>
          </TabsList>
          <TabsContent value="text" className="w-full">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full space-y-8"
              >
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder={"Title"} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea placeholder={"Content"} {...field}></Textarea>
                      </FormControl>
                      <FormDescription>
                        Format your text using markdown!
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Post</Button>
              </form>
            </Form>
          </TabsContent>
          <TabsContent value="image">Upload your images here.</TabsContent>
        </Tabs>
      </div>
    </AppShell>
  );
};

export default WritePage;
