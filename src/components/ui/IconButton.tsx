import { type ReactNode } from "react";
import { Button } from "./Button";

const IconButton = (props: { icon: ReactNode; onClick: () => void }) => {
  return (
    <Button variant={"secondary"} size={"sm"} onClick={props.onClick}>
      {props.icon}
    </Button>
  );
};

export default IconButton;
