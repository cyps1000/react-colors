import { useState } from "react";

/**
 * External Imports
 */
import clsx from "clsx";
import { arrayMove } from "react-sortable-hoc";

/**
 * Imports components
 */
import { DraggableColorList } from "../DraggableColorList";
import { PaletteFormNav } from "../PaletteFormNav";
import { ColorPicker } from "../ColorPicker";

/**
 * Imports Material UI components
 */
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

/**
 * Imports the component styles
 */
import { useStyles } from "./NewPaletteForm.styles";

/**
 * Imports Palette interface
 */
import { SeedColor, seedColors, Color } from "../../utils";

/**
 * Defines the props interface
 */
export interface NewPaletteFormProps {
  savePalette: (P: any) => void;
  palettes: SeedColor[];
  maxColors: number;
}

/**
 * Defines the new color interface
 */
export interface NewColor {
  name: string;
  color: string;
}

/**
 * Displays the component
 */
export const NewPaletteForm: React.FC<NewPaletteFormProps> = (props) => {
  const { savePalette, palettes, maxColors } = props;
  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Inits the Drawer state
   */
  const [open, setOpen] = useState(true);

  /**
   * Inits the colors state
   */
  const [colors, setColors] = useState<NewColor[]>(seedColors[0].colors);

  /**
   * Handles opening the drawer
   */
  const handleDrawerOpen = () => setOpen(true);

  /**
   * Handles closing the drawer
   */
  const handleDrawerClose = () => setOpen(false);

  /**
   * Handles adding a new color
   */
  const addNewColor = (newColor: NewColor) => {
    setColors([...colors, newColor]);
  };

  /**
   * Handles removing a color
   */
  const removeColor = (colorName: string) => {
    setColors(colors.filter((color) => color.name !== colorName));
  };

  /**
   * Handles sorting the draggable boxes
   */
  const onSortEnd = ({ oldIndex, newIndex }: any) => {
    setColors(arrayMove(colors, oldIndex, newIndex));
  };

  /**
   * Handles clearing the colors
   */
  const clearColors = () => {
    setColors([]);
  };

  /**
   * Handles adding a random color
   */
  const gibRandomColor = () => {
    const allColors = palettes.map((p) => p.colors).flat();
    let random: number;
    let isDuplicateColor = true;
    let randomColor: Color = { name: "", color: "" };

    while (isDuplicateColor) {
      random = Math.floor(Math.random() * allColors.length);
      randomColor = allColors[random];
      isDuplicateColor = colors.some(
        // eslint-disable-next-line
        (color) => color.name === randomColor.name
      );
    }

    setColors([...colors, randomColor]);
  };

  return (
    <div className={classes.NewPaletteForm}>
      <PaletteFormNav
        palettes={palettes}
        open={open}
        colors={colors}
        handleDrawerOpen={handleDrawerOpen}
        savePalette={savePalette}
      />
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
        <div className={classes.container}>
          <Typography variant="h4" gutterBottom>
            Design Your Palette
          </Typography>
          <div className={classes.buttons}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={clearColors}
            >
              Clear Palette
            </Button>
            <Button
              disabled={colors.length >= maxColors}
              variant="contained"
              color="primary"
              onClick={gibRandomColor}
              className={classes.button}
            >
              Random Color
            </Button>
          </div>
          <ColorPicker
            colors={colors}
            maxColors={maxColors}
            addColor={addNewColor}
          />
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        <DraggableColorList
          colors={colors}
          removeColor={removeColor}
          onSortEnd={onSortEnd}
          axis="xy"
          distance={20}
        />
      </main>
    </div>
  );
};
