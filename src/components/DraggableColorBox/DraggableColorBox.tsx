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
}

/**
 * Displays the component
 */
export const DraggableColorBox: React.FC<DraggableColorBoxProps> = (props) => {
  const { name, color } = props;

  /**
   * Gets the component styles
   */
  const classes = useStyles({ color });

  return (
    <div
      style={{ backgroundColor: color }}
      className={classes.DraggableColorBox}
    >
      <span> {name}</span>
    </div>
  );
};
