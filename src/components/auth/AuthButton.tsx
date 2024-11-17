import { Link } from "react-router-dom";
import React from "react";

interface AuthLinkProps {
  text: string;
  linkText: string;
  href: string;
}

const AuthButton: React.FC<AuthLinkProps> = ({ text, linkText, href }) => {
  return (
    <p className="text-center text-gray-400">
      {text}{" "}
      <Link to={href} className="text-blue-500 hover:text-blue-400">
        {linkText}
      </Link>
    </p>
  );
};

export default AuthButton;
