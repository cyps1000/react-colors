import { useState } from "react";
import { Link } from "react-router-dom";

/**
 * External Imports
 */
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

/**
 * Imports Material UI components
 */
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

/**
 * Imports the component styles
 */
import { useStyles } from "./Navbar.styles";

/**
 * Defines the props interface
 */
export interface NavbarProps {
  level?: number;
  showingAllColors?: boolean;
  changeLevel?: (l: number) => void;
  handleChange: (val: string) => void;
}

/**
 * Displays the component
 */
export const Navbar: React.FC<NavbarProps> = (props) => {
  const { level, showingAllColors, changeLevel, handleChange } = props;

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Init the selector format state
   */
  const [format, setFormat] = useState("hex");

  /**
   * Init the Snackbar state
   */
  const [open, setOpen] = useState(false);

  /**
   * Handles closing the Snackbar
   */
  const closeSnackbar = () => setOpen(false);

  /**
   * Handles changing the color format
   */
  const handleFormatChange = (e: any) => {
    setFormat(e.target.value);
    setOpen(true);
    handleChange(e.target.value);
  };

  return (
    <header className={classes.Navbar}>
      <div className={classes.logo}>
        <Link to="/">reactcolorpicker</Link>
      </div>
      {showingAllColors && (
        <div>
          <span>Level: {level}</span>
          <div className={classes.slider}>
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
            />
          </div>
        </div>
      )}
      <div className={classes.selectContainer}>
        <Select value={format} onChange={handleFormatChange}>
          <MenuItem value="hex">HEX - #ffffff</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
          <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
        </Select>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={open}
        onClose={closeSnackbar}
        autoHideDuration={3000}
        message={<span>Format changed to {format.toUpperCase()}!</span>}
        action={[
          <IconButton
            onClick={closeSnackbar}
            color="inherit"
            key="close"
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        ]}
      />
    </header>
  );
};
