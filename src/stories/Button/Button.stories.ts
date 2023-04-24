import type { Meta, StoryObj } from '@storybook/react';
import Button from "../../components/Button/Button"

const meta = {
  title: 'Example/Button',
  component: Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outlined: Story = {
  args: {
    variant:"outlined",
    children:"Submit"
  },
};
export const Text: Story = {
    args: {
      variant:"text",
      children:"Submit"
    },
  };

  export const Large: Story = {
    args: {
      size:"large",
      children:"Submit"
    },
  };

  export const Small: Story = {
    args: {
      size:"small",
      children:"Submit"
    },
  };

  export const Secondary: Story = {
    args: {
      color:"secondary",
      children:"Submit"
    },
  };
  export const Default: Story = {
    args: {
      color:"default",
      children:"Submit"
    },
  };