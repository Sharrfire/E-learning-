import classNames from "classnames/bind";
import styles from "./action.module.scss";
// import { useSelector } from "react-redux";
import userLocal from "~/api/userLocal";
import avatar from "~/assets/vendor/instrutor6.64041dca.jpg";
const cx = classNames.bind(styles);
let handleLogout = () => {
  userLocal.remove();
};
function Action() {
  const user = localStorage.getItem("USER_LOGIN");
  // const userRedux = useSelector((state) => {
  //   return state.userSlice.userInfor;
  // });
  // console.log('userRedux',userRedux)
  return (
    <>
      {user && (
        <div className={cx("showIconHeader")}>
          <div className={cx("headerAvatar")}>
            <a className={cx("info")} href="/personalinfo">
              <img className={cx("avatar")} src={avatar} alt="" />
            </a>
            <span onClick={handleLogout} className={cx("logout")}>
              <a href="/">
                <i className="fas fa-power-off"></i>
              </a>
            </span>
          </div>
        </div>
      )}

      {!user && (
        <div>
          <a href="/login" className={cx("login")}>
            Đăng nhập
          </a>
        </div>
      )}
    </>
  );

  // if (user) {
  //   return (
  // <div className={cx("showIconHeader")}>
  //   <div className={cx("headerAvatar")}>
  //     <a className={cx("info")} href="/personalinfo">
  //       <img className={cx("avatar")} src={avatar} alt="" />
  //     </a>
  //       <span onClick={handleLogout} className={cx("logout")}>
  //           <a href="/"><i className="fas fa-power-off"></i></a>
  //       </span>
  //   </div>
  // </div>
  //   );
  // } else {
  //   return (
  // <div>
  //   <a href="/login" className={cx("login")}>
  //     Đăng nhập
  //   </a>
  // </div>
  //   );
  // }
}
export default Action;
