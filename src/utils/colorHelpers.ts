import chroma from "chroma-js";

/**
 * Colors' level of intensity
 */
// eslint-disable-next-line
const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

export const generatePalette = (starterPalette: any) => {
  /** TO DO */
};

const getRange = (hexColor: string) => {
  const end = "#fff";

  return [chroma(hexColor).darken(1.4).hex(), hexColor, end];
};
// eslint-disable-next-line
const getScale = (hexColor: string, numOfColors: number) => {
  return chroma.scale(getRange(hexColor)).mode("lab").colors(numOfColors);
};
