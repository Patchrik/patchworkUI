import type { Meta, StoryObj } from "@storybook/react";
import Button from "../components/Button/Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    label: { control: "color" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Patchwork: Story = {
  args: {
    label: "Button patchwork",
    variant: "patchwork",
  },
};

export const Notion: Story = {
  args: {
    label: "Button notion",
    variant: "notion",
  },
};

export const MUI: Story = {
  args: {
    label: "Button MUI",
    variant: "MUI",
  },
};

export const Ant: Story = {
  args: {
    label: "Button Ant",
    variant: "Ant",
  },
};

export const Bootstrap: Story = {
  args: {
    label: "Button bootstrap",
    variant: "bootstrap",
  },
};
