import * as yup from "yup";

export const signUpSchema = yup.object().shape({
    taiKhoan: yup.string().required("Tài khoản không được để trống!"),
    matKhau: yup.string().required("Mật khẩu không được để trống!").matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,"Mật khẩu phải có ít nhất 8 kí tự (ít nhất 1 số và 1 chữ cái)"),
    hoTen: yup.string().required("Họ và tên không được để trống!"),
    email: yup.string().required("Email không được để trống!").email("Email không hợp lệ!"),
    soDT: yup.string().required("Số điện thoại không được để trống!").matches(/^[0-9]+$/,"số điện thoại không hợp lệ!"),
});