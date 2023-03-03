import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { star } from "~/constants/rate";
import TitleLayout from "~/layouts/components/TitleLayout/TitleLayout";
import styles from "./cart.module.scss";
import { removeAll, removeFromCart } from "./cartSlice";

const cx = classNames.bind(styles);
Cart.propTypes = {};

function Cart(props) {
  const [cartPresent, setCartPresent] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => {
    return state.cart.cart;
  });

  console.log(cartItems);

  let cartTotal = cartItems.reduce((curr, item) => curr + item.price, 0) || 0;
  let cartOldTotal =
    cartItems.reduce((curr, item) => curr + item.old_price, 0) || 0;

  const handleDeleteCourse = (id) => {
    const action = removeFromCart({ id });
    dispatch(action);
  };
  const handlePayment = () => {
    const action = removeAll();
    dispatch(action);
  };

  return (
    <section className={cx("container")}>
      <TitleLayout title={"Giỏ hàng"} />
      <div className={cx("wrapper")}>
        <div className={cx("row")}>
          <div
            className={cx("col", "s-12", "m-12", "ml-8", "l-8", "main-content")}
          >
            <div className={cx("shopping_list")}>
              <h3>{`Khóa học trong giỏ hàng: ${cartItems.length}`}</h3>
              <div className={cx("shopping-item_list")}>
                {cartItems.map((item) => (
                  <div key={item.id} className={cx("shopping-item-wrapper")}>
                    <div className={cx("shopping-item-container")}>
                      <div className={cx("shopping-item-image")}>
                        <div className={cx("shopping-item-image_wrapper")}>
                          <img src={item.img} alt={item.title} />
                        </div>
                      </div>
                      <div className={cx("shopping-item-detail")}>
                        <h4
                          className={cx("shopping-item-title", "line-clamp")}
                          style={{
                            "--lineClamp": 1,
                          }}
                        >
                          {item.title}{" "}
                        </h4>
                        <p className={cx("item_author")}>
                          <span>Giảng viên {item.author.name}</span>
                        </p>
                        <div className={cx("item-review_detail")}>
                          <div className={cx("item-review_tag")}>
                            <p>
                              <span>Best seller </span>
                            </p>
                          </div>
                          <p>
                            <span>
                              {" "}
                              {item.rate} {star}
                            </span>
                          </p>
                          <p className={cx("item-review_rate")}>
                            <span>
                              (
                              {new Intl.NumberFormat("de-DE").format(
                                `${item.rateAmount}`
                              )}{" "}
                              đánh giá)
                            </span>
                          </p>
                        </div>
                        <div className={cx("item-review_info")}>
                          <p>
                            <span>1230 học viên</span>
                          </p>
                          <div className={cx("dot")}></div>

                          <p className={cx("")}>{item.level.title}</p>
                        </div>
                      </div>
                      <div className={cx("shopping-item-actions")}>
                        <p
                          onClick={() => {
                            handleDeleteCourse(item.id);
                          }}
                        >
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
                            {new Intl.NumberFormat("de-DE").format(
                              `${item.old_price}`
                            )}
                            <sup>đ</sup>
                          </span>
                        </div>
                        <div className={cx("course-price_sale")}>
                          <span>
                            {new Intl.NumberFormat("de-DE").format(
                              `${item.price}`
                            )}
                            <sup>đ</sup>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={cx("col", "s-12", "m-12", "ml-4", "l-3")}>
            <div className={cx("checkout-wrapper")}>
              <div className={cx("billing-method")}></div>
              <div className={cx("checkout-panel")}>
                <div className={cx("total-price_coupon")}>
                  <div className={cx("total-price_coupon_label")}>
                    Mã thanh toán{" "}
                  </div>
                  {/* {userName ? (
                    <button onClick={handleLogin}>Học</button>
                  ) : (
                    <button onClick={handleLogin}>Đăng ký</button>
                  )} */}
                  <form action="" className={cx("form-coupon")}>
                    <input type="text" placeholder="Nhập mã" />
                  </form>{" "}
                </div>
              </div>
              <div className={cx("checkout-panel")}>
                <div className={cx("total-price_container")}>
                  <div className={cx("total-price_label")}>Tổng tiền:</div>
                  <div className={cx("price-container")}>
                    <div className={cx("price_text")}>
                      <span>
                        {new Intl.NumberFormat("de-DE").format(cartTotal)}
                        <sup>đ</sup>
                      </span>
                    </div>{" "}
                    <div className={cx("price_text", "original-price")}>
                      {new Intl.NumberFormat("de-DE").format(cartOldTotal)}
                      <sup>đ</sup>
                    </div>
                  </div>
                  <div className={cx("course-buy-btn")}>
                    {/* {userName ? (
                    <button onClick={handleLogin}>Học</button>
                  ) : (
                    <button onClick={handleLogin}>Đăng ký</button>
                  )} */}
                    <button onClick={handlePayment}>Thanh toán</button>
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
