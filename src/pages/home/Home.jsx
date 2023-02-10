import classNames from "classnames/bind";
import InfoCourses from "./infoCourses/InfoCourses";
import styles from "./home.module.scss";
import CoursesHome from "./coursesHome/CoursesHome";
const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx("container")}>
      <InfoCourses />
      <CoursesHome />
    </div>
  );
}

export default Home;
