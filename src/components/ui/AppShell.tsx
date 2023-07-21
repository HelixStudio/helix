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

  return (
    <>
      <main
        className={`${poppins.variable} font-sans ${theme} dark flex flex-row bg-secondary-700`}
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
