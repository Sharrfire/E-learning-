import "./personalInfo.css";
import styles from "./personalInfo.module.scss";
import MyCourseList from "./MyCourseList";
import { Progress, Tabs } from "antd";
import classNames from "classnames/bind";
import crown from "~/assets/vendor/crown.svg";
import avatar from "~/assets/vendor/fallbackAvatar.jpg";
import { Modal } from "antd";
import { useState } from "react";
import { USER_LOGIN } from "~/api/userLocal";
import FormEditUser from "./FormEditUser";
import { FaAngleUp } from "react-icons/fa";
import { NavLink } from "react-router-dom";


const cx = classNames.bind(styles);

export default function PersonalInfo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [courseList, setCourseList] = useState([]);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  // const user = useSelector((state) => {
  //   return state.userSlice.userInfor;
  // });
  const user = JSON.parse(localStorage.getItem(USER_LOGIN));
  const items = [
    {
      key: "1",
      label: `Thông tin cá nhân`,
      children: (
        <div className={cx("user_infor")}>
          <div className={cx("row")}>
            <div className={cx("col", "c-7")}>
              <div>
                <p>
                  Họ và Tên:
                  <span>{user.hoTen}</span>
                </p>
                <p>
                  Email:
                  <span>{user.email}</span>
                </p>
                <p>
                  Số điện thoại:
                  <span>{user.soDT}</span>
                </p>
              </div>
            </div>
            <div className={cx("col", "c-5")}>
              <div>
                <p>
                  Tài khoản:
                  <span>{user.taiKhoan}</span>
                </p>
                <p>
                  Nhóm:
                  <span>{user.maNhom}</span>
                </p>
                <p>
                  Đối tượng:
                  <span>Học viên</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: `Khóa học của tôi`,
      children: (
        <>
          <p
            style={{
              padding: "10px 0 ",
              fontSize: "1.6rem",
              fontWeight: "500",
            }}
          >
            <span>Các khóa học đã đăng ký</span>
          </p>
          <div>
            <MyCourseList courseList={courseList}/>
            <MyCourseList courseList={courseList}/>
          </div>
        </>
      ),
    },
  ];
  return (
    <div  className={cx("personalInfo")}>
      <div className={cx("back-to-home")}>
        <NavLink to="/">
          <button className={cx("btn_back-to-home")}>
            <FaAngleUp className={cx("btn_icon")} />
            Home
          </button>
        </NavLink>
      </div>
      <div className={cx("content")}>
        <div className={cx("profile_banner")}>
          <div className={cx("profile_user")}>
            <div className={cx("profile_user-avatar")}>
              <div className={cx("avatar_user")}>
                <img className={cx("avatar")} src={avatar} alt="" />
                <img className={cx("crown")} src={crown} alt="" />
              </div>
            </div>
            <div className={cx("profile_user-name")}>
              <span>{user.hoTen}</span>
            </div>
          </div>
          <div onClick={showModal} className={cx("bg_btn-change")}>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="camera"
              className="svg-inline--fa fa-camera FallbackBackground_icon-fix__xV4i5 FallbackBackground_icon__EaUPW"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M194.6 32H317.4C338.1 32 356.4 45.22 362.9 64.82L373.3 96H448C483.3 96 512 124.7 512 160V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V160C0 124.7 28.65 96 64 96H138.7L149.1 64.82C155.6 45.22 173.9 32 194.6 32H194.6zM256 384C309 384 352 341 352 288C352 234.1 309 192 256 192C202.1 192 160 234.1 160 288C160 341 202.1 384 256 384z"
              ></path>
            </svg>
            Chỉnh sửa thông tin
          </div>
          <Modal footer open={isModalOpen} onCancel={handleCancel}>
            <FormEditUser />
          </Modal>
        </div>
        <div className={cx("profile_container")}>
          <div>
            <Tabs
              style={{
                padding: "0 10px",
                fontSize: "1.8rem",
                fontWeight: "700",
              }}
              type="card"
              size="large"
              defaultActiveKey="1"
              items={items}
            />
          </div>
          <div className={cx("userInfoBot")}>
            <h4>Kĩ năng của tôi</h4>
            <div className={cx("row")}>
              <div className={cx("col", "c-8","s-12", "skillAll", "m-6")}>
                <div className={cx("mySkill", "skillBtnHtml")}>
                  <button className={cx("skillBtnCustom")}>Html</button>
                  <div className={cx("progress")}></div>
                  <Progress
                    className=""
                    percent={100}
                    status="active"
                    size="large"
                    strokeColor="#f9ca9a"
                    trailColor="#cccccc"
                  />
                </div>
                <div className={cx("mySkill", "skillBtnCss")}>
                  <button className={cx("skillBtnCustom")}>Css</button>
                  <div className={cx("progress")}></div>
                  <Progress
                    percent={75}
                    status="active"
                    size="large"
                    strokeColor="#f8bebb"
                    trailColor="#cccccc"
                  />
                </div>
                <div className={cx("mySkill", "skillBtnJs")}>
                  <button className={cx("skillBtnCustom")}>js</button>
                  <div className={cx("progress")}></div>
                  <Progress
                    percent={75}
                    status="active"
                    size="large"
                    strokeColor="#f0cc6b"
                    trailColor="#cccccc"
                  />
                </div>
                <div className={cx("mySkill", "skillBtnReact")}>
                  <button className={cx("skillBtnCustom")}>react</button>
                  <div className={cx("progress")}></div>
                  <Progress
                    percent={75}
                    status="active"
                    size="large"
                    strokeColor="#113d3c"
                    trailColor="#cccccc"
                  />
                </div>
              </div>
              <div className={cx("col", "c-4", "m-6","s-12")}>
                <div className={cx("study_time")}>
                  <div className={cx("study_time-item")}>
                    <i className="fas fa-user-clock"></i>
                    <div>
                      <h6>Giờ học</h6>
                      <p>80</p>
                    </div>
                  </div>
                  <div className={cx("study_time-item")}>
                    <i className="fas fa-layer-group"></i>
                    <div>
                      <h6>Điểm tổng</h6>
                      <p>80</p>
                    </div>
                  </div>
                  <div className={cx("study_time-item")}>
                    <i className="fas fa-swatchbook"></i>
                    <div>
                      <h6>Buổi học</h6>
                      <p>40</p>
                    </div>
                  </div>
                  <div className={cx("study_time-item")}>
                    <i className="fas fa-signal"></i>
                    <div>
                      <h6>Cấp độ</h6>
                      <p>Trung cấp</p>
                    </div>
                  </div>
                  <div className={cx("study_time-item")}>
                    <i className="fas fa-graduation-cap"></i>
                    <div>
                      <h6>Học lực</h6>
                      <p>Khá</p>
                    </div>
                  </div>
                  <div className={cx("study_time-item")}>
                    <i className="fas fa-book"></i>
                    <div>
                      <h6>Bài tập</h6>
                      <p>100</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
