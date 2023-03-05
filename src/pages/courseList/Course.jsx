import classNames from "classnames/bind";

import { Pagination } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import courseApi from "~/api/courseApi";
import otherApi from "~/api/otherApi";
import TitleLayout from "~/layouts/components/TitleLayout/TitleLayout";
import styles from "./course.module.scss";
import CourseFilter from "./CourseFilter";
import CourseList from "./CourseList";
import CourseSkeletonList from "./CourseSkeletonList";
let currentPage = 1;
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
  const [courseList, setcourseList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cateList, setCateList] = useState([]);
  const [levelList, setLevelList] = useState([]);
  const navigate = useNavigate();
  const search = useLocation().search;
  let categoryId = new URLSearchParams(search).get("category");
  let levelParam = new URLSearchParams(search).get("level");

  useEffect(() => {
    (async () => {
      try {
        const { data } = await courseApi.getAll({ _page: 1, _limit: 12 });

        const cateListData = await otherApi.getCategory();
        const levelListData = await otherApi.getLevel();
        setCateList([...cateListData.data]);
        setLevelList([...levelListData.data]);

        if (categoryId === null || levelParam === null) setcourseList(data);
        if (categoryId) {
          const dataFiltered = data.filter((course) => {
            return course.categoryId === categoryId;
          });
          setcourseList(dataFiltered);
        }
        if (levelParam) {
          const dataFiltered = data.filter((course) => {
            return course.level.level === +levelParam;
          });
          setcourseList(dataFiltered);
        }

        setLoading(false);
      } catch (error) {
        console.log("Falied to fetch course list", error);
      }
    })();
  }, [categoryId, levelParam]);

  const handlePagination = (event) => {
    setLoading(true);
    currentPage = event.currentTarget.textContent * 1;
    courseApi
      .getAll({ _page: event.currentTarget.textContent, _limit: 12 })
      .then((res) => {
        setcourseList(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Falied to fetch course list", error);
      });
  };
  const handleCateFilter = (id) => {
    if (id) navigate(`/courseList?category=${id}`);
    else navigate(`/courseList`);
  };
  const handleLevelFilter = (id) => {
    const numId = +id;
    if (numId) navigate(`/courseList?level=${numId}`);
    else navigate(`/courseList`);
  };

  // const pageCount = () => {
  //   if (courseList.length / 12 === 0) return courseList.length / 12;
  //   else return courseList.length / 12 + 1;
  // };

  return (
    <div>
      <section className={cx("container")}>
        <TitleLayout title={"KHÓA HỌC"} />
        <div className={cx("wrapper")}>
          <div className={cx("row")}>
            <div
              className={cx(
                "col",
                "s-12",
                "m-4",
                "ml-2",
                "l-2",
                "filter-wrapper"
              )}
            >
              <div className={cx("nav-filter")}>
                <h3>
                  <i classnamename="fa fa-book-open"></i>Lọc
                </h3>
                <div className={cx("filter-container")}>
                  <h4>Khóa học</h4>
                  <div className={cx("filter-list")}>
                    <ul>
                      <li
                        className={cx("filter-item")}
                        onClick={() => handleCateFilter()}
                      >
                        <CourseFilter labelName={"Tất cả"} />
                      </li>
                      {cateList.map((cateItem) => (
                        <li
                          key={cateItem.categoryId}
                          className={cx("filter-item")}
                          onClick={() => handleCateFilter(cateItem.categoryId)}
                        >
                          <CourseFilter labelName={cateItem.categoryName} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={cx("filter-container")}>
                  <h4>Cấp độ</h4>
                  <div className={cx("filter-list")}>
                    <ul>
                      <li
                        className={cx("filter-item")}
                        onClick={() => handleCateFilter()}
                      >
                        <CourseFilter labelName={"Tất cả"} />
                      </li>

                      {levelList.map((levelItem) => (
                        <li
                          key={levelItem.levelId}
                          className={cx("filter-item")}
                          onClick={() => handleLevelFilter(levelItem.levelId)}
                        >
                          <CourseFilter labelName={levelItem.levelName} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
              <div
                className={cx(
                  "col",
                  "s-12",
                  "m-8",
                  "ml-10",
                  "l-10",
                  "course-list-item"
                )}
              >
                {loading ? (
                  <CourseSkeletonList length={12} />
                ) : (
                  <CourseList courseList={courseList} />
                )}
                {courseList.length === 0 && (
              <div
                className={cx(
               
                  "notice"
                )}
              >
                <p>
                  {" "}
                  <span>Chưa có khóa học nào</span>
                </p>
              </div>
            )}
              </div>
            
          </div>
        </div>
        {courseList.length>=12 && (
          <div className={cx("pagination")}>
            <ThemeProvider theme={theme}>
              <Pagination
                onChange={handlePagination}
                color="primary"
                count={2}
                page={currentPage}
                size="large"
                hideNextButton={true}
                hidePrevButton={true}
              />
            </ThemeProvider>
          </div>
        )}
      </section>
    </div>
  );
}

export default Course;
