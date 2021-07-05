import { useState, useEffect } from "react";

/**
 * External imports
 */
import clsx from "clsx";
import { CopyToClipboard } from "react-copy-to-clipboard";

/**
 * Imports the component styles
 */
import { useStyles } from "./ColorBox.styles";

/**
 * Defines the props interface
 */
export interface ColorBoxProps {
  background: string;
  name: string;
}

/**
 * Displays the component
 */
export const ColorBox: React.FC<ColorBoxProps> = (props) => {
  const { background, name } = props;

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Inits the Copy state
   */
  const [copied, setCopied] = useState(false);

  /**
   * Handles changing the Copy state
   */
  const changeCopyState = () => setCopied(true);

  useEffect(() => {
    setTimeout(() => setCopied(false), 1500);
  }, [copied]);

  return (
    <CopyToClipboard text={background} onCopy={changeCopyState}>
      <div style={{ background }} className={classes.ColorBox}>
        <div
          style={{ background }}
          className={clsx(classes.copyOverlay, {
            [classes.showOverlay]: copied
          })}
        />
        <div
          className={clsx(classes.copyMessage, {
            [classes.showMessage]: copied
          })}
        >
          <h1>copied!</h1>
          <p>{background}</p>
        </div>
        <div className={classes.copyContainer}>
          <div className={classes.boxContent}>
            <span>{name}</span>
          </div>
          <button className={classes.copyButton}>Copy</button>
        </div>
        <span className={classes.seeMore}>More</span>
      </div>
    </CopyToClipboard>
  );
};
