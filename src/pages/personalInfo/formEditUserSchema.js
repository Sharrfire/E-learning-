import * as yup from "yup";

export const formEditUserSchema = yup.object().shape({
  taiKhoan: yup.string().required("Tài khoản không được để trống!"),
  soDT: yup
    .string()
    .required("Số điện thoại không được để trống!")
    .matches(/^[0-9]+$/, "số điện thoại không hợp lệ!"),
  hoTen: yup.string().required("Họ và tên không được để trống!"),
  email: yup
    .string()
    .required("Email không được để trống!")
    .email("Email không hợp lệ!"),
});
