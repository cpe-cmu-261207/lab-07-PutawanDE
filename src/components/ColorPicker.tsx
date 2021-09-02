import CanvasConfig from "./CanvasConfig";
import SelectColorButton from "./SelectColorButton";

const ColorPicker = () => {
  const colors = CanvasConfig.colorPalette;

  return (
    <div>
      <div className="mx-auto my-4 flex justify-center space-x-4">
        {colors.slice(0, Math.ceil(colors.length / 2)).map((c) => (
          <SelectColorButton key={c} color={c} />
        ))}
      </div>
      <div className="mx-auto my-4 flex justify-center space-x-4">
        {colors.slice(Math.ceil(colors.length / 2), colors.length).map((c) => (
          <SelectColorButton key={c} color={c} />
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
