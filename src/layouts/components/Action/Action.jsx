import React from "react";
import styles from "./action.module.scss";
import classNames from "classnames/bind";
import { useSelector } from "react-redux";
import avatar from "~/assets/vendor/instrutor6.64041dca.jpg";
import userLocal from "~/api/localStorage";
const cx = classNames.bind(styles);
let handleLogout = () => {
  userLocal.remove();
};
function Action() {
  const user = useSelector((state) => {
    return state.userSlice.userInfor;
  });
  if (user) {
    return (
      <div className={cx("showIconHeader")}>
        <div className={cx("headerAvatar")}>
          <a className={cx("info")} href="/personalinfo">
            <img className={cx("avatar")} src={avatar} alt="" />
            <span onClick={handleLogout} className={cx("logout")}>
              <a href="/">
                <i className="fas fa-power-off"></i>
              </a>
            </span>
          </a>
        </div>
        <div className={cx("menuMobile")}>
          <i className={cx("fas fa-sort-down", "iconMenuMobile")}></i>
          <ul className={cx("menuHeaderMobile")}>
            <li>
              <form>
              <input  action="" type="text"
                placeholder="Tìm kiếm"
                className={cx("searchFormMobile")} />
              </form>
            </li>
            <li className={cx("courseCateMobile")}>
              <a href="/" className={cx("active")} aria-current="page">Danh mục</a>
              <ul className={cx("courseCateListMobile")}>
                <li>
                  <a href="#!">Lập trình Back end</a>
                </li>
                <li>
                  <a href="#!">Thiết kế web</a>
                </li>
                <li>
                  <a href="#!">Lập trình di động</a>
                </li>
                <li>
                  <a href="#!">Lập trình Front end</a>
                </li>
                <li>
                  <a href="#!">Lập trình Full stack</a>
                </li>
                <li>
                  <a href="#!">Tư duy lập trình</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#!">Khóa học</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li className={cx("eventHeaderMobile","courseCateMobile")}>
            <a href="/sukien">Sự kiện</a>
            <ul className="courseCateListMobile">
                <li>
                  <a href="/sukien/lastYear">Sự kiện Sale Cuối Năm</a>
                </li>
                <li>
                  <a href="/sukien/Noel">Sự kiện Giáng sinh</a>
                </li>
                <li>
                  <a href="/sukien/Noel">Sự kiện Noel</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/thongtin">Thông tin</a>
            </li>
            <li>
              <a className={cx("active")} href="/" aria-current="page" >
                Đăng xuất
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <a href="/login" className={cx("login")}>
          Đăng nhập
        </a>
      </div>
    );
  }
}
export default Action;
