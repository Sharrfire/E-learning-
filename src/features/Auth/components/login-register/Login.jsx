import React, { useState } from "react";
import style from "./login.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(style);

export const  Login = () => {
  const [action,setAction] = useState(cx("container"));
  function signUp() {
    setAction(cx("container","right-panel-active")) 
  }

  function signIn() {
    setAction(cx("container"));
  }

  return (
    <div className={cx("login")}>
      <div className={action} >
        <div className={cx("form-container","signUp-container")}>
          <form action="#">
            <h2>ĐĂNG KÝ</h2>
            <input
              type="text"
              placeholder="Tài khoản"
              name="taiKhoan"
              />
            <div className={cx("message")} />
            <input type="text" placeholder="Họ và tên" name="hoTen"  />
            <div className={cx("message")} />
            <input
              type="password"
              placeholder="Mật khẩu"
              name="matKhau"
              
            />
            <div className={cx("message")} />
            <input type="email" placeholder="Email" name="email"  />
            <div className={cx("message")} />
            <input
              type="phone"
              placeholder="Số điện thoại"
              name="soDT"
              
            />
            <div className={cx("message")} />
            <select  name="maNhom">
              <option value="GP01">GP01</option>
              <option value="GP02">GP02</option>
              <option value="GP03">GP03</option>
              <option value="GP04">GP04</option>
              <option value="GP05">GP05</option>
              <option value="GP06">GP06</option>
              <option value="GP07">GP07</option>
              <option value="GP08">GP08</option>
              <option value="GP09">GP09</option>
              <option value="GP010">GP010</option>
            </select>
            <button type="submit">Đăng ký</button>
          </form>
        </div>
        <div className={cx("form-container","signIn-container")}>
          <form className={cx("formLoginUser")} action="#">
            <h1>Đăng nhập</h1>
            <span>hoặc sử dụng tài khoản đã đăng ký của bạn</span>
            <input
              type="text"
              placeholder="Tài khoản"
              name="taiKhoan"
              
            />
            <input
              type="password"
              placeholder="Mật khẩu"
              name="matKhau"
              
            />
            <a href="#!">Quên mật khẩu?</a>
            <button type="submit">Đăng nhập</button>
          </form>
        </div>
        <div className={cx("overlay-container")}>
          <div className={cx("overlay")}>
            <div className={cx("overlay-panel","overlay-left")}>
              <h1>Chào mừng bạn đã trở lại!</h1>
              <p>Vui lòng đăng nhập để kết nối với tài khoản của bạn</p>
              <button
                className={cx("ghost")}
                onClick={() => {
                  signIn();
                }}
              >
                Đăng nhập
              </button>
            </div>
            <div className={cx("overlay-panel","overlay-right")}>
              <h1>Xin chào!</h1>
              <p>
                Vui lòng nhấn đăng ký để thiết lập thông tin tài khoản của bạn!
              </p>
              <button
                className={cx("ghost")}
                onClick={() => {
                  signUp();
                }}
              >
                Đăng ký
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;