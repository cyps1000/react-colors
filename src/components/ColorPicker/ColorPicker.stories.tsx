/**
 * Storybook
 * @see https://storybook.js.org/docs/react/get-started/introduction
 */
import { Story, Meta } from "@storybook/react";

/**
 * Component Imports
 */
import { ColorPicker, ColorPickerProps } from "./ColorPicker";

export default {
  title: "Components/ColorPicker",
  component: ColorPicker,
} as Meta;

/**
 * Defines the Template
 * @param args ColorPickerProps
 * @returns
 */
const Template: Story<ColorPickerProps> = (args) => (
  <ColorPicker {...args} />
);

/**
 * Default case
 */
export const Default = Template.bind({});

/**
 * Put your component props in here
 *
 * Example:
 * Default.args = {
 *  text: "Hello World"
 * }
 *
 * Assuming that the component expects a prop text that is a string.
 */
Default.args = {};
