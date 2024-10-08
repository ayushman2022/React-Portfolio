import React from "react";

const Footer = () => {
  return (
    <>
      <div className="py-5 bg-slate-200 flex flex-col md:flex-row justify-between items-center px-6 md:px-32">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p>Portfolio Created By AYUSHMAN CHOUBEY</p>
        </div>
        <div className="space-x-3 md:space-x-5 text-center">
          <a href="/about" className="hover:underline block md:inline-block">
            About
          </a>
          <a
            href="/privacy-policy"
            className="hover:underline block md:inline-block"
          >
            Privacy Policy
          </a>
          <a href="/contact" className="hover:underline block md:inline-block">
            Contact
          </a>
          <a href="/licence" className="hover:underline block md:inline-block">
            Licence
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
