import NavLinks from "./NavLinks";
import { CgMenuRound } from "react-icons/cg";
import { useState } from "react";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="mobile-navigation flex">
      <CgMenuRound
        className="hamburger"
        size="2em"
        onClick={() => setOpen(!open)}
      />
      {open && <NavLinks />}
    </nav>
  );
};

export default MobileNavigation;
