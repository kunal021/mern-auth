import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-slate-300/30 max-w-[37rem] m-auto border-4 rounded-full mt-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto py-3 px-5">
        <Link to="/">
          <h1 className="font-bold text-xl">Auth App</h1>
        </Link>
        <ul className="flex gap-6 font-semibold text-xl">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="about">
            <li>About</li>
          </Link>
          <Link to="sign-in">
            <li>Sign In</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
