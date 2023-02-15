import React from "react";
import classNames from "classnames/bind";
import styles from "./courseSection.module.scss";
import CourseDetailItem from "./CourseDetailItem";
const cx = classNames.bind(styles);
CourseSection.propTypes = {};

function CourseSection({  sectionName, lessonList }) {
  
  return (
    <>
      <div className={cx("course-section")}>
        <span>{sectionName}</span>
        <a href="#!" className={cx("btn-preview")}>Xem trước</a>
      </div>
      <p>Bài học</p>

      {lessonList.map((lesson) => (
        <CourseDetailItem key={lesson.id} name={lesson.name} duration={lesson.duration} />
      ))}
    </>
  );
}

export default CourseSection;
