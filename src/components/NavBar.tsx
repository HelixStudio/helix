import { For } from "solid-js";
import { A } from "solid-start";

export default function NavBar() {
  const pages = [
    { name: "home", link: "/" },
    { name: "forum", link: "/forum" },
  ];

  return (
    <div>
      <For each={pages}>
        {(page) => (
          <li>
            <A href={page.link}>{page.name}</A>
          </li>
        )}
      </For>
    </div>
  );
}
