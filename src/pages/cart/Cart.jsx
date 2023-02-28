import classNames from "classnames/bind";
import { star } from "~/constants/rate";
import TitleLayout from "~/layouts/components/TitleLayout/TitleLayout";
import styles from "./cart.module.scss";

const cx = classNames.bind(styles);
Cart.propTypes = {};

function Cart(props) {
  return (
    <section className={cx("container")}>
      <TitleLayout title={"Giỏ hàng"} />
      <div className={cx("wrapper")}>
        <div className={cx("row")}>
          <div
            className={cx("col", "s-12", "m-12", "ml-8", "l-8", "main-content")}
          >
            <div className={cx("shopping_list")}>
              <h3>Khóa học trong giỏ hàng: 4</h3>
              <div className={cx("shopping-item_list")}>
                <div className={cx("shopping-item-wrapper")}>
                  <div className={cx("shopping-item-container")}>
                    <div className={cx("shopping-item-image")}>
                      <div className={cx("shopping-item-image_wrapper")}>
                        <img
                          // style={{ width: "200px" }}
                          src="https://files.fullstack.edu.vn/f8-prod/courses/4/61a9e9e701506.png"
                          alt="html-css"
                        />
                      </div>
                    </div>
                    <div className={cx("shopping-item-detail")}>
                      <h4
                        className={cx("shopping-item-title", "line-clamp")}
                        style={{
                          " --line-clamp": 1,
                        }}
                      >
                        HTML-CSS
                      </h4>
                      <p className={cx("item_author")}>
                        <span>Giảng viên Elon Musk</span>
                      </p>
                      <div className={cx("item-review_detail")}>
                        <div className={cx("item-review_tag")}>
                          <p>
                            <span>Best seller </span>
                          </p>
                        </div>
                        <p>
                          <span>4.9 {star}</span>
                        </p>
                        <p className={cx("item-review_rate")}>
                          <span>
                            ({new Intl.NumberFormat("de-DE").format(71111)} đánh
                            giá)
                          </span>
                        </p>
                      </div>
                      <div className={cx("item-review_info")}>
                        <p>
                          <span>1230 học viên</span>
                        </p>
                        <div className={cx("dot")}></div>

                        <p className={cx("")}>Trình độ cơ bản</p>
                      </div>
                    </div>
                    <div className={cx("shopping-item-actions")}>
                      <p>
                        <span className={cx("btn-cta")}>Xóa</span>
                      </p>
                      <p>
                        <span className={cx("btn-cta")}>Thanh toán sau</span>
                      </p>
                      <p>
                        <span className={cx("btn-cta")}>Yêu thích</span>
                      </p>
                    </div>
                    <div className={cx("item-price")}>
                      <div className={cx("course-price_normal")}>
                        <span>
                          {new Intl.NumberFormat("de-DE").format(500000)}
                          <sup>đ</sup>
                        </span>
                      </div>
                      <div className={cx("course-price_sale")}>
                        <span>
                          {new Intl.NumberFormat("de-DE").format(400000)}
                          <sup>đ</sup>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className={cx("shopping-item-wrapper")}>
                  <div className={cx("shopping-item-container")}>
                    <div className={cx("shopping-item-image")}>
                      <div className={cx("shopping-item-image_wrapper")}>
                        <img
                          // style={{ width: "200px" }}
                          src="https://files.fullstack.edu.vn/f8-prod/courses/4/61a9e9e701506.png"
                          alt="html-css"
                        />
                      </div>
                    </div>
                    <div className={cx("shopping-item-detail")}>
                      <h4
                        className={cx("shopping-item-title", "line-clamp")}
                        style={{
                          " --line-clamp": 1,
                        }}
                      >
                        HTML-CSS
                      </h4>
                      <p className={cx("item_author")}>
                        <span>Giảng viên Elon Musk</span>
                      </p>
                      <div className={cx("item-review_detail")}>
                        <div className={cx("item-review_tag")}>
                          <p>
                            <span>Best seller </span>
                          </p>
                        </div>
                        <p>
                          <span>4.9 {star}</span>
                        </p>
                        <p className={cx("item-review_rate")}>
                          <span>
                            ({new Intl.NumberFormat("de-DE").format(71111)} đánh
                            giá)
                          </span>
                        </p>
                      </div>
                      <div className={cx("item-review_info")}>
                        <p>
                          <span>1230 học viên</span>
                        </p>
                        <div className={cx("dot")}></div>

                        <p className={cx("")}>Trình độ cơ bản</p>
                      </div>
                    </div>
                    <div className={cx("shopping-item-actions")}>
                      <p>
                        <span className={cx("btn-cta")}>Xóa</span>
                      </p>
                      <p>
                        <span className={cx("btn-cta")}>Thanh toán sau</span>
                      </p>
                      <p>
                        <span className={cx("btn-cta")}>Yêu thích</span>
                      </p>
                    </div>
                    <div className={cx("item-price")}>
                      <div className={cx("course-price_normal")}>
                        <span>
                          {new Intl.NumberFormat("de-DE").format(500000)}
                          <sup>đ</sup>
                        </span>
                      </div>
                      <div className={cx("course-price_sale")}>
                        <span>
                          {new Intl.NumberFormat("de-DE").format(400000)}
                          <sup>đ</sup>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={cx("col", "s-12", "m-12", "ml-4", "l-4")}>
            <div className={cx("checkout-wrapper")}>
              <div className={cx("billing-method")}></div>
              <div className={cx("checkout-panel")}>
                <div className={cx("total-price_container")}>
                  <div className={cx("total-price_label")}>Tổng tiền:</div>
                  <div className={cx("price-container")}>
                    <div className={cx("price_text")}>
                      <span>
                        {new Intl.NumberFormat("de-DE").format(1027000)}
                        <sup>đ</sup>
                      </span>
                    </div>{" "}
                    <div className={cx("price_text", "original-price")}>
                      {new Intl.NumberFormat("de-DE").format(7197000)}
                      <sup>đ</sup>
                    </div>
                
                  </div>
                  <div className={cx("course-buy-btn")}>
                      {/* {userName ? (
                    <button onClick={handleLogin}>Học</button>
                  ) : (
                    <button onClick={handleLogin}>Đăng ký</button>
                  )} */}
                      <button>Thanh toán</button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
