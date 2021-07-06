import { Link, useHistory } from "react-router-dom";

/**
 * Imports components
 */
import { MiniPalette } from "../MiniPalette";

/**
 * Imports the component styles
 */
import { useStyles } from "./PaletteList.styles";

/**
 * Imports Seed Color inteface
 */
import { SeedColor } from "../../utils";

/**
 * Defines the props interface
 */
export interface PaletteListProps {
  palettes: SeedColor[];
}

/**
 * Displays the component
 */
export const PaletteList: React.FC<PaletteListProps> = (props) => {
  const { palettes } = props;

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Init the history hook
   */
  const history = useHistory();

  /**
   * Handles going to a palette
   */
  const goToPalette = (id: string) => {
    history.push(`/palette/${id}`);
  };

  return (
    <div className={classes.PaletteList}>
      <div className={classes.containter}>
        <nav className={classes.nav}>
          <h1>React Colors</h1>
        </nav>
        <div className={classes.palettes}>
          {palettes.map((palette) => (
            <MiniPalette goToPalette={goToPalette} palette={palette} />
          ))}
        </div>
      </div>
    </div>
  );
};
