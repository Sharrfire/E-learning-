import React from 'react'
import styles from './header.module.scss'
import classnames from 'classnames/bind'
import Search from '../Search/Search'
import SideBar from '../SideBar/SideBar'
const cx = classnames.bind(styles)

export default function Header() {
    
  return <header className={cx("header")}>
      <div className={cx("header_logo")} >
       <a href="#!"><img src="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png" alt="img" /></a>
       <h4 className={cx("desc")}>Học Lập Trình Để Đi Làm</h4>
      </div>
      <Search/>
      <SideBar/>
  </header>
    
  
}
