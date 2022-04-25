import React from "react";
import { useRouter } from "next/router";
import NavBar from "./NavBar";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiMedium } from "react-icons/si";

function LandingPage() {
  const router = useRouter();
  return (
    <div>
      <section className="navbar">
        <NavBar />
      </section>
      <div>
        <h1 className="heading">Web developer</h1>
        <p className="text">HTML | CSS | JavaScript | React JS | Next JS</p>
      </div>
      <button
        className="landing-page-button"
        onClick={() => {
          router.push("/Form");
        }}
      >
        ENQUIRE HERE
      </button>
      <section className="link-section">
        <a href="https://github.com/neetnet200">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/anitadesanmiguel">
          <FaLinkedin />
        </a>
        <a href="https://medium.com/@anita.desanmiguel">
          <SiMedium />
        </a>
        <a href="https://twitter.com/neetnet200">
          <FaTwitter />
        </a>
      </section>
    </div>
  );
}

export default LandingPage;
