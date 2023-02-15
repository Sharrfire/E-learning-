import classNames from "classnames/bind";
import styles from "./about.module.scss";
import bg1 from "~/assets/vendor/hero-flex.553afb64.png";
import bg2 from "~/assets/vendor/education-hero.62147e5c.png";
import bg3 from "~/assets/vendor/olstudy.96378086.png";
import bg4 from "~/assets/vendor/students.fc2d9ab7.png";
const cx = classNames.bind(styles);
About.propTypes = {};
function About(props) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("slider")}>
        <div className={cx("slider-content")}>
          <p className={cx("slider-title")}>V learning học là vui</p>
          <h6>Cùng nhau khám phá nhưng điều mới mẻ</h6>
          <p>Học đi đôi với hành</p>
        </div>
      </div>
      <div className={cx("item")}>
        <div className={cx("row")}>
          <div className={cx("col", "c-6")}>
            <h6>V learning ?</h6>
            <h5>Nơi hội tụ kiến thức</h5>
            <p>
              Đây là nền tảng giảng dạy và học tập trực tuyến được xây dựng để
              hỗ trợ phát triển giáo dục trong thời đại công nghiệp 4.0, được
              xây dựng dựa trên cơ sở quan sát toàn bộ các nhu cầu cần thiết của
              một lớp học offline. Từ đó đáp ứng và đảm bảo cung cấp các công cụ
              toàn diện, dễ sử dụng cho giáo viên và học sinh, giúp tạo nên một
              lớp học trực tuyến thú vị và hấp dẫn.
            </p>
          </div>
          <div className={cx("col", "c-6", "background")}>
            <img src={bg1} alt="" />
          </div>
        </div>
      </div>
      <div className={cx("item")}>
        <div className={cx("row")}>
          <div className={cx("col", "c-6", "background")}>
            <img src={bg2} alt="" />
          </div>
          <div className={cx("col", "c-6")}>
            <h6>V learning ?</h6>
            <h5>Nơi hội tụ kiến thức</h5>
            <p>
              Đây là nền tảng giảng dạy và học tập trực tuyến được xây dựng để
              hỗ trợ phát triển giáo dục trong thời đại công nghiệp 4.0, được
              xây dựng dựa trên cơ sở quan sát toàn bộ các nhu cầu cần thiết của
              một lớp học offline. Từ đó đáp ứng và đảm bảo cung cấp các công cụ
              toàn diện, dễ sử dụng cho giáo viên và học sinh, giúp tạo nên một
              lớp học trực tuyến thú vị và hấp dẫn.
            </p>
          </div>
        </div>
      </div>
      <div className={cx("item")}>
        <div className={cx("row")}>
          <div className={cx("col", "c-6")}>
            <h6>V learning ?</h6>
            <h5>Nơi hội tụ kiến thức</h5>
            <p>
              Đây là nền tảng giảng dạy và học tập trực tuyến được xây dựng để
              hỗ trợ phát triển giáo dục trong thời đại công nghiệp 4.0, được
              xây dựng dựa trên cơ sở quan sát toàn bộ các nhu cầu cần thiết của
              một lớp học offline. Từ đó đáp ứng và đảm bảo cung cấp các công cụ
              toàn diện, dễ sử dụng cho giáo viên và học sinh, giúp tạo nên một
              lớp học trực tuyến thú vị và hấp dẫn.
            </p>
          </div>
          <div className={cx("col", "c-6", "background")}>
            <img src={bg3} alt="" />
          </div>
        </div>
      </div>
      <div className={cx("item")}>
        <div className={cx("row")}>
          <div className={cx("col", "c-6", "background")}>
            <img src={bg4} alt="" />
          </div>
          <div className={cx("col", "c-6")}>
            <h6>V learning ?</h6>
            <h5>Nơi hội tụ kiến thức</h5>
            <p>
              Đây là nền tảng giảng dạy và học tập trực tuyến được xây dựng để
              hỗ trợ phát triển giáo dục trong thời đại công nghiệp 4.0, được
              xây dựng dựa trên cơ sở quan sát toàn bộ các nhu cầu cần thiết của
              một lớp học offline. Từ đó đáp ứng và đảm bảo cung cấp các công cụ
              toàn diện, dễ sử dụng cho giáo viên và học sinh, giúp tạo nên một
              lớp học trực tuyến thú vị và hấp dẫn.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
