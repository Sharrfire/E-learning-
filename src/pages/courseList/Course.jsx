import { Pagination } from "@mui/material";
import classNames from "classnames/bind";

import TitleLayout from "~/layouts/components/TitleLayout/TitleLayout";
import styles from "./course.module.scss";
import CourseFilter from "./CourseFilter";
import CourseList from "./CourseList";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#41b291",
      contrastText: "#ffffff",
    },
  },
  pagination: {
    display: "flex",
    fontSize: "2rem",
  },
});
const cx = classNames.bind(styles);
Course.propTypes = {};

function Course(props) {

  const star = <i className="fa fa-star"></i>;
  const star2 = (
    <>
      {star}
      {star}
    </>
  );
  const star3 = (
    <>
      {star2}
      {star}
    </>
  );
  const star4 = (
    <>
      {star2}
      {star2}
    </>
  );
  const star5 = (
    <>
      {star3}
      {star2}
    </>
  );
  return (
    <div>
      <section className={cx("container")}>
        <TitleLayout title={"KHÓA HỌC"} />
        <div className={cx("wrapper")}>
          <div className={cx("row")}>
            <div className={cx("col", "s-12", "m-4", "l-2", "filter-wrapper")}>
              <div className={cx("nav-filter")}>
                <h3>
                  <i classnamename="fa fa-book-open"></i>Lọc
                </h3>
                <div className={cx("filter-container")}>
                  <h4>Khóa học</h4>
                  <div className={cx("filter-list")}>
                    <ul>
                      <li>
                        <CourseFilter labelName={"Tất cả"} />
                      </li>
                      <li>
                        <CourseFilter labelName={"Front End"} />
                      </li>
                      <li>
                        <CourseFilter labelName={" Back End"} />
                      </li>
                      <li>
                        <CourseFilter labelName={"HTML/CSS"} />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={cx("filter-container")}>
                  <h4>Cấp độ</h4>
                  <div className={cx("filter-list")}>
                    <ul>
                      <li>
                        <CourseFilter labelName={"Tất cả"} />
                      </li>
                      <li>
                        <CourseFilter labelName={"Nâng cao"} />
                      </li>
                      <li>
                        <CourseFilter labelName={"Trung bình"} />
                      </li>
                      <li>
                        <CourseFilter labelName={"Cơ bản"} />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={cx("filter-container")}>
                  <h4>Đánh giá</h4>
                  <div className={cx("filter-list")}>
                    <ul>
                      <li>
                        <CourseFilter labelName={star} />
                      </li>
                      <li>
                        <CourseFilter labelName={star2} />
                      </li>
                      <li>
                        <CourseFilter labelName={star3} />
                      </li>
                      <li>
                        <CourseFilter labelName={star4} />
                      </li>
                      <li>
                        <CourseFilter labelName={star5} />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={cx("col", "s-12", "m-8", "l-10", "course-list-item")}
            >
              <CourseList />
            </div>
          </div>
        </div>
        <div className={cx('pagination')}>
          <ThemeProvider theme={theme}>
            <Pagination color="primary" count={3} page={2} size="large" />
          </ThemeProvider>
        </div>
      </section>
    </div>
  );
}

export default Course;
