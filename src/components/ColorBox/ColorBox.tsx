import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
  name?: string;
  colorId: string;
  paletteId?: string;
  showLink: boolean;
}

/**
 * Displays the component
 */
export const ColorBox: React.FC<ColorBoxProps> = (props) => {
  const { background, name, colorId, paletteId, showLink } = props;

  /**
   * Gets the component styles
   */
  const classes = useStyles({ showingFullPalette: showLink, background });

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
    <CopyToClipboard text={background!} onCopy={changeCopyState}>
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
          <p className={classes.copyText}>{background}</p>
        </div>
        <div>
          <div className={classes.boxContent}>
            <span className={classes.colorName}>{name}</span>
          </div>
          <button className={classes.copyButton}>Copy</button>
        </div>
        {showLink && (
          <Link
            to={`/palette/${paletteId}/${colorId}`}
            onClick={(e) => e.stopPropagation()}
          >
            <span className={classes.seeMore}>More</span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
};
