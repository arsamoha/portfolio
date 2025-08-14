import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import ICook from "./pages/icook";
import { Layout } from "./Layout";
import { GazeTracker } from "./pages/GazeTracker";
import { CatsRoom } from "./pages/CatsRoom";
import { Cad } from "./pages/Cad";
import { Photography } from "./pages/Photography";
import { Art } from "./pages/Art";
import { AboutMe } from "./pages/AboutMe";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/icook" element={<ICook />} />
          <Route path="/gazetracker" element={<GazeTracker />}/>
          <Route path="/catsroom" element={<CatsRoom />}/>
          <Route path="/cad" element={<Cad />}/>
          <Route path="/photography" element={<Photography />}/>
          <Route path="/art" element={<Art />}/>
          <Route path="/aboutme" element={<AboutMe />}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
