import { useState } from "react";
import { Link } from "react-router-dom";

/**
 * External Imports
 */
import clsx from "clsx";

/**
 * Imports components
 */
import { PaletteMetaForm } from "../PaletteMetaForm";

/**
 * Imports Material UI components
 */

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";

/**
 * Imports the component styles
 */
import { useStyles } from "./PaletteFormNav.styles";

/**
 * Imports Palette interface
 */
import { SeedColor } from "../../utils";

/**
 * Import New Color interface
 */
import { NewColor } from "../NewPaletteForm";

/**
 * Defines the props interface
 */
export interface PaletteFormNavProps {
  open: boolean;
  palettes: SeedColor[];
  colors: NewColor[];
  handleDrawerOpen: () => void;
  savePalette: (P: any) => void;
}

/**
 * Displays the component
 */
export const PaletteFormNav: React.FC<PaletteFormNavProps> = (props) => {
  const { open, palettes, handleDrawerOpen, savePalette, colors } = props;
  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Inits the submit form dialog state
   */
  const [formShowing, setFormShowing] = useState(false);

  /**
   * Handles opening the Submit Form
   */
  const openForm = () => setFormShowing(true);

  /**
   * Handles closing the Submit Form
   */
  const closeForm = () => setFormShowing(false);

  return (
    <div className={classes.PaletteFormNav}>
      <AppBar
        position="fixed"
        color="default"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar disableGutters={!open}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" noWrap>
            Create A Palette
          </Typography>
        </Toolbar>
        <div className={classes.navBtns}>
          <Link to="/">
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Go back
            </Button>
          </Link>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={openForm}
          >
            Save
          </Button>
        </div>
      </AppBar>
      {formShowing && (
        <PaletteMetaForm
          palettes={palettes}
          colors={colors}
          savePalette={savePalette}
          closeForm={closeForm}
          formShowing={formShowing}
        />
      )}
    </div>
  );
};
