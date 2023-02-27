import { BASE_URL, https } from "./configURL";
export const userApi = {
    postLogin:(userData)=>{
        return https.post(`${BASE_URL}/api/QuanLyNguoiDung/DangNhap`,userData);
    },
    postRegister:(userData)=>{
        return https.post(`${BASE_URL}/api/QuanLyNguoiDung/DangKy`,userData);
    },
};