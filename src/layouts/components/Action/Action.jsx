import classnames from "classnames/bind";
import { useState } from "react";
import avatar from "~/assets/imgs/fallback-avatar.jpg";

const cx = classnames.bind(styles);

export default function Action() {
  const isLoggedIn = true;
  const [openCourses, setOpenCourses] = useState(false);
  const handleOpenCourses = () => {
    setOpenCourses(!openCourses);
  };
  const handleCloseCourses = () => {
    setOpenCourses(false);
  };

  return (
    <div className={cx("container")}>
      {isLoggedIn && (
        <div className={cx("action")}>
          <div className={cx("courses")} onClick={handleOpenCourses}>
            <p>Khóa học của tôi</p>
            {openCourses && (
              <>
                <div
                  className={cx("overlay")}
                  onClick={handleCloseCourses}
                ></div>

                <div className={cx("myCourses-wrapper")}>
                  <div className={cx("label")}>
                    <h6>Khóa học của tôi</h6>

                    <a href="#!">Xem tất cả</a>
                  </div>
                  <div className={cx("courses-list")}>
                    <div className={cx("courses-item")}></div>
                  </div>
                </div>
              </>
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
