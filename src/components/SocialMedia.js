import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center gap-3 fs-4 ">
        <a href="https://www.instagram.com/itz_me_kitkat_boy/">
          <div className="text-black">
            <FaInstagram className="s-icon" />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/surya-a-b48330260">
          <div className="text-blue">
            <FaLinkedin className="s-icon" />
          </div>
        </a>
        <a href="https://github.com/suriyamarley">
          <div className="text-black">
            <FaGithub className="s-icon" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
