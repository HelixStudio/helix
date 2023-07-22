import { themeAtom } from "~/utils/atoms";
import CommandMenu from "../functional/CommandMenu";
import NavBar from "./NavBar";
import { useAtom } from "jotai";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const AppShell = (props: { children: React.ReactNode }) => {
  const [theme] = useAtom(themeAtom);

  // a bit of a hack
  if (typeof window !== "undefined") {
    const body = document.querySelector("body") as HTMLElement;
    if (theme != "pink") body.classList.remove("pink");
    body.classList.add(theme);
  }

  // hope the overflow-hidden won't break something in the future
  return (
    <>
      <main
        className={`${poppins.variable} font-sans ${theme} dark flex flex-row overflow-hidden bg-secondary-700`}
      >
        <CommandMenu />
        <NavBar />
        <div className="mb-16 min-h-screen w-full md:mb-0 md:ml-16">
          {props.children}
        </div>
      </main>
    </>
  );
};

export default AppShell;
