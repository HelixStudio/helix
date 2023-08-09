import { Button } from "~/components/ui/Button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "~/components/ui/Card";
import { type CTFChallenge } from "~/utils/ctf";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/Dialog";
import { sanitize } from "isomorphic-dompurify";
import { marked } from "marked";
// import { Balancer } from "react-wrap-balancer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "~/components/ui/Form";
import { Input } from "~/components/ui/Input";
// import { toastSuccess } from "~/utils/toast";
import { api } from "~/utils/api";
import { toastError, toastPlain, toastSuccess } from "~/utils/toast";

const FormSchema = z.object({
  flag: z.string().min(2, {
    message: "Flag must be at least 2 characters.",
  }),
});

export const CTFChallengeCard = ({
  challenge,
  solved,
}: {
  challenge: CTFChallenge;
  solved: boolean;
}) => {
  const renderedContent = marked.parse(challenge.description);
  const safeContent = sanitize(renderedContent);

  const checkFlag = api.ctf.checkFlag.useMutation({
    onSuccess: (data) => {
      if (data.message == "correct") {
        toastSuccess("Flag is correct!");
      } else if (data.message == "wrong") {
        toastError("Flag is wrong!");
      } else toastPlain(data.message);
    },
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    checkFlag.mutate({
      id: challenge.id,
      flag: data.flag,
    });
  };

  return (
    <Card key={challenge.id} className="h-52 md:w-64">
      <CardHeader>
        <CardTitle>
          <div className="flex flex-row justify-between">
            <p>{challenge.name}</p>
            {solved && <p>✅</p>}
          </div>
        </CardTitle>
        <CardDescription>{challenge.points} points</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Category: {challenge.category}</p>
      </CardContent>
      <CardFooter>
        <Dialog>
          <DialogTrigger>
            <Button>Read more</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="flex flex-row items-center gap-3 text-3xl">
                {challenge.name} {solved && <p>✅</p>}
              </DialogTitle>
              <DialogDescription className="pt-3 text-lg">
                <div className="flex w-full flex-row justify-between">
                  <p>
                    <span className="text-primary-400/50">Category: </span>
                    {challenge.category}
                  </p>
                  <p>
                    <span className="text-primary-400/50">Points: </span>
                    {challenge.points}
                  </p>
                </div>
                {/* <Balancer> */}
                <div
                  className="prose prose-invert w-full py-2"
                  dangerouslySetInnerHTML={{ __html: safeContent }}
                ></div>
                {/* </Balancer> */}
                <p className="text-sm">
                  <span className="text-primary-400/50">Note: </span>
                  if the website responds with an error message, refresh the
                  page. The error is expected.
                </p>
                <div className="w-full pt-3">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                      <div className="grid grid-cols-4 gap-3">
                        <FormField
                          control={form.control}
                          name="flag"
                          render={({ field }) => (
                            <FormItem className="col-span-3 w-full">
                              <FormControl>
                                <Input placeholder="Flag" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <Button type="submit" className="col-span-1">
                          Submit
                        </Button>
                      </div>
                    </form>
                  </Form>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};
