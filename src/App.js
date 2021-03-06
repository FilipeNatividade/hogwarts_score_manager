import "./App.css";
import CardsNote from "./Components/CardsNote";
import DashboardScore from "./Components/DashboardScore";
import Students from "./Components/Students";

import { useSelector } from "react-redux";

function App() {
  const visible = useSelector((state) => state.isVisible);

  console.log(visible);

  return (
    <div className="App">
      <DashboardScore visible={visible} />
      <CardsNote />
      <Students />
    </div>
  );
}

export default App;
