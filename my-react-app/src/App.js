import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Day1Learning from "./pages/Day1Learning";
import Day2Learning from "./pages/Day2Learning";

function App() {
  return (
    <Router>
      <div>
        <div>
          <h1>React 学习项目</h1>
          <Link to="/day1">
            <button>第一天学习内容</button>
          </Link>
          <Link to="/day2">
            <button>第二天学习内容</button>
          </Link>
        </div>

        <Routes>
          <Route path="/day1" element={<Day1Learning />} />
          <Route path="/day2" element={<Day2Learning />} />
          <Route path="/" element={
            <div>
              <h2>欢迎来到 React 学习项目</h2>
              <p>点击上方按钮查看每天的学习内容</p>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
