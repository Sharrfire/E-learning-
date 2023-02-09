import classnames from "classnames/bind";
import Action from "../Action/Action";
import Search from "../Search/Search";
import styles from "./header.module.scss";
const cx = classnames.bind(styles);

export default function Header() {
  // const heading = "Học Lập Trình Để Đi Làm";
  return (
    <div className={cx("header")}>
      <div className={cx("header-left")}>
        <div className={cx("logo")}>
          <a href="#!">
            <img
              src="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
              alt="img"
            />
          </a>
          {/* <h4 className={cx("logo-heading")}>{heading}</h4> */}
          <div className={cx("search")}></div>
          <Search />
        </div>
      </div>
      <div className={cx("header-menu")}>
        <ul className={cx("header-list")}>
          <li className={cx("header-item")}>
            <a className={cx("header-item-link")} href="#!">
              Danh mục{" "}
            </a>

            <div className={cx("item-list-container")}>
              <ul className={cx("item-list")}>
                <li>
                  <a href="#!">Lập trình BackEnd</a>
                </li>
                <li>
                  <a href="#!">Lập trình FrontEnd</a>
                </li>
                <li>
                  <a href="#!">Lập trình Di Động</a>
                </li>
                <li>
                  <a href="#!">Lập trình FullStack</a>
                </li>
                <li>
                  <a href="#!">Tư duy lập trình</a>
                </li>
              </ul>
            </div>
          </li>
          <li className={cx("header-item")}>
            <a className={cx("header-item-link")} href="#!">
              Khóa học
            </a>
          </li>
          <li className={cx("header-item")}>
            <a className={cx("header-item-link")} href="#!">
              Blog
            </a>
          </li>
          <li className={cx("header-item")}>
            <a className={cx("header-item-link")} href="#!">
              Sự kiện
            </a>
            <div className={cx("item-list-container")}>
              <ul className={cx("item-list")}>
                <li>
                  <a href="#!">Sự kiện sale backfriday</a>
                </li>
                 <li>
                  <a href="#!">Sự kiện sale noel</a>
                </li>
                 <li>
                  <a href="#!">Sự kiện sale Tết</a>
                </li>
              
              </ul>
            </div>
          </li>
          <li className={cx("header-item")}>
            <a className={cx("header-item-link")} href="#!">
              Thông tin
            </a>
          </li>
        </ul>
      </div>
      <div className={cx("header-right")}>
        <Action />
      </div>
    </div>
  );
}
