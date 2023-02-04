import React from 'react'
import styles from './sideBar.module.scss'
import  classnames  from 'classnames/bind';

const cx = classnames.bind(styles);
export default function SideBar() {
  return (
    <div>
      <a href="#" className={cx("sideBar_login")}>Đăng Nhập</a>
    </div>
  )
}
