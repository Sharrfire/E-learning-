import classNames from "classnames/bind";
import styles from "./courseFilter.module.scss";
CourseFilter.propTypes = {};
const cx = classNames.bind(styles);

function CourseFilter({labelName}) {
  return (
    <div className={cx("label-container")} >
      <label className={cx("control", "control-checkbox")}>
        <input type="checkbox" />

        <span>{labelName}</span>
      </label>
    </div>
  );
}

export default CourseFilter;
