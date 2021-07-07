import { useState } from "react";
import { Link } from "react-router-dom";

/**
 * Imports Components
 */
import { Navbar } from "../Navbar";
import { ColorBox } from "../ColorBox";
import { Footer } from "../Footer";

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
  id: string;
  palette: NewPalette;
}

/**
 * Displays the component
 */
export const SingleColorPalette: React.FC<SingleColorPaletteProps> = (
  props
) => {
  const { palette, colorId, id } = props;
  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Init the selector format state
   */
  const [format, setFormat] = useState("hex");

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

  /**
   * Handles changing the Color format
   */
  const changeColorFormat = (val: string) => {
    setFormat(val);
  };

  const colorBoxes = gatherShades(palette, colorId).map((color) => (
    <ColorBox
      key={color.name}
      name={color.name}
      colorId={color.hex}
      showLink={false}
      background={color[format]}
    />
  ));

  return (
    <div className={classes.SingleColorPalette}>
      <Navbar handleChange={changeColorFormat} showingAllColors={false} />
      <div className={classes.paletteColors}>
        {colorBoxes}
        <div className={classes.goBack}>
          <Link to={`/palette/${id}`}>GO BACK</Link>
        </div>
      </div>
      <Footer palette={palette.paletteName} emoji={palette.emoji} />
    </div>
  );
};
