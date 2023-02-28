import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import courseApi from "~/api/courseApi";
import { star } from "~/constants/rate";
import Title from "~/layouts/components/TitleLayout/TitleLayout";
import styles from "./courseDetail.module.scss";
import CourseSection from "./CourseSection";

const cx = classNames.bind(styles);
CourseDetail.propTypes = {};

function CourseDetail(props) {
  let navigate = useNavigate();
  const [courseDetail, setCourseDetail] = useState({
    author: {
      avatar: "",
      name: "",
    },
    description: "",
    id: 2,
    image: "",
    image_url: "",
    level: {
      id: 1,
      level: 1,
      title: "",
    },
    old_price: "",
    price: "",
    rate: "",
    rateAmount: "",
    slug: "",
    students_count: "",
    title: "",
    tracks: [],
    will_learns: [],
  });
  let { courseId } = useParams();
  const userName = localStorage.getItem("USER_LOGIN");

  useEffect(() => {
    (async () => {
      const { data } = await courseApi.get(courseId);
      setCourseDetail(data);
    })();
  }, [courseId]);

  const handleLogin = () => {
    userName ? navigate(`/personalInfo`) : navigate(`/login`);
  };

  return (
    <>
      <section className={cx("container")}>
        <Title title={"THÔNG TIN KHÓA HỌC"} />
        <div className={cx("wrapper")}>
          <div className={cx("row")}>
            <div className={cx("col", "s-12", "m-12","ml-8","l-8", "main-content")}>
              <div className={cx("title-detail")}>
                {/* <h4>LẬP TRÌNH FRONT-END CHUYÊN NGHIỆP</h4> */}
                <h4>{courseDetail.title}</h4>
              </div>{" "}
              <div className={cx("header-detail")}>
                <div className={cx("col", "c-4", "detail-course-info")}>
                  <div>
                    <img src={courseDetail.author.avatar || ""} alt="" />
                  </div>
                  <div className={cx("instrutor-title")}>
                    <p>Giảng viên</p>
                    <p className={cx("name")}>
                      {courseDetail.author.name || ""}
                    </p>
                  </div>
                </div>
                <div className={cx("col", "c-4", "detail-course-info")}>
                  <div>
                    <img
                      className={cx("graduation-cap")}
                      src="data:image/png;base64,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"
                      alt="graduated"
                    />
                  </div>
                  <div className={cx("instrutor-title")}>
                    <p>Lĩnh vực</p>
                    <p className={cx("name")}>Lập trình {courseDetail.categoryId} </p>
                  </div>
                </div>
                <div className={cx("col", "c-4", "detail-course-info")}>
                  <div className={cx("review-detail")}>
                    <span>
                      {courseDetail.rate }                    </span>
                      {star}
                 
                    <p> {courseDetail.rateAmount } đánh giá</p>
                  </div>
                </div>
              </div>
              <p className={cx("text-desc")}>{courseDetail.description}</p>
              <div className={cx("course-learn")}>
                <h6>Những gì bạn sẽ học</h6>
                <div className={cx("row")}>
                  <ul className={cx("col", "c-12")}>
                    {courseDetail.will_learns.map((learn) => (
                      <li key={learn.id}>{learn.content} </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={cx("course-content")}>
                <h6>Nội dung khóa học</h6>
                <div className={cx("course-detail-item")}>
                  <div className={cx("course-detail-content")}>
                    <CourseSection tracks={courseDetail.tracks} />
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("col", "s-12", "m-12","ml-4", "l-4")}>
              <div className={cx("sidebar-course-detail")}>
                <img src={courseDetail.image_url} alt={courseDetail.slug} />
                <div className={cx("course-price")}>
                  <div className={cx("course-price-normal")}>
                    <span>
                      {new Intl.NumberFormat("de-DE").format(
                        courseDetail.old_price
                      )}
                      <sup>đ</sup>
                    </span>
                  </div>
                  <div className={cx("course-price-sale")}>
                    <span>
                      {new Intl.NumberFormat("de-DE").format(
                        courseDetail.price
                      )}
                      <sup>đ</sup>
                    </span>
                  </div>
                </div>
                <div className={cx("course-buy-btn")}>
                  {/* {userName ? (
                    <button onClick={handleLogin}>Học</button>
                  ) : (
                    <button onClick={handleLogin}>Đăng ký</button>
                  )} */}
                                      <button onClick={handleLogin}>Đăng ký</button>

                </div>
                <div className={cx("detail-content")}>
                  <ul>
                    <li>
                      <p>Ghi danh:</p>
                      <p>
                        <span> {courseDetail.students_count} học viên</span>
                      </p>
                    </li>
                    <li>
                      <p> Thời gian:</p>

                      <p>
                        <span> 18 giờ</span>
                      </p>
                    </li>
                    <li>
                      <p>Bài học:</p>
                      <p>
                        <span> 10</span>
                      </p>
                    </li>
                    <li>
                      <p>Video:</p>
                      <p>
                        <span> 14</span>
                      </p>
                    </li>
                    <li>
                      <p>Trình độ:</p>
                      <p>
                        <span> {courseDetail.level.title}</span>
                      </p>
                    </li>
                  </ul>
                </div>
           
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CourseDetail;
