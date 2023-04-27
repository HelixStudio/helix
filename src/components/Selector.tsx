import { createSignal } from "solid-js";

interface SelectorProps {
  label: string;
  options: string[];
  value: string;
  callback: (option: string) => void;
}

export default function Selector(props: SelectorProps) {
  return (
    <div class="flex flex-row items-center gap-3">
      <p>{props.label}</p>
      <div class="inline-block relative w-64">
        <select
          value={props.value}
          onChange={(e) =>
            props.callback((e.target as HTMLSelectElement).value)
          }
          class="appearance-none w-full bg-secondary-700 hover:bg-secondary-800 border border-secondary-700 rounded shadow
             leading-tight focus:outline-none focus:shadow-outline transition-colors"
        >
          {props.options.map((value, index) => {
            return <option>{value}</option>;
          })}
        </select>
      </div>
    </div>
  );
}
