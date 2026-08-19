import "../pages/styles/Home.css";
import { Navbar } from "../components/Navbar";
import { useState } from "react";

export function Home() {

  const [name, setName] = useState("أرشد محمد");
  const isUrdu = name === "أرشد محمد";
  const isTelugu = name == "అర్షద్ మహ్మద్";

  function changeName() {
    if (name === "أرشد محمد") {
      setName("అర్షద్ మహ్మద్");
    } else if (name === "అర్షద్ మహ్మద్") {
      setName("अरशद मोहम्मद");
    } else if (name === "अरशद मोहम्मद") {
      setName("أرشد محمد");
    } else {
      setName("أرشد محمد");
    }
  }

  return (
    <div className="page-wrapper">
      <div className="flex-container">
        <div className="flex-child">
          <p className="urdu"
          onClick={changeName}
          style={{ fontFamily: isUrdu ? 'Noto Nastaliq Urdu' : isTelugu ? 'Ramaraja': 'Tiro Devanagari Hindi',
          fontSize: isUrdu ? '48px' : '34px',
          marginTop: isUrdu ? '-10px' : isTelugu ? '13px' : '16px'}}>{name}</p>
          <Navbar />
        </div>
        <div className="flex-child">
          <div className="paragraph">
            <p>
              Hello there! My name is{" "}
              <a href="https://www.linkedin.com/in/arshad-mohammad-6071581b2/">
                Arshad Mohammad
              </a>{" "}
              and I am a recent Master of Applied Bioengineering graduate from the
              University of Washington.
            </p>
            <p>
              I have a keen interest in assistive technology, computer vision, 
              machine learning for medical imaging, and biomedical engineering.
            </p>
            <p>
              This is me attempting to create a portfolio with some ~pizazz~
              (aka minimal design experience). If this gives off brutalist web
              auteur realness that was definitely intentional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;