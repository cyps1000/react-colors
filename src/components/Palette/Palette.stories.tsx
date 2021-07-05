/**
 * Storybook
 * @see https://storybook.js.org/docs/react/get-started/introduction
 */
import { Story, Meta } from "@storybook/react";

/**
 * Component Imports
 */
import { Palette, PaletteProps } from "./Palette";

export default {
  title: "Components/Palette",
  component: Palette,
} as Meta;

/**
 * Defines the Template
 * @param args PaletteProps
 * @returns
 */
const Template: Story<PaletteProps> = (args) => (
  <Palette {...args} />
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
