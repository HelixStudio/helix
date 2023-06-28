import Link from "next/link";

const Footer = () => {
  return (
    <footer className="max-w-container mx-auto mt-32 w-full">
      <div className="border-t border-slate-100/5 py-10">
        <p className="text-center text-xl leading-6 text-slate-100">
          <Link className="hover:underline" href="/">
            Helix
          </Link>
        </p>
        <p className="mt-5 text-center text-sm leading-6 text-slate-100">
          © 2023{" "}
          <Link
            className="hover:underline"
            href="https://stefan-asandei.netlify.app"
          >
            Asandei Stefan-Alexandru
          </Link>
          . All rights reserved.
        </p>
        <div className="mt-6 flex items-center justify-center space-x-4 text-sm leading-6 text-slate-200">
          <Link href="/privacy-policy" className="hover:underline">
            Privacy policy
          </Link>
          <div className="h-4 w-px bg-slate-100/50"></div>
          <Link href="/terms-of-service" className="hover:underline">
            Terms of service
          </Link>
          <div className="h-4 w-px bg-slate-100/50"></div>
          <Link href="/changelog" className="hover:underline">
            Changelog
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
