/**
 * External Imports
 */
import { SortableElement } from "react-sortable-hoc";

/**
 * Imports Material UI Icon
 */
import DeleteIcon from "@material-ui/icons/Delete";

/**
 * Imports the component styles
 */
import { useStyles } from "./DraggableColorBox.styles";

/**
 * Defines the props interface
 */
export interface DraggableColorBoxProps {
  name: string;
  color: string;
  handleClick: any;
  index?: number;
}

/**
 * Displays the component
 */
export const DraggableColorBox = SortableElement(
  (props: DraggableColorBoxProps) => {
    const { name, color, handleClick } = props;

    /**
     * Gets the component styles
     */
    const classes = useStyles({ color });

    return (
      <div
        style={{ backgroundColor: color }}
        className={classes.DraggableColorBox}
      >
        <div className={classes.boxContent}>
          <span>{name}</span>
          <DeleteIcon className={classes.deleteIcon} onClick={handleClick} />
        </div>
      </div>
    );
  }
);
