/**
 * External Imports
 */
import { SortableContainer } from "react-sortable-hoc";

/**
 * Imports components
 */
import { DraggableColorBox } from "../DraggableColorBox";

/**
 * Imports New Color interface
 */
import { NewColor } from "../NewPaletteForm";

/**
 * Defines the props interface
 */
export interface DraggableColorListProps {
  colors: NewColor[];
  removeColor: any;
}

/**
 * Displays the component
 */
export const DraggableColorList = SortableContainer(
  (props: DraggableColorListProps) => {
    const { colors, removeColor } = props;

    return (
      <div style={{ height: "100%" }}>
        {colors.map((color, i) => (
          <DraggableColorBox
            index={i}
            key={color.name}
            color={color.color}
            name={color.name}
            handleClick={() => removeColor(color.name)}
          />
        ))}
      </div>
    );
  }
);
