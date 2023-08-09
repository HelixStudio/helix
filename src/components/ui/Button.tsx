import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        primary: "bg-primary-400 text-secondary-800 hover:bg-primary-500/90",
        secondary:
          "bg-gray-4 border-gray-6 dark:bg-graydark-4 dark:border-graydark-6 dark:hover:bg-graydark-5 hover:bg-muted flex w-full items-center justify-center gap-4 rounded-md border font-semibold transition-colors lg:w-auto",
        outline: "border border-input hover:bg-secondary-800",
        muted: "hover:bg-muted hover:text-muted-foreground gap-2",
        accent: "bg-accent-500 text-gray-12 hover:bg-accent-600 flex w-full items-center justify-center gap-4 rounded-md font-semibold transition-colors lg:w-auto",
        link: "underline-offset-4 hover:underline text-primary-500",

      },
      size: {
        default: "h-10 px-6 py-3",
        Homedefault: "px-6 py-3",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
