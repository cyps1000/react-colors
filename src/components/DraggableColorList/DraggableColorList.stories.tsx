/**
 * Storybook
 * @see https://storybook.js.org/docs/react/get-started/introduction
 */
import { Story, Meta } from "@storybook/react";

/**
 * Component Imports
 */
import { DraggableColorList, DraggableColorListProps } from "./DraggableColorList";

export default {
  title: "Components/DraggableColorList",
  component: DraggableColorList,
} as Meta;

/**
 * Defines the Template
 * @param args DraggableColorListProps
 * @returns
 */
const Template: Story<DraggableColorListProps> = (args) => (
  <DraggableColorList {...args} />
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
