/**
 * Storybook
 * @see https://storybook.js.org/docs/react/get-started/introduction
 */
import { Story, Meta } from "@storybook/react";

/**
 * Component Imports
 */
import { DraggableColorBox, DraggableColorBoxProps } from "./DraggableColorBox";

export default {
  title: "Components/DraggableColorBox",
  component: DraggableColorBox,
} as Meta;

/**
 * Defines the Template
 * @param args DraggableColorBoxProps
 * @returns
 */
const Template: Story<DraggableColorBoxProps> = (args) => (
  <DraggableColorBox {...args} />
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
