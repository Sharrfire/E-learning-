import React from "react";
import classNames from "classnames/bind";
import styles from "./courseDetail.module.scss";
import avatar from"~/assets/vendor/instrutor5.2e4bd1e6.jpg"
const cx = classNames.bind(styles);
CourseDetail.propTypes = {};

function CourseDetail(props) {
  return (
    <section className={cx("container")}>
      <div className={cx("title")}>
        <h3>THÔNG TIN KHÓA HỌC</h3>
      </div>
      <div className={cx("content")} style={{ height: "2000px" }}>
        <div className={cx("row")}>
          <div className={cx("col",'main-content')}>
            <div className={cx("title-detail")}>
              <h4>LẬP TRÌNH FRONT-END CHUYÊN NGHIỆP</h4>
            </div>{" "}
            <div className={cx("header-detail")}>
              <div>
                <div className={cx("detail-course-info")}>
                  <div>
                    <img src={avatar} alt="" />
                  </div>
                  <div class="instrutorTitle">
                    <p>Giảng viên</p>
                    <p>Robert Ngô Ngọc</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={cx("col")}></div>
        </div>
      </div>
    </section>
  );
}

export default CourseDetail;
