import React from "react";
import "./login.css";

export const Login = () => {
  function signUp() {
    document.getElementById("container").classList.add("right-panel-active");
  }

  function signIn() {
    document.getElementById("container").classList.remove("right-panel-active");
  }
  // function handleSubmit() {}

  return (
    <div className="loginBody container-fluid">
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form action="#">
            <h2 className="pt-3">ĐĂNG KÝ</h2>
            <input
              type="text"
              placeholder="Tài khoản"
              name="taiKhoan"
              defaultValue
            />
            <div className="message" />
            <input type="text" placeholder="Họ tên" name="hoTen" defaultValue />
            <div className="message" />
            <input
              type="password"
              placeholder="Mật khẩu"
              name="matKhau"
              defaultValue
            />
            <div className="message" />
            <input type="email" placeholder="Email" name="email" defaultValue />
            <div className="message" />
            <input
              type="phone"
              placeholder="Số điện thoại"
              name="soDT"
              defaultValue
            />
            <div className="message" />
            <select id className name="maNhom">
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
        <div className="form-container sign-in-container">
          <form className="formLoginUser" action="#">
            <h1>Đăng nhập</h1>
            <span>hoặc sử dụng tài khoản đã đăng ký của bạn</span>
            <input
              type="text"
              placeholder="Tài khoản"
              name="taiKhoan"
              defaultValue
            />
            <input
              type="password"
              placeholder="Mật khẩu"
              name="matKhau"
              defaultValue
            />
            <a href>Quên mật khẩu?</a>
            <button type="submit">Đăng nhập</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Chào mừng bạn đã trở lại!</h1>
              <p>Vui lòng đăng nhập để kết nối với tài khoản của bạn</p>
              <button
                className="ghost"
                id="signIn"
                onClick={() => {
                  signIn();
                }}
              >
                Đăng nhập
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Xin chào!</h1>
              <p>
                Vui lòng nhấn đăng ký để thiết lập thông tin tài khoản của bạn!
              </p>
              <button
                className="ghost"
                id="signUp"
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