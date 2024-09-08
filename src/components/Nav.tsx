import React, { useEffect, useState } from "react";

const Nav = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <header
      className={`fixed w-[100%] h-[60px] p-[20px] top-0 flex justify-between items-center z-10 ease-in transition-all duration-200 ${
        show && "bg-[#111]"
      }`}
    >
      <img
        width={80}
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
        className="object-contain fixed left-[20px]"
      />

      <img
        width={25}
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="avatar"
        className="object-contain fixed right-[20px]"
      />
    </header>
  );
};

export default Nav;
