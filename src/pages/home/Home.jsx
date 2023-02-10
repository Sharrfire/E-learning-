import classNames from "classnames/bind";
import InfoCourses from "./InfoCourses";
import styles from "./home.module.scss";
Home.propTypes = {};
const cx = classNames.bind(styles);

function Home() {
  return <div className={ cx('container')}>

    <InfoCourses/>
  </div>;
}

export default Home;



