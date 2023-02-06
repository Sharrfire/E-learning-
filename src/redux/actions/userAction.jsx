import { userService } from "~/services/userService";
import { userLocalService } from "~/services/localStorage";
import { setUserInfor } from "../redux-toolkid/userSlice";
import { message} from 'antd';

// redux thunk
export const setLoginAction = (userData, onNavigate) => {
    
  // api Login action
  return (dispatch) => {
    userService.postLogin(userData).then((res) => {
        message.success("Đăng nhập thành công");
      // push user to local storage
      userLocalService.set(res.data.content);
      // dispatch action to redux
      dispatch(setUserInfor(res.data.content));
      onNavigate();
    }).catch((err) => {
        message.error(err.response.data);
        console.log(err);
    });
  };
};
