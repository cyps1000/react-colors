/**
 * Storybook
 * @see https://storybook.js.org/docs/react/get-started/introduction
 */
import { Story, Meta } from "@storybook/react";

/**
 * Component Imports
 */
import { PaletteFormNav, PaletteFormNavProps } from "./PaletteFormNav";

export default {
  title: "Components/PaletteFormNav",
  component: PaletteFormNav,
} as Meta;

/**
 * Defines the Template
 * @param args PaletteFormNavProps
 * @returns
 */
const Template: Story<PaletteFormNavProps> = (args) => (
  <PaletteFormNav {...args} />
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
