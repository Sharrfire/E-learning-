import React from 'react'
import styles from './search.module.scss'
import  classnames  from 'classnames/bind';
const cx = classnames.bind(styles);
export default function Search() {
  return (
    <div>
        <div className={`${cx("wrapper")} `}>
          <div className={cx("icon")}></div>
          <input className={cx("input")}  spellCheck="false" placeholder='Tìm kiếm khóa học, bài viết, video, ...'/>
        </div>
    </div>
  )
}
