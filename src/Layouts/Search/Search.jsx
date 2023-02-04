import React from 'react'
import styles from './search.module.scss'
import  classnames  from 'classnames/bind';
const cx = classnames.bind(styles);
export default function Search() {
  return (
    <div>
        <div className={`${cx("search_wrapper")} d-flex-center`}>
          <div className={cx("search_icon")}></div>
          <input className={cx("search_input")}  spellCheck="false" placeholder='Tìm kiếm khóa học,video,...'/>
        </div>
    </div>
  )
}
