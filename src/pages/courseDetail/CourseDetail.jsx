import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";
import avatar from "~/assets/vendor/instrutor5.2e4bd1e6.jpg";
import { halfStar, star } from "~/constants/rate";
import styles from "./courseDetail.module.scss";
import CourseSection from "./CourseSection";
const cx = classNames.bind(styles);
CourseDetail.propTypes = {};

function CourseDetail(props) {
  let navigate = useNavigate();
  const handleLogin = () => {
    let path = `/login`;
    navigate(path);
  };
  const sectionNameList = [
    {
      id: "s1",
      sectionName: "Mục 1: Giới thiệu",
      lessonList: [
        {
          id: "s1-1",
          name: "Các khái niệm về React Component",
          duration: "14:35",
        },
        {
          id: "s1-2",
          name: "Thiết lập môi trường cho Windows",
          duration: "14:35",
        },
        {
          id: "s1-3",
          name: "Tạo ứng dụng React - React-Scripts",
          duration: "14:35",
        },
        {
          id: "s1-4",
          name: "Ghi chú nhanh về dấu ngoặc kép cho string interpolation",
          duration: "14:35",
        },
      ],
    },
    {
      id: "s2",
      sectionName: "MỤC 2: KIẾN THỨC CĂN BẢN",
      lessonList: [
        {
          id: "s2-1",
          name: "Trang chủ và thành phần thư mục",
          duration: "14:35",
        },
        {
          id: "s2-2",
          name: "Hướng dẫn khóa học + Liên kết Github",
          duration: "14:35",
        },
        {
          id: "s2-3",
          name: "Trang chủ thương mại điện tử + thiết lập SASS",
          duration: "14:35",
        },
        {
          id: "s2-4",
          name: "Tệp CSS và SCSS",
          duration: "14:35",
        },
        {
          id: "s2-5",
          name: "React 17: Cập nhật các gói + Phiên bản React mới nhất",
          duration: "14:35",
        },
      ],
    },
    {
      id: "s3",
      sectionName: "MỤC 3: KIẾN THỨC CHUYÊN SÂU",
      lessonList: [
        {
          id: "s3-1",
          name: "connect() and mapStateToProps",
          duration: "14:35",
        },
        {
          id: "s3-2",
          name: "Trạng thái thư mục vào Redux",
          duration: "14:35",
        },
        {
          id: "s3-3",
          name: "Tạo ứng dụng React - React-Scripts",
          duration: "14:35",
        },
      ],
    },
  ];
  return (
    <section className={cx("container")}>
      <div className={cx("title")}>
        <h3>THÔNG TIN KHÓA HỌC</h3>
      </div>
      <div className={cx("wrapper")}>
        <div className={cx("row")}>
          <div className={cx("col", "s-12", "m-12", "l-8", "main-content")}>
            <div className={cx("title-detail")}>
              <h4>LẬP TRÌNH FRONT-END CHUYÊN NGHIỆP</h4>
            </div>{" "}
            <div className={cx("header-detail")}>
              <div className={cx("col", "c-4", "detail-course-info")}>
                <div>
                  <img src={avatar} alt="" />
                </div>
                <div className={cx("instrutor-title")}>
                  <p>Giảng viên</p>
                  <p className={cx("name")}>Robert Ngô Ngọc</p>
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
                  <p className={cx("name")}>Lập trình Backend</p>
                </div>
              </div>
              <div className={cx("col", "c-4", "detail-course-info")}>
                <div className={cx("review-detail")}>
                  <span>
                    {star}
                    {star}
                    {star}
                    {star}
                    {halfStar}
                    4.5
                  </span>
                  <p>100 đánh giá</p>
                </div>
              </div>
            </div>
            <p className={cx("text-desc")}>
              React.js là thư viện JavaScript phổ biến nhất mà bạn có thể sử
              dụng và tìm hiểu ngày nay để xây dựng giao diện người dùng hiện
              đại, phản ứng cho web.Khóa học này dạy bạn về React chuyên sâu, từ
              cơ bản, từng bước đi sâu vào tất cả các kiến ​​thức cơ bản cốt
              lõi, khám phá rất nhiều ví dụ và cũng giới thiệu cho bạn các khái
              niệm nâng cao.Bạn sẽ nhận được tất cả lý thuyết, hàng tấn ví dụ và
              bản trình diễn, bài tập và bài tập cũng như vô số kiến ​​thức quan
              trọng bị hầu hết các nguồn khác bỏ qua - sau cùng, có một lý do
              tại sao khóa học này lại rất lớn! Và trong trường hợp bạn thậm chí
              không biết tại sao bạn lại muốn học React và bạn chỉ ở đây vì một
              số quảng cáo hoặc "thuật toán" - đừng lo lắng: ReactJS là một công
              nghệ quan trọng với tư cách là một nhà phát triển web và trong
              khóa học này, tôi sẽ cũng giải thích TẠI SAO điều đó lại quan
              trọng!
            </p>
            <div className={cx("course-learn")}>
              <h6>Những gì bạn sẽ học</h6>
              <div className={cx("row")}>
                {" "}
                <div className={cx("col", "c-6")}>
                  <ul>
                    <li>
                      Xây dựng các ứng dụng web mạnh mẽ, nhanh chóng, thân thiện
                      với người dùng và phản ứng nhanh
                    </li>
                    <li>
                      Đăng ký công việc được trả lương cao hoặc làm freelancer
                      trong một trong những lĩnh vực được yêu cầu nhiều nhất mà
                      bạn có thể tìm thấy trong web dev ngay bây giờ
                    </li>
                    <li>
                      Cung cấp trải nghiệm người dùng tuyệt vời bằng cách tận
                      dụng sức mạnh của JavaScript một cách dễ dàng
                    </li>
                    <li>Tìm hiểu tất cả về React Hooks và React Components</li>
                  </ul>
                </div>
                <div className={cx("col", "c-6")}>
                  <ul>
                    <li>
                      Thông thạo chuỗi công cụ hỗ trợ React, bao gồm cú pháp
                      Javascript NPM, Webpack, Babel và ES6 / ES2015
                    </li>
                    <li>
                      Nhận ra sức mạnh của việc xây dựng các thành phần có thể
                      kết hợp
                    </li>
                    <li>
                      Hãy là kỹ sư giải thích cách hoạt động của Redux cho mọi
                      người, bởi vì bạn biết rất rõ các nguyên tắc cơ bản
                    </li>
                    <li>
                      Nắm vững các khái niệm cơ bản đằng sau việc cấu trúc các
                      ứng dụng Redux
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={cx("course-content")}>
              <h6>Nội dung khóa học</h6>
              <div className={cx("course-detail-item")}>
                {sectionNameList.map((sessionName) => (
                  <div
                    className={cx("course-detail-content")}
                    key={sessionName.id}
                  >
                    <CourseSection
                      sectionName={sessionName.sectionName}
                      lessonList={sessionName.lessonList}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={cx("col", "s-12", "m-12", "l-4")}>
            <div className={cx("sidebar-course-detail")}>
              <img
                src="https://codersera.com/blog/wp-content/uploads/2019/12/Learn-Reactjs-672x372.jpeg"
                alt=""
              />
              <div className={cx("course-price")}>
                <div className={cx("course-price-normal")}>
                  <span>
                    500.000<sup>đ</sup>
                  </span>
                </div>
                <div className={cx("course-price-sale")}>
                  <span>
                    400.000<sup>đ</sup>
                  </span>
                </div>
              </div>
              <div className={cx("course-buy-btn")}>
                <button onClick={handleLogin}>Đăng ký</button>
              </div>
              <div className={cx("detail-content")}>
                <ul>
                  <li>
                    <p>Ghi danh:</p>
                    <p>
                      <span> 10 học viên</span>
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
                      <span> Người mới bắt đầu</span>
                    </p>
                  </li>
                </ul>
              </div>
              <form action="" className={cx("form-coupon")}>
                <input type="text" placeholder="Nhập mã" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CourseDetail;
