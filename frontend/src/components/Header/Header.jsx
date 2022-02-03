import ThemeToggle from "../ThemeToggle/ThemeToggle";
import Avatar from "../../assets/avatar.ico";
import { useUser } from "../../contexts/UserContext";
import "./Header.scss";

export default function Header() {
  const currentUser = useUser();

  return (
    <header className="header">
      <span className="header__logo">
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="26"
        >
          <path
            fill="#FFF"
            fillRule="evenodd"
            d="M20.513 0C24.965 2.309 28 6.91 28 12.21 28 19.826 21.732 26 14 26S0 19.826 0 12.21C0 6.91 3.035 2.309 7.487 0L14 12.9z"
          />
        </svg>
      </span>

      <ThemeToggle className="header__toggle" />

      <div className="header__avatar">
        <img
          src={
            currentUser ? `https://avatar.tobi.sh/${currentUser.email}` : Avatar
          }
          alt="avatar"
        />
      </div>
    </header>
  );
}
