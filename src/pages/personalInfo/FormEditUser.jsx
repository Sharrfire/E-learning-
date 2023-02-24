import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import styles from "./formEditUser.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
const handleEditUser = (values) => {
  console.log(values);
};

export default function FormEditUser(props) {
  return (
    <Formik onSubmit={handleEditUser} initialValues={{
      taiKhoan:'',
      hoTen:'',
      matKhau:'',
      email:'',
    }}>
      {({ handleChange, handleSubmit,handleReset }) => (
        <Form className={cx("formEditUser")} onSubmit={handleSubmit} action="#">
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
          </div>
          <div className={cx("btn")}>
            <button type="submit">Cập nhật</button>
            <button>Xóa</button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
