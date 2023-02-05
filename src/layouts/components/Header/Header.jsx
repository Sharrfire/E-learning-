import React from "react";
import styles from "./header.module.scss";
import classnames from "classnames/bind";
import Search from "../Search/Search";
import NavBar from "../navBar/NavBar";
const cx = classnames.bind(styles);

export default function Header() {
  const heading = "Học Lập Trình Để Đi Làm";
  return (
    <div className={cx("header")}>
      <div className={cx("logo")}>
        <a href="#!">
          <img
            src="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
            alt="img"
          />
        </a>
        <h4 className={cx("logo-heading")}>{heading}</h4>
      </div>
      <div className={`${cx("search")} `}>
        <Search />
      </div>
      <NavBar />
    </div>
  );
}
