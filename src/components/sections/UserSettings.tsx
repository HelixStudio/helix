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
import { LoadingSpinner } from "~/components/ui/Loading";
import { api } from "~/utils/api";
import { useEffect } from "react";
import { toastSuccess } from "~/utils/toast";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/Select";
import {
  colorThemes,
  homepageLayoutAtom,
  homepageLayouts,
  themeAtom,
} from "~/utils/atoms";
import { useAtom } from "jotai";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";

const UserSettings = () => {
  const router = useRouter();
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
    toastSuccess("Settings saved!");
  };

  const [theme, setTheme] = useAtom(themeAtom);
  const [layout, setLayout] = useAtom(homepageLayoutAtom);

  useEffect(() => {
    if (user === null || user === undefined) return;
    const defaultValues = {
      username: user?.name as string,
      bio: user?.bio ?? "",
    };
    form.reset(defaultValues);
  }, [form, user]);

  if (isLoading) {
    return (
      <div className="flex h-[20vh] items-center justify-center">
        <LoadingSpinner size={25} />
      </div>
    );
  }

  return (
    <div>
      <h1 className="my-4 border-b-2 text-2xl">User settings</h1>
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
          <div className="grid max-w-xs grid-flow-row grid-cols-2 content-center items-end space-y-4">
            <p>Color theme:</p>
            <Select
              defaultValue={theme}
              onValueChange={(newTheme) => {
                setTheme(newTheme);
                if (typeof window !== "undefined") {
                  const body = document.querySelector("body") as HTMLElement;
                  body.classList.remove(theme);
                  body.classList.add(newTheme);
                }
              }}
            >
              <SelectTrigger className="max-w-[150px]">
                <SelectValue placeholder="color theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Themes</SelectLabel>
                  {colorThemes.map((ctheme) => (
                    <SelectItem value={ctheme} key={ctheme} className="w-full">
                      <div className="flex w-full flex-row items-center justify-between gap-2">
                        <div
                          className={`${ctheme} h-[20px] w-[20px] rounded-md bg-accent-500`}
                        ></div>
                        <p>{ctheme}</p>
                      </div>
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <p>Homepage layout:</p>
            <Select
              defaultValue={layout}
              onValueChange={(newLayout) => {
                setLayout(newLayout);
              }}
            >
              <SelectTrigger className="max-w-[150px]">
                <SelectValue placeholder="homepage layout" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Layout</SelectLabel>
                  {homepageLayouts.map((oneLayout) => (
                    <SelectItem
                      value={oneLayout}
                      key={oneLayout}
                      className="w-full"
                    >
                      <p>{oneLayout}</p>
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-row gap-2">
            <Button type="submit">Update</Button>
            <Button
              onClick={() => {
                router
                  .push("/")
                  .then(async () => {
                    await signOut();
                  })
                  .catch((e) => {
                    console.log(e);
                  });
              }}
              type="button"
            >
              Sign out
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default UserSettings;
