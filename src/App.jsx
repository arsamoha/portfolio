import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("ARSHAD MOHAMMAD");
  const [arabic, setNameArabic] = useState("أرشد محمد");

  function changeNameEnglish() {
    if (name === "ARSHAD MOHAMMAD") {
      setName("أرشد محمد");
    } else if (name === "أرشد محمد") {
      setName("అర్షద్ మహ్మద్");
    } else if (name === "అర్షద్ మహ్మద్") {
      setName("अरशद मोहम्मद");
    } else if (name === "अरशद मोहम्मद") {
      setName("ARSHAD MOHAMMAD");
    } else {
      setName("ARSHAD MOHAMMAD");
    }
  }

  function changeNameArabic() {
    if (arabic === "ARSHAD MOHAMMAD") {
      setNameArabic("أرشد محمد");
    } else if (arabic === "أرشد محمد") {
      setNameArabic("అర్షద్ మహ్మద్");
    } else if (arabic === "అర్షద్ మహ్మద్") {
      setNameArabic("अरशद मोहम्मद");
    } else if (arabic === "अरशद मोहम्मद") {
      setNameArabic("ARSHAD MOHAMMAD");
    } else {
      setNameArabic("ARSHAD MOHAMMAD");
    }
  }

  const isArabic = name === "أرشد محمد";
  const isArabic2 = arabic == "أرشد محمد";

  return (
    <div>
      <div>
        <h1 className="english"
            onClick={changeNameEnglish}
            style={{ fontFamily: isArabic ? 'Arabic' : 'Courier Prime',
            fontSize: isArabic ? '64px' : '40px',
            marginBottom: isArabic ? '10px' : '20px'}}>{name}</h1>
        <h1 className="name2" onClick={changeNameArabic}
            style={{ fontFamily: isArabic2 ? 'Arabic' : 'Courier Prime',
            fontSize: isArabic2 ? '64px' : '40px',
            marginTop: isArabic2 ? '20px' : '30px'}}>{arabic}</h1>
      </div>
      <p className="about">ABOUT ME</p>
      <button className="resume">RESUME</button>
      <button className="photography">PHOTOGRAPHY</button>
      <button className="cad">CAD</button>
      <button className="art">ART</button>
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
