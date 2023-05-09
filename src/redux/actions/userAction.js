
import { message } from "antd";
import userLocal from "~/api/userLocal";
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from 'firebase/auth';
import auth from "~/api/firebase";


export const setLoginAction = (userData, onNavigate) => {
  // api Login action
  return (dispatch) => {
    signInWithEmailAndPassword(auth, userData.email, userData.matKhau)
      .then(() => {  
        message.success("Đăng nhập thành công");
        const newUser = { ...userData, registeredCourses: [] }
        userLocal.set(newUser);
        onNavigate();
      
      })   
      .catch((err) => {
        switch (err.code) {
          case "auth/wrong-password": alert('Sai mật khẩu')
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
        message.success("Tài khoản đã được đăng kí thành công")
      }).then(() => {
        const newUser = { ...userData, registeredCourses: [] }
        userLocal.set(newUser);
        onNavigate();
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use": alert('Email đã được đăng kí ')
            break;

          default: alert(err.message)
        }
      })
  };
};