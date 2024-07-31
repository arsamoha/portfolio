import { useEffect } from "react";
import "./App.css";

function App() {

  // const changeArabic = document.getElementsByClassName("english");

  // changeText.addEventListener("click", function() {
  //   changeText.textContent = "أرشد محمد";
  // });

  return (
    <div>
      <div>
        <h1 className="english">ARSHAD MOHAMMAD</h1>
        <h1 className="name2">أرشد محمد</h1>
      </div>
      <p className="about">ABOUT ME</p>
      <p className="resume">RESUME</p>
      <p className="photography">PHOTOGRAPHY</p>
      <p className="cad">CAD</p>
      <p className="art">ART</p>
      <div className="dropdown">
        <button className="dropbtn">PROJECTS</button>
        <div className="dropdown-content">
          <a href="#">ICOOK</a>
          <a href="#">GAZE TRACKER</a>
          <a href="#">CAT'S ROOM</a>
        </div>
      </div>
    </div>
  );
}

export default App;
