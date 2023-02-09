import classnames from "classnames/bind";
import { useState } from "react";
import styles from "./action.module.scss";
import avatar from "~/assets/imgs/fallback-avatar.jpg";

const cx = classnames.bind(styles);

export default function Action() {
  const isLoggedIn = true;
  const [openCourses, setOpenCourses] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);
  const handleOpenCourses = () => {
    setOpenCourses(!openCourses);
    setOpenNotification(false);

  };
  const handleOpenNotification = () => {
    setOpenNotification(!openNotification);
    setOpenCourses(false);

  };
  return (
    <div className={cx("container")}>
      {isLoggedIn && (
        <div className={cx("action")}>
          <div className={cx("courses")} onClick={handleOpenCourses}>
            <p>Khóa học của tôi</p>
            {openCourses && (
              <div className={cx("myCourses-wrapper")}>
                <div className={cx("label")}>
                  <h6>Khóa học của tôi</h6>

                  <a href="#!">Xem tất cả</a>
                </div>
                <div className={cx("courses-list")}>
                  <div className={cx("courses-item")}></div>
                </div>
              </div>
            )}
          </div>
          <div className={cx("notification")}   onClick={handleOpenNotification}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="22"
              fill="currentColor"
              className="bi bi-bell-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
            </svg>
            {openNotification && (
              <div
                className={cx("notification-wrapper")}
              
              >
                <div className={cx("label")}>
                  <h6>Thông báo</h6>

                  <a href="#!">Đánh dấu đã đọc</a>
                </div>
              </div>
            )}
          </div>
          <div className={cx("wrapper")}>
            <div className={cx("avatar")}>
              <img src={avatar} alt="avatar" />
            </div>
          </div>
        </div>
      )}
      {!isLoggedIn && (
        <div className={cx("cta")}>
          <p className={cx("login")}>Đăng nhập</p>
        </div>
      )}
    </div>
  );
}
