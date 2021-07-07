import { useState, useEffect } from "react";
/**
 * External Imports
 */
import clsx from "clsx";
import { ChromePicker, ColorResult } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

/**
 * Imports components
 */
import { DraggableColorBox } from "../DraggableColorBox";

/**
 * Imports Material UI components
 */
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

/**
 * Imports the component styles
 */
import { useStyles } from "./NewPaletteForm.styles";

/**
 * Defines the props interface
 */
export interface NewPaletteFormProps {}

/**
 * Defines the new color interface
 */
interface NewColor {
  name: string;
  color: string;
}

/**
 * Displays the component
 */
export const NewPaletteForm: React.FC<NewPaletteFormProps> = (props) => {
  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Inits the Drawer state
   */
  const [open, setOpen] = useState(true);

  /**
   * Inits the current color state shown in the picker
   */
  const [currentColor, setCurrentColor] = useState("teal");

  /**
   * Inits the colors state
   */
  const [colors, setColors] = useState<NewColor[]>([]);

  /**
   * Inits the Form state
   */
  const [newName, setNewName] = useState("");

  /**
   * Handles opening the drawer
   */
  const handleDrawerOpen = () => setOpen(true);

  /**
   * Handles closing the drawer
   */
  const handleDrawerClose = () => setOpen(false);

  /**
   * Handles updating the current color
   */
  const updateCurrentColor = (newColor: ColorResult) => {
    setCurrentColor(newColor.hex);
  };

  /**
   * Handles adding a new color
   */
  const addNewColor = () => {
    const newColor = {
      color: currentColor,
      name: newName
    };
    setColors([...colors, newColor]);
    setNewName("");
  };

  /**
   * Handles the on change event on form
   */
  const handleChange = (e: any) => {
    setNewName(e.target.value);
  };

  useEffect(() => {
    /**
     * Handles cheking if the color name in the form is unique
     */
    ValidatorForm.addValidationRule("isColorNameUnique", (value) => {
      return colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      );
    });

    /**
     * Handles checking if the color itself in the form is unique
     */
    ValidatorForm.addValidationRule("isColorUnique", (value) => {
      return colors.every(({ color }) => color !== currentColor);
    });
  });

  return (
    <div className={classes.NewPaletteForm}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <Typography variant="h4">Design Your Palette</Typography>
        <div>
          <Button variant="contained" color="secondary">
            Clear Palette
          </Button>
          <Button variant="contained" color="primary">
            Random Color
          </Button>
        </div>
        <ChromePicker
          color={currentColor}
          onChangeComplete={updateCurrentColor}
        />
        <ValidatorForm onSubmit={addNewColor}>
          <TextValidator
            name={newName}
            value={newName}
            onChange={handleChange}
            validators={["required", "isColorNameUnique", "isColorUnique"]}
            errorMessages={[
              "Field is required",
              "Color Name must be unique",
              "Color already used"
            ]}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{ backgroundColor: currentColor }}
          >
            ADD COLOR
          </Button>
        </ValidatorForm>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        {colors.map((color) => (
          <DraggableColorBox color={color.color} name={color.name} />
        ))}
      </main>
    </div>
  );
};
