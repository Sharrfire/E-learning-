import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import avatar from "~/assets/vendor/avatar2.bb9626e2.png";
import styles from "./coursesHome.module.scss";
import courseApi from "~/api/courseApi";

const cx = classNames.bind(styles);
CoursesHome.propTypes = {};

function CoursesHome(props) {
  // const courseList = [
  //   {
  //     id: "c1",
  //     name: "Lập trình xu thế",
  //     img: "https://elearningnew.cybersoft.edu.vn/hinhanh/lap-trinh-c-.jpg",
  //     desc: "Lập trình hiện đang là xu hướng trên toàn thế giới.Lập trình hiện đang là xu hướng trên toàn thế giới...",
  //     author: { name: "Elon Musk", avatar },
  //     price: { priceDefault: "800.000", priceSale: " 400.000" },
  //     rate: 4.9,
  //     rateAmount: 7840,
  //   },
  //   {
  //     id: "c2",
  //     name: "Lập Trình Di Động Với React Native",
  //     img: "https://elearningnew.cybersoft.edu.vn/hinhanh/lap-trinh-web-django-python-5.jpg",
  //     desc: "Nếu bạn đang làm Front-End, đang làm Back-End, hãy...",
  //     author: { name: "Elon Musk", avatar },
  //     price: { priceDefault: "800.000", priceSale: " 400.000" },
  //     rate: 4.9,
  //     rateAmount: 7840,
  //   },
  //   {
  //     id: "c3",
  //     name: "Lập trình web",
  //     img: "https://elearningnew.cybersoft.edu.vn/hinhanh/lap-trinh-di-dong-voi-react-native_gp01.jpg",
  //     desc: "Django là một trong số những web framework bậc cao",
  //     author: { name: "Elon Musk", avatar },
  //     price: { priceDefault: "800.000", priceSale: " 400.000" },
  //     rate: 4.9,
  //     rateAmount: 7840,
  //   },
  //   {
  //     id: "c4",
  //     name: "Lập trình Angular",
  //     img: "https://elearningnew.cybersoft.edu.vn/hinhanh/lap-trinh-di-dong-voi-react-native_gp01.jpg",
  //     desc: "Angular là framework javascript mạnh mẽ.",
  //     author: { name: "Elon Musk", avatar },
  //     price: { priceDefault: "800.000", priceSale: " 400.000" },
  //     rate: 4.9,
  //     rateAmount: 7840,
  //   },
  //   {
  //     id: "c5",
  //     name: "Lập trình Angular",
  //     img: "https://elearningnew.cybersoft.edu.vn/hinhanh/lap-trinh-di-dong-voi-react-native_gp01.jpg",
  //     desc: "Angular là framework javascript mạnh mẽ.",
  //     author: { name: "Elon Musk", avatar },
  //     price: { priceDefault: "800.000", priceSale: " 400.000" },
  //     rate: 4.9,
  //     rateAmount: 7840,
  //   },
  // ];

  const [courseList, setcourseList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await courseApi.getAll({ _page: 1, _limit: 12 });
        setcourseList(data);
        setLoading(false);
      } catch (error) {
        console.log("Falied to fetch course list", error);
      }
    })();
  }, []);
  const courseListSplice = [...courseList.slice(0, 8)];
  // console.log(courseListSplice);
  let navigate = useNavigate();
  const handleCourseClick = (id) => {
    let path = `/detail/${id}`;
    navigate(path);
  };
  return (
    <>
      <div className={cx("container")}>
        <h6>
          <a href="#!">Khóa học phổ biến</a>
        </h6>
      </div>

      <div className={cx("row", "courses-list")}>
        {courseListSplice.map((course) => (
          <div
            key={course.id}
            className={cx("col", "s-12", "m-6", "l-3", "card-global-res")}
            style={{ display: "flex" }}
          >
            <div
              href=""
              className={cx("card-global")}
              onClick={() => handleCourseClick(course.id)}
            >
              <img src={course.image_url} alt={course.title} />
              <span className={cx("sticker-card", "line-clamp")}>
                {course.title}
              </span>
              <div className={cx("card-body-global")}>
                <div className={cx("card-description")}>
                  <h6 className={cx("line-clamp", "line-2")}>
                    {course.description}
                  </h6>
                </div>

                <div className={cx("title-maker")}>
                  <div className={cx("img-card-footer")}>
                    <img
                      className={cx("avatar")}
                      src={course.author.avatar}
                      alt="avatar"
                    />
                  </div>
                  <span>{course.author.name}</span>
                </div>
              </div>
              <div className={cx("card-footer")}>
                <div>
                  <p>
                    {new Intl.NumberFormat("de-DE").format(course.old_price)}
                    <sup>đ</sup>
                  </p>
                  <p>
                    {new Intl.NumberFormat("de-DE").format(course.price)}
                    <sup>đ</sup>
                  </p>
                </div>
                <div>
                  <i className={cx("fa", " fa-star")}></i>
                  <span className={cx("text-star")}>{course.rate}</span>
                  <span className={cx("color-card-title")}>
                    ({course.rateAmount})
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CoursesHome;
