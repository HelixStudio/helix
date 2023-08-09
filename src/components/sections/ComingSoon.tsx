import AppShell from "../ui/AppShell";

export const ComingSoonSection = (props: { title: string }) => {
  return (
    <AppShell>
      <div className="flex h-full w-full flex-col items-center justify-center gap-5 align-middle">
        <h1 className="text-4xl font-semibold">
          Coming Soon<span className="text-accent-400">!</span>
        </h1>
        <p className="text-2xl">{props.title}</p>
      </div>
    </AppShell>
  );
};
