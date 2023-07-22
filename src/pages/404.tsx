import { type NextPage } from "next";
import Link from "next/link";
import { Button } from "~/components/ui/Button";

const NotFoundPage: NextPage = () => {
  return (
    <main className="pink grid h-screen min-h-full place-items-center bg-secondary-800 px-6 py-24 text-white sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-primary-400">404</p>
        <h1
          className="text-secondary-100 mt-4 text-3xl font-bold tracking-tight 
          sm:text-5xl"
        >
          Page not found
        </h1>
        <p className="text-secondary-200 mt-6 text-base leading-7">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href="/">
            <Button variant={"accent"}>Go back home</Button>
          </Link>
          <Link
            href="/forum"
            className="text-secondary-100 text-sm font-semibold"
          >
            Visit forum <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
