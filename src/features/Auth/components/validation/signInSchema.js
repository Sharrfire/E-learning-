import * as yup from 'yup';

export const signInSchema = yup.object().shape({
    email: yup.string().required("Email không được để trống!"),
    matKhau: yup.string().required("Mật khẩu không được để trống!"),
});