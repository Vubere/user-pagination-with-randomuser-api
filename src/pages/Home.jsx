import { Link } from "react-router-dom";


export default function Home() {
  return (
    <main>
      <Link to="/users">
        <button className="buttonToUser">see users</button>
      </Link>
    </main>
  );
}
