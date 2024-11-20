import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Day1Learning from "./pages/Day1Learning";

function App() {
  return (
    <Router>
      <div>
        <div>
          <h1>React</h1>
          <Link to="/day1">
            <button>第一天学习内容</button>
          </Link>
        </div>

        <Routes>
          <Route path="/day1" element={<Day1Learning />} />
          <Route path="/" element={
            <div>
              
              
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
