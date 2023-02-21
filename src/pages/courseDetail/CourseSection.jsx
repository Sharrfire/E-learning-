import React from "react";
import classNames from "classnames/bind";
import styles from "./courseSection.module.scss";
import CourseDetailItem from "./CourseDetailItem";
const cx = classNames.bind(styles);
CourseSection.propTypes = {};

function CourseSection({ tracks }) {
  // console.log(tracks);
  function formatSeconds(seconds) {
    var date = new Date(1970, 0, 1);
    date.setSeconds(seconds);
    return date.toTimeString().replace(/.*(\d{2}:\d{2}).*/, "$1");
  }
  return (
    <>
      {tracks.map((track) => (
        <div key={track.id}>
          <div  className={cx("course-section")}>
            <span>
              Mục {track.position}. {track.title}
            </span>
            <a href="#!" className={cx("btn-preview")}>
              Xem trước
            </a>
          </div>
          {track.track_steps.map((track_step) => (
            <CourseDetailItem
              key={track_step.track_id}
              name={track_step.step.title}
              duration={formatSeconds(track_step.step.duration)}
            />
          ))}
          {/* 
          {lessonList.map((lesson) => (
            <CourseDetailItem key={lesson.id} name={lesson.name} duration={lesson.duration} />
          ))} */}
        </div>
      ))}
    </>
  );
}

export default CourseSection;
