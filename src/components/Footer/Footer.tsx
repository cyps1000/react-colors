/**
 * Imports the component styles
 */
import { useStyles } from "./Footer.styles";

/**
 * Defines the props interface
 */
export interface FooterProps {
  palette: string;
  emoji: string;
}

/**
 * Displays the component
 */
export const Footer: React.FC<FooterProps> = (props) => {
  const { palette, emoji } = props;
  /**
   * Gets the component styles
   */
  const classes = useStyles();

  return (
    <footer className={classes.Footer}>
      {palette}
      <span className={classes.emoji}>{emoji}</span>
    </footer>
  );
};
