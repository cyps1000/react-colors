import { useState, useEffect } from "react";

/**
 * External Imports
 */
import { ChromePicker, ColorResult } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

/**
 * Imports Material UI components
 */
import Button from "@material-ui/core/Button";

/**
 * Imports New Color interface
 */
import { NewColor } from "../NewPaletteForm";

/**
 * Imports the component styles
 */
import { useStyles } from "./ColorPicker.styles";

/**
 * Defines the props interface
 */
export interface ColorPickerProps {
  colors: NewColor[];
  maxColors: number;
  addColor: any;
}

/**
 * Displays the component
 */
export const ColorPicker: React.FC<ColorPickerProps> = (props) => {
  const { colors, maxColors, addColor } = props;

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Inits the current color state shown in the picker
   */
  const [currentColor, setCurrentColor] = useState("blue");

  /**
   * Inits the Form state
   */
  const [newColorName, setNewColorName] = useState("");

  /**
   * Handles updating the current color
   */
  const updateCurrentColor = (newColor: ColorResult) => {
    setCurrentColor(newColor.hex);
  };

  /**
   * Handles the on change event on color form
   */
  const handleColorChange = (e: any) => {
    setNewColorName(e.target.value);
  };

  /**
   * Handles submitting the new color
   */
  const handleSubmit = () => {
    const newColor = {
      color: currentColor,
      name: newColorName
    };

    addColor(newColor);
    setNewColorName("");
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
    <div className={classes.ColorPicker}>
      <ChromePicker
        color={currentColor}
        onChangeComplete={updateCurrentColor}
        className={classes.picker}
      />
      <ValidatorForm onSubmit={handleSubmit}>
        <TextValidator
          name="newColorName"
          placeholder="Color Name"
          variant="filled"
          margin="normal"
          className={classes.colorNameInput}
          value={newColorName}
          onChange={handleColorChange}
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
          disabled={colors.length >= maxColors}
          className={classes.addColor}
          style={{
            backgroundColor: colors.length >= maxColors ? "grey" : currentColor
          }}
        >
          {colors.length >= maxColors ? "Palette Full" : "Add Color"}
        </Button>
      </ValidatorForm>
    </div>
  );
};
