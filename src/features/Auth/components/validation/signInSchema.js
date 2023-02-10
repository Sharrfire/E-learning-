import * as yup from 'yup';

export const signInSchema = yup.object().shape({
    taiKhoan: yup.string().required("Tài Khoản không được để trống!"),
    matKhau: yup.string().required("Mật khẩu không được để trống!"),
});