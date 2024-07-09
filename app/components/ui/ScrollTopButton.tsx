"use client";
import { FaArrowUp } from "react-icons/fa";
import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
const ScrollTopButton = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    // const handleScroll = () => {
    //   window.scrollY > 20 ? setVisible(true) : setVisible(false);
    // };
    const handleScroll = () => {
      setVisible(window.scrollY > 100);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
  };
  return (
    visible && (
      <Button
        onClick={handleClick}
        isIconOnly
        color="success"
        className="fixed bottom-5 right-5 z-50"
      >
        <FaArrowUp />
      </Button>
    )
  );
};

export default ScrollTopButton;
