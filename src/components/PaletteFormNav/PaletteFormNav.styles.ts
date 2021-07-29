/**
 *  Material UI Imports
 * @see https://material-ui.com/styles/basics/
 */
import { makeStyles, Theme } from "@material-ui/core/styles";

/**
 * Imports Drawer Width
 */
import { DRAWER_WIDTH } from "../../utils";

const drawerWidth = DRAWER_WIDTH;

/**
 * Styles the component
 */
const useStyles = makeStyles((theme: Theme) => ({
  PaletteFormNav: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "64px",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: "none",
  },
  navBtns: {
    marginRight: "1rem",
    "& a": {
      textDecoration: "none",
    },
    [theme.breakpoints.down("xs")]: {
      marginRight: "0.5rem",
    },
  },
  button: {
    margin: "0 0.5rem",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      margin: "0.1rem 1rem",
      padding: "0.1rem",
    },
  },
}));

export { useStyles };
