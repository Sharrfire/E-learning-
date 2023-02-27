import React, { useEffect, useState } from "react";
import styles from "./search.module.scss";
import classnames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
const cx = classnames.bind(styles);
export default function Search() {
  const [searhResult, setSearhResult] = useState([]);
  const hide = () => setSearhResult([]);

  useEffect(() => {
    setTimeout(() => {
      setSearhResult([1, 2]);
    }, 1000);
  }, []);
  
  return (
    <Tippy
      visible={searhResult.length > 0}
      interactive
      onClickOutside={hide}
      
      render={(attrs) => (
        <div className={cx("search-result")} tabIndex="20" {...attrs}>
          <div className={cx("result-wrapper")}>
            <div className={cx("result-header")}>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="spinner"
                className={cx("svg-inline--fa"," fa-spinner","search-icon")}
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M304 48C304 74.51 282.5 96 256 96C229.5 96 208 74.51 208 48C208 21.49 229.5 0 256 0C282.5 0 304 21.49 304 48zM304 464C304 490.5 282.5 512 256 512C229.5 512 208 490.5 208 464C208 437.5 229.5 416 256 416C282.5 416 304 437.5 304 464zM0 256C0 229.5 21.49 208 48 208C74.51 208 96 229.5 96 256C96 282.5 74.51 304 48 304C21.49 304 0 282.5 0 256zM512 256C512 282.5 490.5 304 464 304C437.5 304 416 282.5 416 256C416 229.5 437.5 208 464 208C490.5 208 512 229.5 512 256zM74.98 437C56.23 418.3 56.23 387.9 74.98 369.1C93.73 350.4 124.1 350.4 142.9 369.1C161.6 387.9 161.6 418.3 142.9 437C124.1 455.8 93.73 455.8 74.98 437V437zM142.9 142.9C124.1 161.6 93.73 161.6 74.98 142.9C56.24 124.1 56.24 93.73 74.98 74.98C93.73 56.23 124.1 56.23 142.9 74.98C161.6 93.73 161.6 124.1 142.9 142.9zM369.1 369.1C387.9 350.4 418.3 350.4 437 369.1C455.8 387.9 455.8 418.3 437 437C418.3 455.8 387.9 455.8 369.1 437C350.4 418.3 350.4 387.9 369.1 369.1V369.1z"
                ></path>
              </svg>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="magnifying-glass"
                className={cx("svg-inline--fa","fa-magnifying-glass","search-icon")}
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"
                ></path>
              </svg>
              <span>Kết quả cho ''</span>
            </div>
            <div className={cx("result-heading")}>
              <h3>Khóa học</h3>
              <a className={cx("result-see_more")} href="#!">
                Xem thêm
              </a>
            </div>
            <a className={cx("search-item")} href="#!">
              <div className={cx("avatar")}>
                <img
                  src="https://files.fullstack.edu.vn/f8-prod/courses/2.png"
                  alt="HTML CSS từ Zero đến Hero"
                />
              </div>
              <span>HTML CSS từ Zero đến Hero</span>
            </a>{" "}
            <a className={cx("search-item")} href="#!">
              <div className={cx("avatar")}>
                <img
                  src="https://files.fullstack.edu.vn/f8-prod/courses/2.png"
                  alt="HTML CSS từ Zero đến Hero"
                />
              </div>
              <span>HTML CSS từ Zero đến Hero</span>
            </a>{" "}
            <a className={cx("search-item")} href="#!">
              <div className={cx("avatar")}>
                <img
                  src="https://files.fullstack.edu.vn/f8-prod/courses/2.png"
                  alt="HTML CSS từ Zero đến Hero"
                />
              </div>
              <span>HTML CSS từ Zero đến Hero</span>
            </a>{" "}
            <a className={cx("search-item")} href="#!">
              <div className={cx("avatar")}>
                <img
                  src="https://files.fullstack.edu.vn/f8-prod/courses/2.png"
                  alt="HTML CSS từ Zero đến Hero"
                />
              </div>
              <span>HTML CSS từ Zero đến Hero</span>
            </a>{" "}
            <a className={cx("search-item")} href="#!">
              <div className={cx("avatar")}>
                <img
                  src="https://files.fullstack.edu.vn/f8-prod/courses/2.png"
                  alt="HTML CSS từ Zero đến Hero"
                />
              </div>
              <span>HTML CSS từ Zero đến Hero</span>
            </a>
          </div>
        </div>
      )}
    >
      <div>
        <div className={`${cx("wrapper")} `}>
          <div className={cx("icon")}></div>
          <input
            className={cx("input")}
            spellCheck="false"
            placeholder="Tìm kiếm khóa học,..."
          />
        </div>
      </div>
    </Tippy>
  );
}
