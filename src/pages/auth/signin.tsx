import {
  type InferGetServerSidePropsType,
  type GetServerSidePropsContext,
} from "next";
import { getProviders, signIn } from "next-auth/react";
import Head from "next/head";
import { Button } from "~/components/ui/Button";
import { getServerAuthSession } from "~/server/auth";
import { FaDiscord, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { type IconType } from "react-icons";
import Link from "next/link";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerAuthSession(context);

  if (session) {
    return { redirect: { destination: "/" } };
  }

  const providers = await getProviders();

  return {
    props: { providers: providers ?? [] },
  };
}

const IconTypeToComponent = (props: { icon: IconType; size: number }) => (
  <props.icon size={props.size} />
);

const SignInPage = ({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const providerToIcon = new Map<string, IconType>([
    ["Discord", FaDiscord],
    ["GitHub", FaGithub],
    ["Google", FaGoogle],
    ["Twitter", FaTwitter],
  ]);

  return (
    <>
      <Head>
        <title>Sign in</title>
      </Head>

      <main className="flex h-screen flex-col items-center justify-center bg-zinc-900 ">
        <h1 className="pb-8 text-7xl font-bold leading-normal">
          Helix<span className="text-accent-400">.</span>
        </h1>
        <div className="flex w-screen flex-col items-center rounded-none bg-zinc-800 p-4 ring-2 ring-zinc-700 sm:w-fit sm:rounded-lg">
          <p className="mb-4">Sign in with</p>
          <div className="grid grid-cols-2">
            {Object.values(providers).map((provider) => (
              <div key={provider.name} className="p-3">
                <Button
                  variant={"primary"}
                  size={"lg"}
                  onClick={() => void signIn(provider.id)}
                >
                  <div className="pr-3">
                    <IconTypeToComponent
                      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                      icon={providerToIcon.get(provider.name)!}
                      size={20}
                    />
                  </div>
                  {provider.name}
                </Button>
              </div>
            ))}
          </div>
          <p className="mt-4">
            By signing in, you agree to our{" "}
            <Link href="/terms-of-service" className="hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </main>
    </>
  );
};

export default SignInPage;
