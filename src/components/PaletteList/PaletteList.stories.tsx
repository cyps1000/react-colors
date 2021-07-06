/**
 * Storybook
 * @see https://storybook.js.org/docs/react/get-started/introduction
 */
import { Story, Meta } from "@storybook/react";

/**
 * Component Imports
 */
import { PaletteList, PaletteListProps } from "./PaletteList";

export default {
  title: "Components/PaletteList",
  component: PaletteList,
} as Meta;

/**
 * Defines the Template
 * @param args PaletteListProps
 * @returns
 */
const Template: Story<PaletteListProps> = (args) => (
  <PaletteList {...args} />
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
