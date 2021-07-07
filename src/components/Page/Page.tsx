/**
 * Imports the component styles
 */
import { useStyles } from "./Page.styles";

/**
 * Displays the component
 */
export const Page: React.FC = (props) => {
  const { children } = props;

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  return <div className={classes.Page}>{children}</div>;
};
