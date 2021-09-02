import { Store } from "pullstate";
import { CellProps } from "../components/Cell";
import { CanvasConfig } from "../components/CanvasConfig";

type PixelPainterStoreType = {
  //we save painted color as hex code (string) in 2D array
  canvas: string[][];
  selectedColor: string;
};

//return an (CanvasConfig.width x CanvasConfig.height) 2D array filled with CanvasConfig.color
const createEmptyCanvas = () => {
  const output: string[][] = [];
  for (let i = 0; i < CanvasConfig.height; i++) {
    output[i] = [];
    for (let j = 0; j < CanvasConfig.width; j++) {
      output[i].push(CanvasConfig.initialColor);
    }
  }
  return output;
};

export const updateCanvas = (cell: CellProps) => {
  PixelPainterStore.update((s) => {
    const tmp = s.canvas;
    tmp[cell.y][cell.x] = s.selectedColor;
    s.canvas = tmp;
  });
};

export const updateSelectedColor = (color: string) => {
  PixelPainterStore.update((s) => {
    s.selectedColor = color;
  });
};

export const clearCanvas = () => {
  PixelPainterStore.update((s) => {
    for (let y = 0; y < CanvasConfig.height; y++) {
      for (let x = 0; x < CanvasConfig.width; x++) {
        s.canvas[y][x] = CanvasConfig.initialColor;
      }
    }
  });
};

export const randomlyPaintCanvas = () => {
  PixelPainterStore.update((s) => {
    for (let y = 0; y < CanvasConfig.height; y++) {
      for (let x = 0; x < CanvasConfig.width; x++) {
        const r = Math.floor(Math.random() * CanvasConfig.colorPalette.length);
        s.canvas[y][x] = CanvasConfig.colorPalette[r];
      }
    }
  });
};

export const PixelPainterStore = new Store<PixelPainterStoreType>({
  canvas: createEmptyCanvas(),
  selectedColor: CanvasConfig.initialSelectedColor,
});
