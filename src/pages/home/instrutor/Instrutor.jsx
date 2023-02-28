import classNames from "classnames/bind";
import styles from "./instrutor.module.scss";
import { Carousel } from "antd";
// const contentStyle = {
//   padding:"24px",
//   margin: "12px",
//   height: "300px",
//   color: "#000",
//   textAlign: "center",
//   backGround:"#000",
// };
const cx = classNames.bind(styles);
export default function Instrutor() {
  const instrutorList2 = [
    {
      name: "IcarDi MenBor",
      role: "Fullstack",
      rate: "4.9",
      img: "https://demo2.cybersoft.edu.vn/static/media/instrutor6.64041dca.jpg",
    },
    {
      name: "VueLo Gadi",
      role: "Phân tích",
      rate: "4.9",
      img: "https://demo2.cybersoft.edu.vn/static/media/instrutor9.504ea6c5.jpg",
    },
    {
      name: "David Ngô Savani",
      role: "Frontend",
      rate: "4.9",
      img: "https://demo2.cybersoft.edu.vn/static/media/instrutor11.0387fe65.jpg",
    },
    {
      name: "IcarDi MenBor",
      role: "Fullstack",
      rate: "4.9",
      img: "https://demo2.cybersoft.edu.vn/static/media/instrutor6.64041dca.jpg",
    },
    {
      name: "VueLo Gadi",
      role: "Phân tích",
      rate: "4.9",
      img: "https://demo2.cybersoft.edu.vn/static/media/instrutor9.504ea6c5.jpg",
    },
    {
      name: "David Ngô Savani",
      role: "Frontend",
      rate: "4.9",
      img: "https://demo2.cybersoft.edu.vn/static/media/instrutor11.0387fe65.jpg",
    },
  ];
  const instrutorList1 = [
    {
      name: "IcarDi MenBor",
      role: "Fullstack",
      rate: "4.9",
      img: "https://demo2.cybersoft.edu.vn/static/media/instrutor6.64041dca.jpg",
    },
    {
      name: "VueLo Gadi",
      role: "Phân tích",
      rate: "4.9",
      img: "https://demo2.cybersoft.edu.vn/static/media/instrutor9.504ea6c5.jpg",
    },
    {
      name: "David Ngô Savani",
      role: "Frontend",
      rate: "4.9",
      img: "https://demo2.cybersoft.edu.vn/static/media/instrutor11.0387fe65.jpg",
    },
    {
      name: "IcarDi MenBor",
      role: "Fullstack",
      rate: "4.9",
      img: "https://demo2.cybersoft.edu.vn/static/media/instrutor6.64041dca.jpg",
    },
    {
      name: "VueLo Gadi",
      role: "Phân tích",
      rate: "4.9",
      img: "https://demo2.cybersoft.edu.vn/static/media/instrutor9.504ea6c5.jpg",
    },
    {
      name: "David Ngô Savani",
      role: "Frontend",
      rate: "4.9",
      img: "https://demo2.cybersoft.edu.vn/static/media/instrutor11.0387fe65.jpg",
    },
  ];
 
  return (
    <>
      <div className={cx("heading")}>
        <h3>
          <a href="#!">Giảng viên hàng đầu</a>
        </h3>
      </div>
      <div className={cx("wrapper")}>
        <div className={cx("item-container")}>
          <Carousel autoplay infinite autoplaySpeed={3000}>
            <div>
              <div>
                <div id="itemList" className={cx("row", "item-list")}>
                  {instrutorList1.map((instructor, index) => (
                    <div
                      key={index}
                      className={cx("col", "s-12", "m-6", "ml-2", "l-2", "item")}
                    >
                      <div className={cx("item-content")}>
                        <img src={instructor.img} alt="i1" />
                        <h6>{instructor.name}</h6>
                        <div className={cx("role")}>
                          <p>Chuyên gia lĩnh vực</p>
                          <p>{instructor.role}</p>
                        </div>
                        <p className={cx("review-mentor")}>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <span className="textStar"> {instructor.rate}</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
            <div>
                <div id="itemList" className={cx("row", "item-list")}>
                  {instrutorList2.map((instructor, index) => (
                    <div
                      key={index}
                      className={cx("col", "s-12", "m-6", "ml-2", "l-2", "item")}
                    >
                      <div className={cx("item-content")}>
                        <img src={instructor.img} alt="i1" />
                        <h6>{instructor.name}</h6>
                        <div className={cx("role")}>
                          <p>Chuyên gia lĩnh vực</p>
                          <p>{instructor.role}</p>
                        </div>
                        <p className={cx("review-mentor")}>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <span className="textStar"> {instructor.rate}</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Carousel>
        </div>
        {/* {instrutorList.length !== 0 && (
          <div className={cx("slider-dots")}>
            <span className={cx("dot", "active")}></span>
            <span className={cx("dot")}></span>
          </div>
        )} */}
      </div>
    </>
  );
}
