/**
 *  Material UI Imports
 * @see https://material-ui.com/styles/basics/
 */
import { makeStyles, Theme } from "@material-ui/core/styles";

/**
 * Styles the component
 */
const useStyles = makeStyles((theme: Theme) => ({
  Page: {
    height: "100vh",
    position: "fixed",
    width: "100%",
    top: 0,
    transition: "opacity 0.5s ease-in-out",
    "& .page-enter": {
      opacity: 0
    },
    "& .page-enter-active": {
      opacity: 1
    },
    "& .page-exit-active": {
      opacity: 0
    }
  }
}));

export { useStyles };
