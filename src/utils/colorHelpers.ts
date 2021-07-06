import chroma from "chroma-js";

/**
 * Imports Color Palette interface
 */
import { SeedColor } from "./index";

/**
 * Defines the New Palette interface
 */
export interface NewPalette {
  paletteName: string;
  id: string;
  emoji: string;
  colors: NewPaletteColor;
}

/**
 * Defines the New Palette Color interface
 */
export interface NewPaletteColor {
  [key: number]: {
    name: string;
    id: string;
    [hex: string]: string;
    rgb: string;
    rgba: string;
  }[];
}

/**
 * Colors' level of intensity
 */

export const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

/**
 * Handles generating a new color palette
 */
export const generatePalette = (starterPalette: SeedColor) => {
  let newPalette: NewPalette = {
    paletteName: starterPalette.paletteName,
    id: starterPalette.id,
    emoji: starterPalette.emoji,
    colors: {}
  };

  for (let level of levels) {
    newPalette.colors[level] = [];
  }

  for (let color of starterPalette.colors) {
    let scale = getScale(color.color, 10).reverse();

    for (let i in scale) {
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase().replace(/ /g, "-"),
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i])
          .css()
          .replace("rgb", "rgba")
          .replace(")", ",1.0)")
      });
    }
  }

  return newPalette;
};

/**
 * Handles creating a range of colors
 */
const getRange = (hexColor: string) => {
  const end = "#fff";

  return [chroma(hexColor).darken(1.4).hex(), hexColor, end];
};

/**
 * Handles generating 10 colors based on an input color
 */
const getScale = (hexColor: string, numOfColors: number) => {
  return chroma.scale(getRange(hexColor)).mode("lab").colors(numOfColors);
};
