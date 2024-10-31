import "./App.css";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./pages/landingPage";
import ICook from "./pages/icook";

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/icook" element={<ICook/>}/>
      </Routes>
    </Router>
  )

}

export default App;
