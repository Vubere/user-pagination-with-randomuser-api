import { Link } from "react-router-dom";
import logo from "../assets/usersIcon.svg"

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
