import NavBar from "./NavBar";

const AppShell = (props: { children: React.ReactNode }) => {
  return (
    <>
      <main className="flex flex-row bg-secondary-700">
        <NavBar />
        <div className="min-h-screen w-full">{props.children}</div>
      </main>
    </>
  );
};

export default AppShell;
