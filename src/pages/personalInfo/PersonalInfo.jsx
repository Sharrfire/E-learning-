import React from "react";
import styles from "./personalInfo.module.scss";
import classNames from "classnames/bind";
import avatar from "~/assets/vendor/fallbackAvatar.jpg";
import crown from "~/assets/vendor/crown.svg";
import { Tabs } from "antd";
import { useSelector } from "react-redux";
import "./personalInfo.css";
const cx = classNames.bind(styles);

export default function PersonalInfo() {
  const user = useSelector((state) => {
    return state.userSlice.userInfor;
  });
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
                  Email:
                  <span>{user.email}</span>
                </p>
                <p>
                  Họ và Tên:
                  <span>{user.hoTen}</span>
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
        <p
          style={{
            fontSize: "1.5rem",
            fontWeight: "400",
          }}
        >
          Bạn chưa tham gia khóa học nào!
        </p>
      ),
    },
  ];
  return (
    <div className={cx("personalInfo")}>
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
          <div className={cx("bg_btn-change")}>
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
              <div className={cx("col", "c-8", "skillAll")}>
                <div className={cx("mySkill", "skillBtnHtml")}>
                  <button className={cx("skillBtnCustom")}>Html</button>
                  <div className={cx("progress")}>
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      aria-valuenow={100}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>
                <div className={cx("mySkill", "skillBtnCss")}>
                  <button className={cx("skillBtnCustom")}>Css</button>
                  <div className={cx("progress")}>
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      aria-valuenow={75}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
                <div className={cx("mySkill", "skillBtnJs")}>
                  <button className={cx("skillBtnCustom")}>js</button>
                  <div className={cx("progress")}>
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      aria-valuenow={50}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                </div>
                <div className={cx("mySkill", "skillBtnReact")}>
                  <button className={cx("skillBtnCustom")}>react</button>
                  <div className={cx("progress")}>
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "25%" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className={cx("col", "c-4")}>
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
