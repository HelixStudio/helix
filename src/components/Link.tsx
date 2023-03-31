import { A } from "solid-start";

interface LinkProps {
  text: string;
  href: string;
}

export default function Link(props: LinkProps) {
  return (
    <A href={props.href} class="font-medium text-pink-400 hover:text-pink-300">
      {props.text}
    </A>
  );
}
