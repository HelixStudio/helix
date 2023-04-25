import { A } from "solid-start";

interface LinkProps {
  text: string;
  href: string;
}

export default function Link(props: LinkProps) {
  return (
    <A
      href={props.href}
      class="font-medium text-primary-400 hover:text-primary-300"
    >
      {props.text}
    </A>
  );
}
