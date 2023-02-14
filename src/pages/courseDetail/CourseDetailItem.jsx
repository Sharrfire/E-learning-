import classNames from "classnames/bind";
import styles from "./courseDetail.module.scss";
const cx = classNames.bind(styles);
CourseDetailItem.propTypes = {};

function CourseDetailItem(props) {
  return (
    <>
      <div className={cx("lesson-content")}>
        <span>
          <i class="fa fa-play"></i>Các khái niệm về React Component
        </span>
        <span>
          <i class="fa fa-clock"></i>14:35
        </span>
      </div>
    </>
  );
}

export default CourseDetailItem;
