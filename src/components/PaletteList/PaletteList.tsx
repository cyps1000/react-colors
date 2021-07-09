import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

/**
 * External Imports
 */
import { CSSTransition, TransitionGroup } from "react-transition-group";

/**
 * Imports components
 */
import { MiniPalette } from "../MiniPalette";

/**
 * Imports Material UI Components
 */
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";

/**
 * Imports Material UI icons
 */
import CheckOutlinedIcon from "@material-ui/icons/CheckOutlined";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";

/**
 * Imports Material UI colors
 */
import { blue, red } from "@material-ui/core/colors";

/**
 * Imports the component styles
 */
import { useStyles } from "./PaletteList.styles";

/**
 * Imports Seed Color inteface
 */
import { SeedColor } from "../../utils";

/**
 * Defines the props interface
 */
export interface PaletteListProps {
  palettes: SeedColor[];
  removePalette: (id: string) => void;
}

/**
 * Displays the component
 */
export const PaletteList: React.FC<PaletteListProps> = (props) => {
  const { palettes, removePalette } = props;

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Init the history hook
   */
  const history = useHistory();

  /**
   * Inits the dialog state
   */
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  /**
   * Inits the delete id state
   */
  const [deletingId, setDeletingId] = useState("");

  /**
   * Handles opening the dialog
   */
  const openDialog = (id: string) => {
    setOpenDeleteDialog(true);
    setDeletingId(id);
  };

  /**
   * Handles closing the dialog
   */
  const closeDialog = () => {
    setOpenDeleteDialog(false);
    setDeletingId("");
  };

  /**
   * Handles removing a palette
   */
  const handleDelete = () => {
    removePalette(deletingId);
    closeDialog();
  };

  /**
   * Handles going to a palette
   */
  const goToPalette = (id: string) => {
    history.push(`/palette/${id}`);
  };

  return (
    <div className={classes.PaletteList}>
      <div className={classes.containter}>
        <nav className={classes.nav}>
          <h1 className={classes.heading}>React Colors</h1>
          <Link to="/palette/new">Create Palette</Link>
        </nav>
        <TransitionGroup className={classes.palettes}>
          {palettes.map((palette) => (
            <CSSTransition key={palette.id} classNames="fade" timeout={500}>
              <MiniPalette
                key={palette.id}
                goToPalette={goToPalette}
                palette={palette}
                openDialog={openDialog}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
      <Dialog
        open={openDeleteDialog}
        aria-labelledby="delete-dialog-title"
        onClose={closeDialog}
      >
        <DialogTitle id="delete-dialog-title">Delete this Palette?</DialogTitle>
        <List>
          <ListItem button onClick={handleDelete}>
            <ListItemAvatar>
              <Avatar style={{ backgroundColor: blue[100], color: blue[600] }}>
                <CheckOutlinedIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Delete" />
          </ListItem>
          <ListItem button onClick={closeDialog}>
            <ListItemAvatar>
              <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                <CloseOutlinedIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Cancel" />
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
};
