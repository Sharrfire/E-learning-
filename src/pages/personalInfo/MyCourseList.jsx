import React from "react";
import styles from "./myCourse.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

MyCourseList.propTypes = {};

function MyCourseList(props) {
  return (
    <div className={cx("my-courses")}>
      {/* <p>
        <span className={cx("my-courses_title")}>Các khóa học đã đăng ký</span>
      </p> */}
      <div className={cx("inner","row")}>
        <a className={cx("thumb","col","c-3","m-5","s-12")} href="/courses/htmlcss">
          <img
            src="https://files.fullstack.edu.vn/f8-prod/courses/13/13.png"
            className={cx("thumb-image")}
            alt="HTML CSS Pro"
          />
        </a>
        <div className={cx("info","col","c-8","m-6","s-12")}>
          <h3 className={cx("info-title")}>
            <a href="#!" style={{ color: "#000000" }} >
              Xây Dựng Website với ReactJS
            </a>
          </h3>
          <p>
            <span
              className={cx("info-desc")}
              style={{
                "-webkit-box-orient": "vertical",
                "-webkit-line-clamp": "5",
                display: "-webkit-box",
                fontSize: "1.4rem",
                lineHeight: "2.2rem",
                fontWeight: "400",
                marginTop: "4px",
                overflow: "hidden",
                wordWrap: "break-word",
              }}
            >
              Từ cơ bản tới chuyên sâu, thực hành 8 dự án, hàng trăm bài tập,
              trang hỏi đáp riêng, cấp chứng chỉ sau khóa học và mua một lần học
              mãi mãi.
            </span>
          </p>
        </div>
      </div>

 
    </div>
  );
}

export default MyCourseList;
