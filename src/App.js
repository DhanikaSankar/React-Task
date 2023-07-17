import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import YellowStore from "./YellowStore";
import Calculator from "./Calculator";
import ToDo from "./ToDo";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ToDo />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/yellow" element={<YellowStore />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
