import "./App.css";
import CardsNote from "./Components/CardsNote";
import DashboardScore from "./Components/DashboardScore";
import Students from "./Components/Students";

function App() {
  return (
    <div className="App">
      {/* {isVisible && ( */}
      <DashboardScore />
      {/* )} */}
      <CardsNote />
      <Students />
    </div>
  );
}

export default App;
