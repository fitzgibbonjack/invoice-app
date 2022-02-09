import React, { useState } from "react";
import { useUser } from "../../contexts/UserContext";
import { AnimatePresence } from "framer-motion";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

import Logo from "../../assets/logo.svg";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import Avatar from "../../assets/avatar.ico";
import Dropdown, { DropdownItem } from "../Dropdown/Dropdown";
import "./Nav.scss";

import { ReactComponent as SignoutIcon } from "../../assets/signout.svg";
import { ReactComponent as UserIcon } from "../../assets/user.svg";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const currentUser = useUser();

  const handleSignOut = () => {
    signOut(auth);
    setOpen(false);
  };

  return (
    <nav className="nav">
      <span className="nav__logo">
        <img src={Logo} alt="Logo" />
      </span>

      <ThemeToggle className="nav__toggle" />

      <div className="nav__avatar">
        <button disabled={!currentUser} onClick={() => setOpen(!open)}>
          <img
            src={
              currentUser
                ? `https://avatar.tobi.sh/${currentUser.email}`
                : Avatar
            }
            alt="avatar"
          />
        </button>
      </div>

      <AnimatePresence>
        {open && currentUser && (
          <Dropdown>
            <DropdownItem icon={<UserIcon />}>Auth timeout</DropdownItem>
            <DropdownItem icon={<SignoutIcon />} onClick={handleSignOut}>
              Sign out
            </DropdownItem>
          </Dropdown>
        )}
      </AnimatePresence>
    </nav>
  );
}
