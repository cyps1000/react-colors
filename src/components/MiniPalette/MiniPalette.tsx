/**
 * Imports Material UI components
 */
import DeleteIcon from "@material-ui/icons/Delete";

/**
 * Imports the component styles
 */
import { useStyles } from "./MiniPalette.styles";

/**
 * Imports Seed Color inteface
 */
import { SeedColor } from "../../utils";

/**
 * Defines the props interface
 */
export interface MiniPaletteProps {
  palette: SeedColor;
  goToPalette: (id: string) => void;
  removePalette: (id: string) => void;
}

/**
 * Displays the component
 */
export const MiniPalette: React.FC<MiniPaletteProps> = (props) => {
  const { palette, goToPalette, removePalette } = props;

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Handles creating mini color boxes
   */
  const miniColorBoxes = palette.colors.map((color) => (
    <div
      key={color.name}
      className={classes.miniColor}
      style={{ backgroundColor: color.color }}
    />
  ));

  /**
   * Handles deleting a palette
   */
  const deletePalette = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.stopPropagation();
    removePalette(palette.id);
  };

  /**
   * Handles going to a palette
   */
  const handleClick = () => {
    goToPalette(palette.id);
  };

  return (
    <div className={classes.MiniPalette} onClick={handleClick}>
      <DeleteIcon
        className={classes.deleteIcon}
        style={{ transition: "all 0.3s ease-in-out" }}
        onClick={deletePalette}
      />
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {palette.paletteName}{" "}
        <span className={classes.emoji}>{palette.emoji}</span>
      </h5>
    </div>
  );
};
