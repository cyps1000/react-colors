import { useState } from "react";

/**
 * Imports components
 */
import { Navbar } from "../Navbar";
import { ColorBox } from "../ColorBox";

/**
 * Imports the component styles
 */
import { useStyles } from "./Palette.styles";

/**
 * Imports Seed Color inteface
 */
import { NewPalette } from "../../utils";

/**
 * Defines the props interface
 */
export interface PaletteProps {
  palette: NewPalette;
}

/**
 * Displays the component
 */
export const Palette: React.FC<PaletteProps> = (props) => {
  const { palette } = props;
  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Inits the Slider state
   */
  const [level, setLevel] = useState(500);

  /**
   * Init the selector format state
   */
  const [format, setFormat] = useState("hex");

  /**
   * Handles changing the slider's level
   */
  const changeLevel = (newLevel: number) => {
    setLevel(newLevel);
  };

  /**
   * Handles changing the Color format
   */
  const changeColorFormat = (val: string) => {
    setFormat(val);
  };

  /**
   * Handles generating color boxes
   */
  const colorBoxes = palette.colors[level].map((color) => (
    <ColorBox
      colorId={color.id}
      paletteId={palette.id}
      key={color.id}
      background={color[format]}
      name={color.name}
      showLink
    />
  ));

  return (
    <div className={classes.Palette}>
      <Navbar
        level={level}
        changeLevel={changeLevel}
        handleChange={changeColorFormat}
      />
      <div className={classes.PaletteColors}>{colorBoxes}</div>
      <footer className={classes.paletteFooter}>
        {palette.paletteName}
        <span className={classes.emoji}>{palette.emoji}</span>
      </footer>
    </div>
  );
};
