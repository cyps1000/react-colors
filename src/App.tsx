import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

/**
 * Imports components
 */
import { Palette } from "./components/Palette";
import { PaletteList } from "./components/PaletteList";
import { SingleColorPalette } from "./components/SingleColorPalette";
import { NewPaletteForm } from "./components/NewPaletteForm";
import { Page } from "./components/Page";

/**
 * Imports Seed Colors
 */
import { seedColors, generatePalette, SeedColor } from "./utils";

/**
 * Displays the component
 */
export const App: React.FC = () => {
  const savedPalettes: SeedColor[] = JSON.parse(
    window.localStorage.getItem("palettes")!
  );

  /**
   * Inits the Palette state
   */
  const [palettes, setPalettes] = useState(savedPalettes || seedColors);

  /**
   * Handles finding a palette by ID
   */
  const findPalette = (id: string) => {
    return palettes.find((palette) => {
      return palette.id === id;
    });
  };

  /**
   * Handles saving palettes to local storage
   */
  const syncLocalStorage = () => {
    window.localStorage.setItem("palettes", JSON.stringify(palettes));
  };

  /**
   * Handles saving a palette
   */
  const savePalette = (newPalette: any) => {
    setPalettes([...palettes, newPalette]);
  };

  /**
   * Handles removing a palette
   */
  const removePalette = (id: string) => {
    setPalettes(palettes.filter((palette) => palette.id !== id));
  };

  useEffect(() => {
    syncLocalStorage();
    // eslint-disable-next-line
  }, [palettes]);

  return (
    <Switch>
      <Route exact path="/palette/new">
        <NewPaletteForm
          maxColors={20}
          palettes={palettes}
          savePalette={savePalette}
        />
      </Route>
      <Route exact path="/">
        <PaletteList palettes={palettes} removePalette={removePalette} />
      </Route>
      <Route
        exact
        path="/palette/:paletteId/:colorId"
        render={(props) => (
          <Page>
            <SingleColorPalette
              id={props.match.params.paletteId}
              colorId={props.match.params.colorId}
              palette={generatePalette(
                findPalette(props.match.params.paletteId)!
              )}
            />
          </Page>
        )}
      />
      <Route
        exact
        path="/palette/:id"
        render={(props) => (
          <Page>
            <Palette
              palette={generatePalette(findPalette(props.match.params.id)!)}
            />
          </Page>
        )}
      />
    </Switch>
    // <div>
    //   <Palette palette={generatePalette(seedColors[4])} />
    // </div>
  );
};
