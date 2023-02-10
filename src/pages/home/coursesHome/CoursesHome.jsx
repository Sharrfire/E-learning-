import React from "react";
import classNames from "classnames/bind";
import styles from "./coursesHome.module.scss";
import avatar from "~/assets/vendor/avatar2.bb9626e2.png";
const cx = classNames.bind(styles);
CoursesHome.propTypes = {};

function CoursesHome(props) {
  return (
    <>
      <div className={cx("container")}>
        <h6>
          <a href="#!">Khóa học phổ biến</a>
        </h6>
      </div>

      <div className={cx("courses-list", "row")}>
        <div className={cx("card-global-res", "col")}>
          <a href="#!" className={cx("card-global")}>
            <img
              src="https://elearningnew.cybersoft.edu.vn/hinhanh/lap-trinh-c-.jpg"
              alt=""
            />
            <span class={cx("sticker-card")}>Lập trình xu thế</span>
            <div className={cx("card-body-global")}>
              <h6 classname={cx('line-clamp','line-2')}>
                Lập trình hiện đang là xu hướng trên toàn thế giới.Lập trình hiện đang là xu hướng trên toàn thế giới...
              </h6>
              <div className={cx("title-maker")}>
                <div className={cx("img-card-footer")}>
                  <img class={cx("avatar")} src={avatar} alt="avatar" />
                </div>
                <span>Elon Musk</span>
              </div>
            </div>
            <div className={cx("card-footer")}>
              <div>
                <p>
                  800.000<sup>đ</sup>
                </p>
                <p>
                  400.000<sup>đ</sup>
                </p>
              </div>
              <div>
                <i class={cx("fa", " fa-star")}></i>
                <span class={cx("text-star")}>4.9</span>
                <span class={cx("color-card-title")}>(7840)</span>
              </div>
            </div>
          </a>
        </div>
        <div className={cx("card-global-res", "col")}>
          <a href="#!" className={cx("card-global")}>
            <img
              src="https://elearningnew.cybersoft.edu.vn/hinhanh/lap-trinh-c-.jpg"
              alt=""
            />
            <span class={cx("sticker-card")}>Lập trình xu thế</span>
            <div className={cx("card-body-global")}>
              <h6 classname={cx('title','line-clamp','line-2')}>
                Lập trình hiện đang là xu hướng trên toàn thế giới...
              </h6>
              <div className={cx("title-maker")}>
                <div className={cx("img-card-footer")}>
                  <img class={cx("avatar")} src={avatar} alt="avatar" />
                </div>
                <span>Elon Musk</span>
              </div>
            </div>
            <div className={cx("card-footer")}>
              <div>
                <p>
                  800.000<sup>đ</sup>
                </p>
                <p>
                  400.000<sup>đ</sup>
                </p>
              </div>
              <div>
                <i class={cx("fa", " fa-star")}></i>
                <span class={cx("text-star")}>4.9</span>
                <span class={cx("color-card-title")}>(7840)</span>
              </div>
            </div>
          </a>
        </div>
        <div className={cx("card-global-res", "col")}>
          <a href="#!" className={cx("card-global")}>
            <img
              src="https://elearningnew.cybersoft.edu.vn/hinhanh/lap-trinh-c-.jpg"
              alt=""
            />
            <span class={cx("sticker-card")}>Back End</span>
            <div className={cx("card-body-global")}>
              <h6 classname={cx('title','line-clamp','line-2')}>
                Lập trình hiện đang là xu hướng trên toàn thế giới...
              </h6>
              <div className={cx("title-maker")}>
                <div className={cx("img-card-footer")}>
                  <img class={cx("avatar")} src={avatar} alt="avatar" />
                </div>
                <span>Elon Musk</span>
              </div>
            </div>
            <div className={cx("card-footer")}>
              <div>
                <p>
                  800.000<sup>đ</sup>
                </p>
                <p>
                  400.000<sup>đ</sup>
                </p>
              </div>
              <div>
                <i class={cx("fa", " fa-star")}></i>
                <span class={cx("text-star")}>4.9</span>
                <span class={cx("color-card-title")}>(7840)</span>
              </div>
            </div>
          </a>
        </div>
        <div className={cx("card-global-res", "col")}>
          <a href="#!" className={cx("card-global")}>
            <img
              src="https://elearningnew.cybersoft.edu.vn/hinhanh/lap-trinh-c-.jpg"
              alt=""
            />
            <span class={cx("sticker-card")}>
              Front End Cơ Bản Đến Nâng Cao.
            </span>
            <div className={cx("card-body-global")}>
              <h6 classname={cx('title','line-clamp','line-2')}>
                Lập trình hiện đang là xu hướng trên toàn thế giới...
              </h6>
              <div className={cx("title-maker")}>
                <div className={cx("img-card-footer")}>
                  <img class={cx("avatar")} src={avatar} alt="avatar" />
                </div>
                <span>Elon Musk</span>
              </div>
            </div>
            <div className={cx("card-footer")}>
              <div>
                <p>
                  800.000<sup>đ</sup>
                </p>
                <p>
                  400.000<sup>đ</sup>
                </p>
              </div>
              <div>
                <i class={cx("fa", " fa-star")}></i>
                <span class={cx("text-star")}>4.9</span>
                <span class={cx("color-card-title")}>(7840)</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default CoursesHome;
