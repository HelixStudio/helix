import { For } from "solid-js";
import { A } from "solid-start";
import { OcHome2, OcCommentdiscussion2, OcGear2 } from "solid-icons/oc";

export default function NavBar() {
  const iconSize = 25;
  const pages = [
    { name: "home", icon: <OcHome2 size={iconSize} />, link: "/" },
    {
      name: "forum",
      icon: <OcCommentdiscussion2 size={iconSize} />,
      link: "/forum",
    },
  ];

  return (
    <div class="flex flex-col justify-between top-0 left-0 h-screen w-16 m-0 fixed bg-gray-900 text-white shadow-lg">
      <div class="flex fixed flex-col">
        <For each={pages}>
          {(page) => (
            <A href={page.link}>
              <li
                class="ml-2 relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto 
            bg-gray-800 text-pink-400 hover:bg-pink-500 hover:text-white
            rounded-3xl hover:rounded-xl transition-all duration-300 group"
              >
                {page.icon}

                <span
                  class="absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md
              text-white bg-gray-900 
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
      <li
        class="absolute flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto bottom-2
            bg-gray-800 text-pink-400 hover:bg-pink-500 hover:text-white left-2
            rounded-3xl hover:rounded-xl transition-all duration-300 group hover:cursor-pointer"
      >
        <OcGear2 size={iconSize} />
        <span
          class="absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md
              text-white bg-gray-900 
              text-xs font-bold group-hover:scale-100
              transition-all duration-100 scale-0 origin-left"
        >
          settings
        </span>
      </li>
    </div>
  );
}

// https://solid-icons.vercel.app/
