import { Modal } from "antd";
import classnames from "classnames/bind";
import { useState } from "react";
import LoginForm from "~/features/Auth/components/LoginrForm/LoginForm";
import RegisterForm from "~/features/Auth/components/RegisterForm/RegisterForm";
import styles from "./navBar.module.scss";
const cx = classnames.bind(styles);

export default function NavBar() {
  const [isModalLoginOpen, setIsModalLoginOpen] = useState(false);
  const [isModalRegisterOpen, setIsModalRegisterOpen] = useState(false);
  const isLoggedIn = useState(false);
  const showLoginModal = () => {
    setIsModalLoginOpen(true);
  };
  const showRegisterModal = () => {
    setIsModalRegisterOpen(true);
  };
  const handleCancel = () => {
    setIsModalLoginOpen(false);
    setIsModalRegisterOpen(false);
  };
  return (
    <div className={cx("container")}>
      {isLoggedIn === true ? (
        <div>
          <div className={cx("courses")}>Khóa học của tôi</div>
          <a href="#!" className={cx("logout")}>
            Đăng Xuất
          </a>
        </div>
      ) : (
        <div className={cx("cta")}>
          <p onClick={showLoginModal} className={cx("login")}>
            Đăng nhập
          </p>
          <p onClick={showRegisterModal} className={cx("register")}>
            Đăng kí
          </p>
          <Modal title="Đăng nhập" open={isModalLoginOpen} footer={null}  onCancel={handleCancel}>
            <LoginForm/>
          </Modal>  
          <Modal title="Đăng kí"  open={isModalRegisterOpen}  footer={null}  onCancel={handleCancel}>
            <RegisterForm/>
          </Modal>  
        </div>
      )}
    </div>
  );
}
