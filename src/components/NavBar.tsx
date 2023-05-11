import { For } from "solid-js";
import { A, useLocation } from "solid-start";
import {
  OcHome2,
  OcCommentdiscussion2,
  OcGear2,
  OcCode2,
  OcPencil2,
} from "solid-icons/oc";

export default function NavBar() {
  const location = useLocation();

  const iconSize = 25;
  const pages = [
    { name: "home", icon: <OcHome2 size={iconSize} />, link: "/" },
    {
      name: "forum",
      icon: <OcCommentdiscussion2 size={iconSize} />,
      link: "/forum",
    },
    {
      name: "online judge",
      icon: <OcCode2 size={iconSize} />,
      link: "/online-judge",
    },
    {
      name: "code runner",
      icon: <OcPencil2 size={iconSize} />,
      link: "/code-runner",
    },
  ];

  return (
    <div class="flex flex-col justify-between top-0 left-0 h-screen w-16 m-0 fixed bg-secondary-900 text-white shadow-lg">
      <div class="flex fixed flex-col">
        <For each={pages}>
          {(page) => (
            <A href={page.link}>
              <li
                class={`ml-2 relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto 
                      ${
                        (
                          page.link == "/"
                            ? location.pathname === page.link
                            : location.pathname.startsWith(page.link)
                        )
                          ? "ring-primary-500 ring-2 bg-secondary-800 text-white rounded-xl"
                          : "bg-secondary-800 text-primary-400 hover:bg-primary-500 hover:text-white hover:rounded-xl"
                      }
                      rounded-3xl transition-all duration-300 group`}
              >
                {page.icon}

                <span
                  class="absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md
              text-white bg-secondary-900 
              text-xs font-bold group-hover:scale-100
              transition-all duration-100 scale-0 origin-left"
                >
                  {page.name}
                </span>
              </li>
            </A>
          )}
        </For>
      </div>
      <A href="/settings">
        <li
          class="absolute flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto bottom-2
            bg-secondary-800 text-primary-400 hover:bg-primary-500 hover:text-white left-2
            rounded-3xl hover:rounded-xl transition-all duration-300 group hover:cursor-pointer"
        >
          <OcGear2 size={iconSize} />
          <span
            class="absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md
              text-white bg-secondary-900 
              text-xs font-bold group-hover:scale-100
              transition-all duration-100 scale-0 origin-left"
          >
            settings
          </span>
        </li>
      </A>
    </div>
  );
}

// https://solid-icons.vercel.app/
