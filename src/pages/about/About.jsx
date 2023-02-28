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
          <p className={cx("slider-title")}>E learning học là vui</p>
          <h6>Cùng nhau khám phá nhưng điều mới mẻ</h6>
          <p>Học đi đôi với hành</p>
        </div>
      </div>
      <div className={cx("item")}>
        <div className={cx("row")}>
          <div className={cx("col", "s-12", "m-12", "c-6",)}>
            <h6>E learning ?</h6>
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
          <div className={cx("col", "c-6", "m-12", "s-12", "background")}>
            <img src={bg1} alt="" />
          </div>
        </div>
      </div>
      <div className={cx("item")}>
        <div className={cx("row")}>
          <div className={cx("col", "c-6", "m-12", "s-12", "background")}>
            <img src={bg2} alt="" />
          </div>

          <div className={cx("col", "c-6", "m-12", "s-12")}>
            <h6>TẦM NHÌN </h6>
            <h5>Đào tạo lập trình chuyên sâu</h5>
            <p>
              Trở thành hệ thống đào tạo lập trình chuyên sâu theo nghề hàng đầu
              khu vực, cung cấp nhân lực có tay nghề cao, chuyên môn sâu cho sự
              phát triển công nghiệp phần mềm trong thời đại công nghệ số hiện
              nay, góp phần giúp sự phát triển của xã hội, đưa Việt Nam thành
              cường quốc về phát triển phần mềm.giúp người học phát triển cả tư
              duy, phân tích, chuyên sâu nghề nghiệp, học tập suốt đời, sẵn sàng
              đáp ứng mọi nhu cầu của doanh nghiệp.
            </p>
          </div>
        </div>
      </div>
      <div className={cx("item")}>
        <div className={cx("row")}>
          <div className={cx("col", "c-6", "m-12", "s-12")}>
            <h6>CHƯƠNG TRÌNH HỌC </h6>
            <h5>Hệ thống học hàng đầu</h5>
            <p>
              Giảng viên đều là các chuyên viên thiết kế đồ họa và giảng viên
              của các trường đại học danh tiếng trong thành phố: Đại học CNTT,
              KHTN, Bách Khoa,…Trang thiết bị phục vụ học tập đầy đủ, phòng học
              máy lạnh, màn hình LCD, máy cấu hình mạnh, mỗi học viên thực hành
              trên một máy riêng.100% các buổi học đều là thực hành trên máy
              tính. Đào tạo với tiêu chí: “học để làm được việc”, mang lại cho
              học viên những kiến thức hữu ích nhất, sát với thực tế nhất.
            </p>
          </div>
          <div className={cx("col", "c-6", "m-12", "s-12", "background")}>
            <img src={bg3} alt="" />
          </div>
        </div>
      </div>
      <div className={cx("item")}>
        <div className={cx("row")}>
          <div className={cx("col", "c-6", "m-12", "s-12", "background")}>
            <img src={bg4} alt="" />
          </div>
          <div className={cx("col", "c-6", "m-12", "s-12")}>
            <h6>SỨ MỆNH</h6>
            <h5>Phương pháp đào tạo hiện đại</h5>
            <p>
              Sử dụng các phương pháp đào tạo tiên tiến và hiện đại trên nền
              tảng công nghệ giáo dục, kết hợp phương pháp truyền thống, phương
              pháp trực tuyến, lớp học đảo ngược và học tập dựa trên dự án thực
              tế, phối hợp giữa đội ngũ training nhiều kinh nghiệm và yêu cầu từ
              các công ty, doanh nghiệp. Qua đó, V learning giúp người học phát
              triển cả tư duy, phân tích, chuyên sâu nghề nghiệp, học tập suốt
              đời, sẵn sàng đáp ứng mọi nhu cầu của doanh nghiệp.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
