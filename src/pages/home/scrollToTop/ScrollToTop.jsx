import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";
import styles from "./scrollToTop.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
export default function ScrollTotop() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={cx("top-to-btm")}>
       {" "}
            {showTopBtn && (
                <FaAngleUp
                    className={cx("icon-position","icon-style")}
                    onClick={goToTop}
                />
            )}{" "}
    </div>
  );
}
