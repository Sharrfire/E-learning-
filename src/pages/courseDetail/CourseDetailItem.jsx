import classNames from "classnames/bind";
import styles from "./CourseDetailItem.module.scss";
const cx = classNames.bind(styles);
CourseDetailItem.propTypes = {};

function CourseDetailItem({name, duration}) {
  return (
    <>
      <div className={cx("lesson-content")}>
        <span>
          <i className="fa fa-play"></i>{name}
        </span>
        <span>
          <i className="fa fa-clock"></i>{duration}
        </span>
      </div>
    </>
  );
}

export default CourseDetailItem;
