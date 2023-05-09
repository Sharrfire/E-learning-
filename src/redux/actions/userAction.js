
import { message } from "antd";
import userLocal from "~/api/userLocal";
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";

import auth from "~/api/firebase";
import { useNavigate } from "react-router-dom";


export const setLoginAction = (userData, onNavigate) => {
  // api Login action
  return (dispatch) => {
    signInWithEmailAndPassword(auth, userData.email, userData.matKhau)
      .then(() => {
        if (!auth.currentUser.emailVerified) {
          sendEmailVerification(auth.currentUser)
          message.info("Vui lòng xác nhận email đăng kí")
        } else {
          message.success("Đăng nhập thành công");
          const newUser = { ...userData, registeredCourses: [] }
          userLocal.set(newUser);
          onNavigate();
        }
      })

      .catch((err) => {
        switch (err.code) {
          case "auth/wrong-password": alert('Sai mật khẩu')
            message.error("Sai mật khẩu");
            break;
          default: alert(err.message)
        }
      })
  };
};
export const setRegisterAction = (userData, onNavigate) => {
  // api Register action to new user account

  return () => {
    createUserWithEmailAndPassword(auth, userData.email, userData.matKhau)

      .then(() => {
        sendEmailVerification(auth.currentUser)
        message.info("Đã gửi Email xác nhận. Vui lòng kiểm tra hộp thư")
      })
      .then(() => {
        // const newUser = { ...userData, registeredCourses: [] }
        // userLocal.set(newUser);
        onNavigate();
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
            message.error("Email đã được đăng kí");
            break;

          default: alert(err.message)
        }
      })
  };
};