import { BASE_URL, https } from "../api/configURL";
export const userService = {
    postLogin:(userData)=>{
        return https.post(`${BASE_URL}/api/QuanLyNguoiDung/DangNhap`,userData);
    },
    postRegister:(userData)=>{
        return https.post(`${BASE_URL}/api/QuanLyNguoiDung/DangKy`,userData);
    },
};