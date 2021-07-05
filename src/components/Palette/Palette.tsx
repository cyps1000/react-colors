/**
 * Imports components
 */
import { ColorBox } from "../ColorBox";

/**
 * Imports the component styles
 */
import { useStyles } from "./Palette.styles";

/**
 * Imports Seed Color inteface
 */
import { SeedColor } from "../../utils";

/**
 * Defines the props interface
 */
export interface PaletteProps {
  palette: SeedColor;
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
   * Handles generating color boxes
   */
  const colorBoxes = palette.colors.map((color) => (
    <ColorBox background={color.color} name={color.name} />
  ));

  return (
    <div className={classes.Palette}>
      {/* navbar here */}
      <div className={classes.PaletteColors}>{colorBoxes}</div>
      {/* Footer */}
    </div>
  );
};
