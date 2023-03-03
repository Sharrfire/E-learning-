import { message } from 'antd';
import classNames from "classnames/bind";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from 'react-redux';
import userLocal from "~/api/userLocal";
import { setUserInfor } from "~/features/Auth/userSlice";
import styles from "./formEditUser.module.scss";
import { formEditUserSchema } from "./formEditUserSchema";
const cx = classNames.bind(styles);


export default function FormEditUser(props) {
  // const user = useSelector((state)=>{
  //   return state.userSlice.userInfor;
  // });
  const dispatch = useDispatch();
  const handleEditUser = (values) => {
    userLocal.set(values);
    dispatch(setUserInfor(values));
    message.success("Cập nhật thành công")  
  };
  
  return (
    <Formik
      validationSchema={formEditUserSchema}
      onSubmit={handleEditUser}
      initialValues={{
        taiKhoan:'',
        hoTen:'',
        matKhau:'',
        email:'',
      }}
    >
      {({ handleChange, handleSubmit, handleReset }) => (
        <Form  className={cx("formEditUser")} onSubmit={handleSubmit} action="#">
          <h3>Chỉnh sửa thông tin</h3>
          <div>
            <label>Tài khoản</label>
            <Field
              className={cx("inputEditUser")}
              onChange={handleChange}
              type="text"
              placeholder="Tài khoản"
              name="taiKhoan"
            />
            <ErrorMessage name="taiKhoan">
              {(msg) => <div className={cx("error")}>{msg}</div>}
            </ErrorMessage>
          </div>
          <div>
            <label>Họ và Tên</label>
            <Field
              className={cx("inputEditUser")}
              onChange={handleChange}
              type="text"
              placeholder="Họ và tên"
              name="hoTen"
            />
            <ErrorMessage name="hoTen">
              {(msg) => <div className={cx("error")}>{msg}</div>}
            </ErrorMessage>
          </div>
          <div>
            <label>Mật khẩu</label>
            <Field
              className={cx("inputEditUser")}
              onChange={handleChange}
              type="password"
              placeholder="Mật khẩu"
              name="matKhau"
              autoComplete="on"
            />
            <ErrorMessage name="matKhau">
              {(msg) => <div className={cx("error")}>{msg}</div>}
            </ErrorMessage>
          </div>
          <div>
            <label>Email</label>
            <Field
              className={cx("inputEditUser")}
              onChange={handleChange}
              type="email"
              placeholder="Email"
              name="email"
            />
            <ErrorMessage name="email">
              {(msg) => <div className={cx("error")}>{msg}</div>}
            </ErrorMessage>
          </div>
          <div className={cx("btn")}>
            <button type="submit">Cập nhật</button>
            <button onClick={handleReset}>Xóa</button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
