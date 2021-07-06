/**
 *  Material UI Imports
 * @see https://material-ui.com/styles/basics/
 */
import { makeStyles, Theme } from "@material-ui/core/styles";

/**
 * Styles the component
 */
const useStyles = makeStyles((theme: Theme) => ({
  SingleColorPalette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    overflowY: "scroll",
    overflowX: "hidden"
  },
  paletteColors: {
    height: "90%"
  }
}));

export { useStyles };
