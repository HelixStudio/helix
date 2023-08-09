import Link from "next/link";

const Footer = () => {
  return (
    <footer className="max-w-container mx-auto mt-32 w-full">
      <div className="border-t border-slate-100/5 py-10">
        <p className="text-center text-xl leading-6 text-slate-100">
          <Link className="hover:text-accent-400 text-2xl text-white font-bold leading-normal" href="/">
            Helix<span className="text-accent-400">.</span>
          </Link>
        </p>
        <h1 className="mt-4 text-center text-4xl font-extrabold tracking-tighter md:text-6xl">
          <span style={{ "display": "inline-block", "verticalAlign": "top", "textDecoration": "inherit", "maxWidth": "988px" }}>Cya again soon! <span role="img" aria-label="Smiling Face with Sunglasses">😎</span></span>
        </h1>
        <p className="mt-5 text-center text-sm leading-6 text-slate-100">
          Made with ❤️ by{" "}
          <Link
            className="hover:underline"
            href="https://stefan-asandei.netlify.app"
          >
            Asandei Stefan-Alexandru
          </Link>
          {" & "}
          <Link
            className="hover:underline"
            href="https://mihairadu.cf"
          >
            Mihai-Alexandru Radu
          </Link>
        </p>
        <p className="text-center">
          © Copyright <Link className="text-accent-400" href="https://github.com/HelixStudio">#TeamHelix</Link> 2023{" "} 

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
