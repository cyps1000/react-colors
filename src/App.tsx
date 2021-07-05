/**
 * Imports components
 */
import { Palette } from "./components/Palette";

/**
 * Imports Seed Colors
 */
import { seedColors } from "./utils";

/**
 * Displays the component
 */
export const App: React.FC = () => {
  return (
    <div>
      <Palette palette={seedColors[2]} />
    </div>
  );
};
