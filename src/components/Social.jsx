import React from "react";
import {
  FaFacebookF,
  FaMedium,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaFacebookF />, link: "https://www.facebook.com/tuhin96/" },
  { Social: <FaMedium />, link: "https://medium.com/@tuhin.mallick" },
  { Social: <FaInstagram />, link: "https://www.instagram.com/" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/in/tuhinmallick/" },
  { Social: <FaGithub />, link: "https://github.com/tuhinmallick" },
];

const Social = () => {
  return (
    <div className="nav social-icons justify-content-center">
      {SocialShare.map((val, i) => (
        <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
          {val.Social}
        </a>
      ))}
    </div>
  );
};

export default Social;
