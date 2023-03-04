import React from "react";
import styles from "./myCourse.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

MyCourseList.propTypes = {};

function MyCourseList({ registeredCourses }) {
  let filteredList = [...new Set(registeredCourses.map(JSON.stringify))].map(
    JSON.parse
  );

  // const newRegisteredCourses=  Array.from(new Set(registeredCourses))
  console.log(filteredList);
  return (
    <>
      {filteredList?.map((course) => (
        <div key={course.id} className={cx("my-courses")}>
          <div className={cx("inner", "row")}>
            <Link
              to={`/detail/${course.id}`}
              className={cx("thumb", "col", "c-3", "m-5", "s-12")}
              href="/courses/htmlcss"
            >
              <img
                src={course.img}
                className={cx("thumb-image")}
                alt={course.title}
              />
            </Link>
            <div className={cx("info", "col", "c-8", "m-6", "s-12")}>
              <h3 className={cx("info-title")}>
                <Link to={`/detail/${course.id}`} style={{ color: "#000000" }}>
                  {course.title}{" "}
                </Link>
              </h3>
              <p>
                <span
                  className={cx("info-desc")}
                  style={{
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "5",
                    display: "-webkit-box",
                    fontSize: "1.4rem",
                    lineHeight: "2.2rem",
                    fontWeight: "400",
                    marginTop: "4px",
                    overflow: "hidden",
                    wordWrap: "break-word",
                  }}
                >
                  {course.description}
                </span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default MyCourseList;
