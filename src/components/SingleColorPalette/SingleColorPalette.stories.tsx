/**
 * Storybook
 * @see https://storybook.js.org/docs/react/get-started/introduction
 */
import { Story, Meta } from "@storybook/react";

/**
 * Component Imports
 */
import { SingleColorPalette, SingleColorPaletteProps } from "./SingleColorPalette";

export default {
  title: "Components/SingleColorPalette",
  component: SingleColorPalette,
} as Meta;

/**
 * Defines the Template
 * @param args SingleColorPaletteProps
 * @returns
 */
const Template: Story<SingleColorPaletteProps> = (args) => (
  <SingleColorPalette {...args} />
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
