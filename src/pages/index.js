import React, { useState } from "react"
import ChooseActivity from "../components/chooseActivity";
import ChooseCustom from "../components/chooseCustom";
import ChooseFood from "../components/chooseFood";
import ChooseMovieTv from "../components/chooseMovieTv";

const ViewType = {
  MainMenu: 0,
  ChooseActivity: 1,
  ChooseMovieTv: 2,
  ChooseFood: 3,
  ChooseCustom: 4
};

const App = () => {
  const [currentView, setCurrentView] = useState(ViewType.MainMenu);

  const goToView = (viewType) => {
    return () => {
      setCurrentView(viewType);
    };
  };

  return (
    <div className="root">
      {
        currentView === ViewType.MainMenu &&
        <div>
          <div className="decorative-quote">
            "Existence was really very simple when you did what you were told."
            <br />
            <i>The Princess Bride</i>, William Goldman
          </div>
          <div className="button-group">
            <button className="default-button" onClick={goToView(ViewType.ChooseActivity)}>Choose an activity</button>
            <button className="default-button" onClick={goToView(ViewType.ChooseFood)}>Choose something to eat</button>
            <button className="default-button" onClick={goToView(ViewType.ChooseMovieTv)}>Choose something to watch</button>
            <button className="default-button" onClick={goToView(ViewType.ChooseCustom)}>Choose for me</button>
          </div>
        </div>
      }
      {currentView !== ViewType.MainMenu && <button className="back-button" onClick={goToView(ViewType.MainMenu)}>Back to main menu</button>}
      {currentView === ViewType.ChooseActivity && <ChooseActivity />}
      {currentView === ViewType.ChooseFood && <ChooseFood />}
      {currentView === ViewType.ChooseMovieTv && <ChooseMovieTv />}
      {currentView === ViewType.ChooseCustom && <ChooseCustom />}
    </div>
  );
};

export default App
