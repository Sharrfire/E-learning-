import { userService } from "~/services/userService";
import { setUserInfor } from "../../features/Auth/userSlice";
import { message } from "antd";
import userApi from "~/api/userApi";

// redux thunk
export const setLoginAction = (userData, onNavigate) => {
  // api Login action
  return (dispatch) => {
    userService
      .postLogin(userData)
      .then((res) => {
        message.success("Đăng nhập thành công");
        // push user to local storage
        userApi.set(res.data.content);
        // dispatch action to redux
        dispatch(setUserInfor(res.data.content));
        onNavigate();
      })
      .catch((err) => {
        message.error(err.response.data);
        console.log(err);
      });
  };
};
