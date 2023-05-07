import { A } from "solid-start";

export interface ButtonLinkProps {
  text: string;
  href: string;
}

export function ButtonLink(props: ButtonLinkProps) {
  return (
    <div>
      <A
        href={props.href}
        class="rounded-md bg-primary-500 px-3.5 py-2.5 text-sm 
            font-semibold transition-all duration-300 text-white shadow-sm
            hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 
            focus-visible:outline-offset-2 focus-visible:outline-primary-300"
      >
        {props.text}
      </A>
    </div>
  );
}

export interface ButtonAction {
  text: string;
  action: (event: Event) => void;
}

export function ButtonAction(props: ButtonAction) {
  return (
    <div>
      <p
        onClick={(e) => props.action(e)}
        class="rounded-md bg-primary-500 px-3.5 py-2.5 text-sm cursor-pointer
            font-semibold transition-all duration-300 text-white shadow-sm
            hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 
            focus-visible:outline-offset-2 focus-visible:outline-primary-300"
      >
        {props.text}
      </p>
    </div>
  );
}

export interface ButtonForm {
  text: string;
}

export function ButtonForm(props: ButtonForm) {
  return (
    <div>
      <button
        type="submit"
        class="rounded-md bg-primary-500 px-3.5 py-2.5 text-sm 
            font-semibold transition-all duration-300 text-white shadow-sm
            hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 
            focus-visible:outline-offset-2 focus-visible:outline-primary-300"
      >
        {props.text}
      </button>
    </div>
  );
}
