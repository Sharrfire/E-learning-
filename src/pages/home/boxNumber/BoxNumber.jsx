import React from "react";
import styles from "./boxNumber.module.scss";
import classNames from "classnames/bind";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
import studentImg from "~/assets/vendor/student.png";
import timeImg from "~/assets/vendor/time.png";
import hourglassImg from "~/assets/vendor/hourglass.png";
import teacherImg from "~/assets/vendor/teacher.png";
const cx = classNames.bind(styles);
function BoxNumber() {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => {
        setCounterOn(true);
      }}
    >
      <div className={cx("boxNumberContainer")}>
        <div className={cx("row")}>
          <div className={cx("col", "s-12", "m-6","ml-3", "l-3", "wide", "p-4")}>
            <div className={cx("boxNumber")}>
              <div>
                <img className={cx("boxNumberImg")} src={studentImg} alt="" />
              </div>
              <div className={cx("textNumber")}>
                <span>
                  {counterOn && (
                    <CountUp start={0} end={9758} duration={1.5} delay={0} />
                  )}
                </span>
              </div>
              <p className={cx("textNumberTitle")}>Học viên</p>
            </div>
          </div>
          <div className={cx("col", "s-12", "m-6","ml-3", "l-3", "wide", "p-4")}>
            <div className={cx("boxNumber")}>
              <div>
                <img className={cx("boxNumberImg")} src={timeImg} alt="" />
              </div>
              <div className={cx("textNumber")}>
                <span>
                  {counterOn && (
                    <CountUp start={0} end={700} duration={1.5} delay={0} />
                  )}
                </span>
              </div>
              <p className={cx("textNumberTitle")}>Khóa Học</p>
            </div>
          </div>
          <div className={cx("col", "s-12", "m-6","ml-3", "l-3", "wide", "p-4")}>
            <div className={cx("boxNumber")}>
              <div>
                <img className={cx("boxNumberImg")} src={hourglassImg} alt="" />
              </div>
              <div className={cx("textNumber")}>
                <span>
                  {counterOn && (
                    <CountUp start={0} end={27580} duration={1.5} delay={0} />
                  )}
                </span>
              </div>
              <p className={cx("textNumberTitle")}>Giờ Học</p>
            </div>
          </div>
          <div className={cx("col", "s-12", "m-6","ml-3", "l-3", "wide", "p-4")}>
            <div className={cx("boxNumber")}>
              <div>
                <img className={cx("boxNumberImg")} src={teacherImg} alt="" />
              </div>
              <div className={cx("textNumber")}>
                <span>
                  {counterOn && (
                    <CountUp start={0} end={200} duration={1.5} delay={0} />
                  )}
                </span>
              </div>
              <p className={cx("textNumberTitle")}>Giảng Viên</p>
            </div>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
}
export default BoxNumber;
