import { useState, useEffect, Fragment } from "react";
import { useHistory } from "react-router-dom";

/**
 * External Imports
 */
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Picker, BaseEmoji } from "emoji-mart";

/**
 * Imports Material UI Components
 */
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

/**
 * Imports the component styles
 */
import { useStyles } from "./PaletteMetaForm.styles";

/**
 * Imports emoji mart styling
 */
import "emoji-mart/css/emoji-mart.css";

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
export interface PaletteMetaFormProps {
  palettes: SeedColor[];
  colors: NewColor[];
  savePalette: (P: any) => void;
  closeForm: () => void;
}

/**
 * Displays the component
 */
export const PaletteMetaForm: React.FC<PaletteMetaFormProps> = (props) => {
  const { palettes, colors, savePalette, closeForm } = props;
  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Inits the useHistory hook
   */
  const history = useHistory();

  /**
   * Init the new palette name state
   */
  const [newPaletteName, setNewPaletteName] = useState("");

  /**
   * Inits the Dialogs state
   */
  const [stage, setStage] = useState("form");

  /**
   * Handles the on change event on new palette form
   */
  const handlePaletteChange = (e: any) => {
    setNewPaletteName(e.target.value);
  };

  /**
   * Handles saving a palette
   */
  const handleSavePalette = (emoji: BaseEmoji) => {
    const newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/ /g, "-"),
      colors,
      emoji: emoji.native
    };

    savePalette(newPalette);
    history.push("/");
  };

  const showEmojiPicker = () => {
    setStage("emoji");
  };

  useEffect(() => {
    /**
     * Handles cheking if the palette name in the form is unique
     */
    ValidatorForm.addValidationRule("isPaletteNameUnique", (value) => {
      return palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      );
    });
  });

  return (
    <Fragment>
      <Dialog open={stage === "emoji"} onClose={closeForm}>
        <DialogTitle id="form-dialog-title-emoji">
          Choose a Palette Emoji
        </DialogTitle>
        <Picker title="Pick a Palette Emoji" onSelect={handleSavePalette} />
      </Dialog>
      <Dialog
        open={stage === "form"}
        onClose={closeForm}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
        <ValidatorForm onSubmit={showEmojiPicker}>
          <DialogContent>
            <DialogContentText>
              Please enter a name for your new palette. Make sure it's unique.
            </DialogContentText>
            <TextValidator
              name="newPaletteName"
              value={newPaletteName}
              label="Palette Name"
              fullWidth
              margin="normal"
              onChange={handlePaletteChange}
              validators={["required", "isPaletteNameUnique"]}
              errorMessages={["Field is required", "Name already used"]}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={closeForm} color="primary">
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Save Palette
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    </Fragment>
  );
};
