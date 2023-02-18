import classNames from "classnames/bind";
import { useEffect } from "react";
import productApi from "~/api/courseApi";
import TitleLayout from "~/layouts/components/TitleLayout/TitleLayout";
import styles from "./course.module.scss";
import CourseFilter from "./CourseFilter";
import CourseList from "./CourseList";

const cx = classNames.bind(styles);
Course.propTypes = {};

function Course(props) {
  useEffect(() => {
    (async () => {
      const response = await productApi.getAll({ _page: 1, _limit: 10 });
      console.log({ response });
    })();
  }, []);
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
            <div className={cx("col", 's-12',"m-4", "l-2", "filter-wrapper")}>
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
            <div className={cx("col", 's-12',"m-8", "l-10")}>
              <CourseList />
              <CourseList />
              <CourseList />
             
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Course;
