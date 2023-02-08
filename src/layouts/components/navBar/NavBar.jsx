import classnames from "classnames/bind";
import { useState } from "react";
import styles from "./navBar.module.scss";
const cx = classnames.bind(styles);

export default function NavBar() {
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
        <div className={cx("cta")}>
          <p  className={cx("login")}>
            Đăng nhập
          </p>
        </div>
      )}
    </div>
  );
}
