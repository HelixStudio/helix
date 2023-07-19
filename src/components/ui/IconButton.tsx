import { type ReactNode } from "react";
import { Button } from "./Button";

const IconButton = (props: {
  icon: ReactNode;
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary" | "outline" | "muted" | "accent";
}) => {
  return (
    <Button
      variant={props.variant ?? "secondary"}
      size={"default"}
      onClick={props.onClick}
      aria-label={props.label}
    >
      {props.icon}
    </Button>
  );
};

export default IconButton;
