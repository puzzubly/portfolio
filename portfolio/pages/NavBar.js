import React from "react";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

const NavBar = () => {
  return (
    <div className="flex">
      <h1 className="logotype">neetnet.io</h1>
      <MobileNavigation />
      <Navigation />
    </div>
  );
};

export default NavBar;
