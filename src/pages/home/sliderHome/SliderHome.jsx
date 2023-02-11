import React from 'react'
import styles from './sliderHome.module.scss'
import classNames from 'classnames/bind'
import paper_phane from '~/assets/vendor/paper_plane.93dfdbf5.png'
const cx = classNames.bind(styles);

export default function SliderHome() {
  return (
    <div className={cx("sliderHome")}>
        <div className={cx("col","l-6","sloganBox")}>
            <div className={cx("triangleTopRight")}></div>
            <div className={cx("smallBox","smallBoxLeftTop")}></div>
            <div className={cx("smallBox","smallBoxRightTop")}></div>
            <div className={cx("smallBox","smallBoxRightBottom")}></div>
            <div className={cx("smallBox","smallBoxRightBottom","doubleBox")}></div>
            <div className={cx("sloganContainer")}>
                <div>
                    <img className={cx("sliderImg")} src={paper_phane} alt="" />
                </div>
                <h1>Chào mừng</h1>
                <h1>đến với chúng tôi</h1>
                <h1>E<span>learning</span></h1>
                <button className={cx("btnSlider")}>Cùng học nào!</button>
            </div> 
        </div>
        <div className={cx("col","l-6")}></div>

    </div>
  )
}
