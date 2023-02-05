import React, { useState } from "react";
import styles from "./sideBar.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);
export default function SideBar() {
  const isLoggedIn = useState(false);
  return (
    <div className={cx("container")}>
      {isLoggedIn === true ? (
        <div>
          <div className={cx("courses")}>Khóa học của tôi</div>
          <a href="#!" className={cx("logout")}>
            Đăng Xuất
          </a>
        </div>
      ) : (
        <div>
          <a href="#!" className={cx("login")}>
            Đăng nhập
          </a>
        </div>
      )}
    </div>
  );
}
