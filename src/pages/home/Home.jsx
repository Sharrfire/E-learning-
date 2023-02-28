import classNames from "classnames/bind";
import InfoCourses from "./infoCourses/InfoCourses";
import styles from "./home.module.scss";
import CoursesHome from "./coursesHome/CoursesHome";
import SliderHome from "./sliderHome/SliderHome";
import BoxNumber from "./boxNumber/BoxNumber";
import Instrutor from "./instrutor/Instrutor";
import ScrollTotop from './scrollToTop/ScrollToTop';
import { useEffect, useState } from "react";
import courseApi from "~/api/courseApi";

const cx = classNames.bind(styles);

function Home() {
  const [courseList, setcourseList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await courseApi.getAll({ _page: 1, _limit: 12 });
        setcourseList(data);
      } catch (error) {
        console.log("Falied to fetch course list", error);
      }
    })();
  }, []);
  return (
    <div className={cx("container")}>
      <ScrollTotop/>
      <SliderHome/>
      <InfoCourses />
      <CoursesHome courseList={courseList} />
      <BoxNumber/>
      <Instrutor/>
    </div>
  );
}

export default Home;
