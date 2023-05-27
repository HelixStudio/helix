import {
  type InferGetServerSidePropsType,
  type GetServerSidePropsContext,
} from "next";
import { getProviders, signIn } from "next-auth/react";
import Head from "next/head";
import { Button } from "~/components/ui/Button";
import { getServerAuthSession } from "~/server/auth";

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

const SignInPage = ({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>Sign in</title>
      </Head>

      <main className="flex h-screen flex-col items-center justify-center bg-zinc-900">
        <h1 className="pb-8 text-6xl">Helix</h1>
        <div className="flex flex-col items-center rounded-lg bg-zinc-800 p-4">
          <p className="mb-4">Sign in with</p>
          <div className="grid grid-cols-2">
            {Object.values(providers).map((provider) => (
              <div key={provider.name} className=" p-3">
                <Button
                  variant={"primary"}
                  onClick={() => void signIn(provider.id)}
                >
                  Sign in with {provider.name}
                </Button>
              </div>
            ))}
          </div>
          <p className="mt-4">
            By signing in, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </main>
    </>
  );
};

export default SignInPage;
