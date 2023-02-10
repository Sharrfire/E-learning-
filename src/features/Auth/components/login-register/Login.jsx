import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { setLoginAction } from "./../../../../redux/actions/userAction";
import { Formik } from "formik";

const Login = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let handleLoginSubmit = (values) => {
    let onNavigate = () => {
      setTimeout(() => {
        navigate("/");
      }, 1000);
    };
    dispatch(setLoginAction(values, onNavigate));
  
  };
  function signUp() {
    document.getElementById("container").classList.add("right-panel-active");
  }

  function signIn() {
    document.getElementById("container").classList.remove("right-panel-active");
  }

  return (
    <div className="loginBody">
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form action="#" className="form-signUp">
            <h2>Đăng Ký</h2>
            <input type="text" placeholder="Tài khoản" name="taiKhoan" />
            <div className="message" />
            <input type="text" placeholder="Họ và tên" name="hoTen" />
            <div className="message" />
            <input
              autoComplete="on"
              type="password"
              placeholder="Mật khẩu"
              name="matKhau"
            />
            <div className="message" />
            <input type="email" placeholder="Email" name="email" />
            <div className="message" />
            <input type="phone" placeholder="Số điện thoại" name="soDT" />
            <div className="message" />
            <select name="maNhom">
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
          <Formik
            initialValues={{
              taiKhoan: "",
              matKhau: "",
            }}
            onSubmit={handleLoginSubmit}
          >
            {({ handleChange, handleSubmit,isSubmitting }) => (
              <form onSubmit={handleSubmit} className="formLoginUser" action="#">
                <h1>Đăng nhập</h1>
                <span>hoặc sử dụng tài khoản đã đăng ký của bạn</span>
                <input type="text" placeholder="Tài khoản" name="taiKhoan"  onChange={handleChange}/>
                <input
                onChange={handleChange}
                  autoComplete="on"
                  type="password"
                  placeholder="Mật khẩu"
                  name="matKhau"
                />
                <a href="#!">Quên mật khẩu?</a>
                <button disabled={isSubmitting} type="submit" >Đăng nhập</button>
              </form>
            )}
          </Formik>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Chào mừng bạn đã trở lại!</h1>
              <span>Vui lòng đăng nhập để kết nối với tài khoản của bạn</span>
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
              <span>
                Vui lòng nhấn đăng ký để thiết lập thông tin tài khoản của bạn!
              </span>
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
export default Login;
