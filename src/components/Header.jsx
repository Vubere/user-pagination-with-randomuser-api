import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <nav>
       
        <div className="logo">
          <Link to="/">
            <img src="/src/assets/usersIcon.svg" alt="user icon" />
          </Link>
        </div>
     
      </nav>
    </header>
  );
}
