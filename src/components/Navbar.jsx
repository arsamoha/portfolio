import { Link } from "react-router-dom";
import "./styles/Navbar.css";

export function Navbar() {
  console.log("Navbar rendered");
  return (
    <div className="column1">
      <ul>
        <li>
          <Link className="home" to="/">
            ARSHAD MOHAMMAD
          </Link>
        </li>
        <p className="projects">PROJECTS</p>
        <li>
          <Link className="icook" to="/icook">
            ICOOK
          </Link>
        </li>
        <li>
          <Link className="gazetracker" to="/gazetracker">
            GAZE TRACKER
          </Link>
        </li>
        <li>
          <Link className="catsroom" to="/catsroom">
            CAT'S ROOM
          </Link>
        </li>
        <li>
          <Link className="cad" to="/cad">
            CAD
          </Link>
        </li>
        <li>
          <Link className="photography" to="/photography">
            PHOTOGRAPHY
          </Link>
        </li>
        <li>
          <Link className="art" to="/art">
            ART
          </Link>
        </li>
        <li>
          <Link className="aboutme" to="/aboutme">
            ABOUT ME
          </Link>
        </li>
        <li>
          <Link className="resume" to="/resume">
            RESUME
          </Link>
        </li>
      </ul>
    </div>
  );
}
