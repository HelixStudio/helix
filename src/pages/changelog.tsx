import { type NextPage } from "next";
import Footer from "~/components/ui/Footer";

const ChangeLog: NextPage = () => {
  return (
    <div className="bg-gradient-to-b from-slate-900 to-zinc-900">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col gap-3 p-5">
        <h1 className="mb-3 text-3xl font-bold">Helix Changelog</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          tristique orci quam, vitae gravida nulla volutpat non. Phasellus eu
          eros leo. Phasellus a aliquam neque. Nam non erat accumsan, posuere
          diam in, rutrum magna. Fusce sagittis malesuada dapibus. Nullam mattis
          ipsum nunc, malesuada consequat nisl mollis maximus. In et diam ac
          orci fringilla accumsan nec in ligula. Suspendisse ultrices, eros a
          lacinia elementum, erat mauris scelerisque leo, ac viverra lorem
          tortor ut tortor. Sed blandit bibendum luctus. Donec est nisi, semper
          ut vestibulum in, gravida vitae mi. Maecenas euismod enim augue, ac
          semper metus commodo vitae. Aenean elementum lectus felis, non cursus
          nunc accumsan vitae. Vestibulum ipsum magna, vulputate mattis felis
          vitae, molestie cursus justo. Proin convallis, nunc vel commodo
          malesuada, tellus sapien ultrices turpis, non volutpat mi libero id
          felis. Proin auctor metus risus, at finibus mauris porta facilisis.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default ChangeLog;
