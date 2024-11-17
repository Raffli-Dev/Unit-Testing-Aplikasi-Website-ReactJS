import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AppConsole from "./AppConsole";
import AppUi from "./AppUi";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/page1" />} />
        <Route path="/page1" element={<AppConsole />} />
        <Route path="/page2" element={<AppUi />} />
      </Routes>
    </Router>
  );
};

export default App;
