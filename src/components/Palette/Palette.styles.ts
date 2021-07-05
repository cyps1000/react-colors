/**
 *  Material UI Imports
 * @see https://material-ui.com/styles/basics/
 */
import { makeStyles, Theme } from "@material-ui/core/styles";

/**
 * Styles the component
 */
const useStyles = makeStyles((theme: Theme) => ({
  Palette: {
    height: "100vh"
  },
  PaletteColors: {
    height: "90%"
  }
}));

export { useStyles };
