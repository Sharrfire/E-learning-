
import { message } from "antd";
import userLocal from "~/api/userLocal";


// redux thunk
export const setLoginAction = (userData, onNavigate) => {
  // api Login action
  return (dispatch) => {

    message.success("Đăng nhập thành công");
    const newUser = { ...userData, registeredCourses: [] }
    userLocal.set(newUser);
    onNavigate();
   
    // userApi
    //   .postLogin(userData)
    //   // .postLogin(userData)
    //   .then((res) => {
    //     message.success("Đăng nhập thành công");
    //     // push user to local storage
    //     const newUser = { ...res.data, registeredCourses: [] }
    //     userLocal.set(newUser);
    //     // userLocal.set(res.data);
    //     // console.log('res data',res.data) 
    //     // dispatch action to redux
    //     dispatch(setUserInfor(res.data));
    //     onNavigate();
    //   })
    //   .catch((err) => {
    //     message.error(err.response.data);
    //     console.log(err);
    //   });
  };
};
export const setRegisterAction = (userData,onNavigate) => {
  // api Register action to new user account
  return () => {
    
    message.success("Tài khoản đã được đăng kí thành công")
    const newUser = { ...userData, registeredCourses: [] }
    userLocal.set(newUser);
    onNavigate();

    // userApi
    //   .postRegister(userData)
    //   .then((res) => {
    //     message.success("Tài khoản đã được đăng kí thành công")
    //   }).catch((err) => {
    //     message.error(err.response.data);
    //     console.log(err);
    //   });
  };
};