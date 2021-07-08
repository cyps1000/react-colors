/**
 *  Material UI Imports
 * @see https://material-ui.com/styles/basics/
 */
import { makeStyles, Theme } from "@material-ui/core/styles";

/**
 * Styles the component
 */
const useStyles = makeStyles((theme: Theme) => ({
  PaletteMetaForm: {},
  button: {
    margin: "0 0.5rem",
    [theme.breakpoints.down("xs")]: {
      margin: "0 0.2rem",
      padding: "0.3rem"
    }
  }
}));

export { useStyles };
