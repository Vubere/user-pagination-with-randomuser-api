import { Link } from "react-router-dom";
import logo from "../assets/usesIcon"

export default function Header() {
  return (
    <header className="header">
      <nav>
       
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="user icon" />
          </Link>
        </div>
     
      </nav>
    </header>
  );
}
