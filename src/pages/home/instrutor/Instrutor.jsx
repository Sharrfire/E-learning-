import React from "react";
import classNames from "classnames/bind";
import styles from "./instrutor.module.scss";
const cx = classNames.bind(styles);
export default function Instrutor() {
  return (
    <div className={cx("instrutorContainer")}>
      <h6>
        <a href="#!">Giảng viên hàng đầu</a>
      </h6>
      <div className={cx("instrutorContent")}>
        <div className={cx("row", "instrutorList")}>
          <div className={cx("col", "c-12", "m-3")}>
            <div className={cx("instrutorItem")}>
              <img src="" alt="" />
              <h6>Big Show</h6>
              <div className={cx("textReviewRole")}>
                <p>Chuyên gia lĩnh vực</p>
                <p>Lập trình</p>
              </div>
              <p className={cx("reviewMentor")}>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </p>
              <span className={cx("textReviewBot")}>100 Đánh giá</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
