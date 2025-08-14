import "../pages/styles/Home.css";
import { Navbar } from "../components/Navbar";

export function Home() {
  return (
    
    <div className="flex-container">
      <div className="flex-child">
        <p className="urdu">ارشد محمد</p>
        <Navbar />
      </div>
      <div className="flex-child">
        <div className="paragraph">
          <p>
            Hello there! My name is <a href="">Arshad Mohammad</a> and I am a
            Master of Applied Bioengineering student at the University of
            Washington.
          </p>

          <p>
            I have a keen interest in assistive technology, full stack web
            development, and biomedical engineering.
          </p>

          <p>
            This is me attempting to create a portfolio with some ~pizazz~ (aka
            minimal design experience). If this gives off brutalist web auteur
            realness that was definitely intentional.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
