import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Pages/Home";
import CoinPage from "./components/Pages/CoinPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={`/CoinPage/:id`} element={<CoinPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
