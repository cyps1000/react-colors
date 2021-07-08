import chroma from "chroma-js";

/**
 *  Material UI Imports
 * @see https://material-ui.com/styles/basics/
 */
import { makeStyles, Theme } from "@material-ui/core/styles";

/**
 * Styles the component
 */
const useStyles = makeStyles((theme: Theme) => ({
  DraggableColorBox: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-6.5px",
    "&:hover svg": {
      color: "white",
      transform: "scale(1.5)"
    },
    [theme.breakpoints.down("lg")]: {
      width: "25%",
      height: "20%"
    },
    [theme.breakpoints.down("md")]: {
      width: "50%",
      height: "10%"
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "5%"
    }
  },
  boxContent: (props: { color: string }) => {
    const { color } = props;

    return {
      position: "absolute",
      width: "98%",
      left: "0px",
      bottom: "0px",
      padding: "10px",
      color:
        chroma(color).luminance() <= 0.08
          ? "rgba(255,255,255,0.8)"
          : "rgba(0,0,0,0.6)",
      letterSpacing: "1px",
      textTransform: "uppercase",
      fontSize: "12px",
      display: "flex",
      justifyContent: "space-between"
    };
  },
  deleteIcon: {
    transition: "all 0.3s ease-in-out"
    // "&:hover": {
    //   color: "white"
    // }
  }
}));

export { useStyles };
