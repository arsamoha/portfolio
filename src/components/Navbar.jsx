import { Link } from "react-router-dom";
import "./styles/Navbar.css";

export function Navbar() {
  console.log("Navbar rendered");
  return (
    <div>
      <ul>
      <li>
          <Link to="/aboutme">
            about me
          </Link>
        </li>
        <li>
          <Link to="/projects">
            projects
          </Link>
        </li>
        <li>
          <Link className="photography" to="/photography">
            photography
          </Link>
        </li>
        <li>
          <Link to="/blog">
            blog
          </Link>
        </li>
        <li>
          <Link to="/contact">
            contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
