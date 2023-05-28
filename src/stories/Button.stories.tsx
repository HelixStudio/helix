import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "~/components/ui/Button";
import "~/styles/globals.css";

const meta: Meta<typeof Button> = {
  title: "Helix UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["primary", "secondary", "accent", "muted", "outline", "link"],
      control: { type: "select" },
    },
    onClick: { action: "button-clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
  },
  render: (args) => <Button {...args}>Text</Button>,
};
