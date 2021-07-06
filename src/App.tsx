import { Route, Switch } from "react-router-dom";

/**
 * Imports components
 */
import { Palette } from "./components/Palette";
import { PaletteList } from "./components/PaletteList";
import { SingleColorPalette } from "./components/SingleColorPalette";

/**
 * Imports Seed Colors
 */
import { seedColors, generatePalette } from "./utils";

/**
 * Displays the component
 */
export const App: React.FC = () => {
  /**
   * Handles finding a palette by ID
   */
  const findPalette = (id: string) => {
    return seedColors.find((palette) => {
      return palette.id === id;
    });
  };

  return (
    <Switch>
      <Route exact path="/">
        <PaletteList palettes={seedColors} />
      </Route>
      <Route
        exact
        path="/palette/:paletteId/:colorId"
        render={(props) => (
          <SingleColorPalette
            colorId={props.match.params.colorId}
            palette={generatePalette(
              findPalette(props.match.params.paletteId)!
            )}
          />
        )}
      />
      <Route
        exact
        path="/palette/:id"
        render={(props) => (
          <Palette
            palette={generatePalette(findPalette(props.match.params.id)!)}
          />
        )}
      />
    </Switch>
    // <div>
    //   <Palette palette={generatePalette(seedColors[4])} />
    // </div>
  );
};
