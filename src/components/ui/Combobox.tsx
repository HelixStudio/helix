"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "~/utils/cn";
import { Button } from "~/components/ui/Button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "~/components/ui/Command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/Popover";

export interface ComboboxProps {
  placeholder: string;
  options: string[];
  onSelect: (newValue: string) => void;
}

const Combobox = (props: ComboboxProps) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value != "" ? value : props.placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search..." />
          <CommandEmpty>No option found.</CommandEmpty>
          <CommandGroup>
            {props.options.map((option) => (
              <CommandItem
                key={option}
                onSelect={(currentValue) => {
                  const newValue = currentValue === value ? "" : option;
                  setValue(newValue);
                  setOpen(false);
                  props.onSelect(option);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === option ? "opacity-100" : "opacity-0"
                  )}
                />
                {option}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default Combobox;
