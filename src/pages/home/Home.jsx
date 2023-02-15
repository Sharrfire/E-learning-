import classNames from "classnames/bind";
import InfoCourses from "./infoCourses/InfoCourses";
import styles from "./home.module.scss";
import CoursesHome from "./coursesHome/CoursesHome";
import SliderHome from "./sliderHome/SliderHome";
import BoxNumber from "./boxNumber/BoxNumber";
import Instrutor from "./instrutor/Instrutor";
const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx("container")}>
      <SliderHome/>
      <InfoCourses />
      <CoursesHome />
      <BoxNumber/>
      <Instrutor/>
    </div>
  );
}

export default Home;
