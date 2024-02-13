import { useState } from "react";
import ToggleButton from "./components/ToggleButton";
import { FaBars, FaCheck } from "react-icons/fa";

const App = () => {
  const [moreBtns, setMoreBtns] = useState(false);

  const moreButtons = () => {
    setMoreBtns(!moreBtns);
    console.log("Sikana lisää nappuloita!");
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="pt-32 pb-16 text-4xl font-bold">Nappulatreeni</h1>
      <ToggleButton text="Nappula" />
      <ToggleButton text="Toinen" icon={<FaBars />} />
      <ToggleButton text="Kolmas" icon={<FaCheck />} iconSide="right" />
      <ToggleButton text="Neljäs" size="small" initiallsPressed="true" />
      <ToggleButton
        text="Viides..."
        size="large"
        onClickFnc={moreButtons}
        initiallsPressed="true"
      />
      {moreBtns ? (
        <>
          <ToggleButton text="Sikana" />
          <ToggleButton text="Lisää" />
          <ToggleButton text="Uusia" />
          <ToggleButton text="Nappuloita" />
        </>
      ) : null}
      {}
    </div>
  );
};
export default App;
