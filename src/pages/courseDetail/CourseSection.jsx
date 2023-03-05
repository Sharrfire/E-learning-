import classNames from "classnames/bind";
import styles from "./courseSection.module.scss";
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
      {tracks.map((track,index) => (
        <div key={index}>
          <div className={cx("course-section")}>
            <span>
              Mục {track.position}. {track.title}
            </span>
            <a href="#!" className={cx("btn-preview")}>
              Xem trước
            </a>
          </div>
          {track.track_steps.map((track_step,index) => (
            <div key={index} className={cx("lesson-content")}>
              <span>
                <i className="fa fa-play"></i>
                {track_step.step.title}
              </span>
              <span>
                <i className="fa fa-clock"></i>
                {formatSeconds(track_step.step.duration)}
              </span>
            </div>
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
