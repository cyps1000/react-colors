/**
 * Storybook
 * @see https://storybook.js.org/docs/react/get-started/introduction
 */
import { Story, Meta } from "@storybook/react";

/**
 * Component Imports
 */
import { NewPaletteForm, NewPaletteFormProps } from "./NewPaletteForm";

export default {
  title: "Components/NewPaletteForm",
  component: NewPaletteForm,
} as Meta;

/**
 * Defines the Template
 * @param args NewPaletteFormProps
 * @returns
 */
const Template: Story<NewPaletteFormProps> = (args) => (
  <NewPaletteForm {...args} />
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
