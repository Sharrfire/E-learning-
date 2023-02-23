import classnames from "classnames/bind";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Action from "../Action/Action";
import Search from "../Search/Search";
import styles from "./header.module.scss";
const cx = classnames.bind(styles);

export default function Header() {
  // const heading = "Học Lập Trình Để Đi Làm";

  const [cateList, setCateList] = useState([]);

  const BASE_URL =
    "https://e-learning-976fe-default-rtdb.asia-southeast1.firebasedatabase.app/";
  useEffect(() => {
    (async () => {
      const response = await fetch(BASE_URL + "cate.json");
      var cateListData = await response.json();
      setCateList([...cateListData.data]);
    })();
  }, []);
  const [openCourses, setOpenCourses] = useState(false);
  const handleOpenCourses = () => {
    setOpenCourses(!openCourses);
  };
  const handleCloseCourses = () => {
    setOpenCourses(false);
  };
  return (
    <div className={cx("header")}>
      <div className={cx("header-left")}>
        <div className={cx("logo")}>
          <Link to="/">
            <img
              src="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
              alt="img"
            />
          </Link>
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
                {cateList.map((cate, index) => (
                  <li key={index}>
                    <a href="#!">{cate.tenDanhMuc}</a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className={cx("header-item")}>
            <a className={cx("header-item-link")} href="#!">
              Khóa học
            </a>
          </li>
          <li className={cx("header-item")}>
            <Link className={cx("header-item-link")} to="/blog">
              Blog
            </Link>
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
            <Link className={cx("header-item-link")} to="/about">
              Thông tin
            </Link>
          </li>
        </ul>
      </div>
      <div className={cx("action")}>
          <div className={cx("courses")} onClick={handleOpenCourses}>
          <i className="fa fa-bars"></i>
            {openCourses && (
              <>
                <div
                  className={cx("overlay")}
                  onClick={handleCloseCourses}
                ></div>
                <div className={cx("myCourses-wrapper")}>
                  <div className={cx("courses-list")}>
                    <div className={cx("courses-item")}>
                      <ul>
                        <li>
                          <a href="#">Danh mục</a>
                          <div>
                            <ul></ul>
                          </div>
                        </li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      <div className={cx("header-right")}>
        <Action />
      </div>
    </div>
  );
}
