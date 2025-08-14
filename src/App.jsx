import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { AboutMe } from "./pages/AboutMe";
import { Projects } from "./pages/Projects";
import { Photography } from "./pages/Photography";
import { Blog } from "./pages/Blog";
import { Contact } from "./pages/Contact";
import { Layout } from "./Layout";
import { Home } from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
