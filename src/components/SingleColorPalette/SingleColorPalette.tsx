import { useState, useEffect } from "react";

/**
 * Imports Components
 */
import { Navbar } from "../Navbar";
import { ColorBox } from "../ColorBox";

/**
 * Imports the component styles
 */
import { useStyles } from "./SingleColorPalette.styles";

/**
 * Imports Seed Color inteface
 */
import { NewPalette } from "../../utils";

/**
 * Defines the props interface
 */
export interface SingleColorPaletteProps {
  colorId: string;
  palette: NewPalette;
}

/**
 * Displays the component
 */
export const SingleColorPalette: React.FC<SingleColorPaletteProps> = (
  props
) => {
  const { palette, colorId } = props;
  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Returns all shades of a given color
   */
  const gatherShades = (palette: NewPalette, colorToFilterBy: string) => {
    let shades: any[] = [];
    let allColors = palette.colors;

    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter((color) => color.id === colorToFilterBy)
      );
    }
    return shades.slice(1);
  };

  const colorBoxes = gatherShades(palette, colorId).map((color) => (
    <ColorBox
      key={color.name}
      name={color.name}
      colorId={color.hex}
      showLink={false}
      background={color.hex}
    />
  ));

  return (
    <div className={classes.SingleColorPalette}>
      <h1>SingleColorPalette</h1>
      <div className={classes.paletteColors}>{colorBoxes}</div>
    </div>
  );
};
