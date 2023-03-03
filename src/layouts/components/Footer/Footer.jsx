import classnames from "classnames/bind";
import styles from "./footer.module.scss";
import logo from "~/assets/vendor/logoElearning.png";
const cx = classnames.bind(styles);

function Footer(props) {
  return (
    <footer className={cx("wrapper")}>
      <section className={cx("grid")}>
        <section className={cx("row","row-footer ")}>
          <section className={cx("col", "s-12", "m-6","ml-3", "l-3",'col-footer')}>
            <div className={cx("footer-column")}>
              <div className={cx("col-heading")}>
                <a href="#!">
                  {" "}
                  <img
                    src={logo}
                    alt="logo"
                  />
                </a>{" "}
                <h2 className={cx("top-slogan")}>Học Lập Trình Để Đi Làm</h2>
              </div>
            </div>
            <div className={cx("contact-list")}>
              <p>
                Điện thoại: <a href="tel:0246.329.1102">0246.329.1102</a>
                <br />
                Email:{" "}
                <a href="mailto:contact@fullstack.edu.vn">
                  contact@fullstack.edu.vn
                </a>
                <br />
                Địa chỉ: Số 26 Dương Đình Nghệ, Phường Yên Hòa, Quận Cầu Giấy,
                TP. Hà Nội
              </p>
              <div className={cx("certificate")}>DMCA</div>
            </div>
          </section>{" "}
          <div className={cx("col", "s-12", "m-6","ml-3", "l-3","col-footer", "col-min")}>
            <div className={cx("footer-column")}>
              <h2 className={cx("col-heading")}>VỀ ChÚNG TÔI</h2>
              <ul className={cx("footer-list")}>
                <li className={cx("footer-item")}>
                  <a href="#!">Giới thiệu</a>
                </li>
                <li className={cx("footer-item")}>
                  <a href="#!">Liên hệ</a>
                </li>
                <li className={cx("footer-item")}>
                  <a href="#!">Điều khoản</a>
                </li>
                <li className={cx("footer-item")}>
                  <a href="#!">Bảo mật</a>
                </li>
                <li className={cx("footer-item")}>
                  <a href="#!">Cơ hội việc làm</a>
                </li>
              </ul>
            </div>
          </div>{" "}
          {/* <div className={cx("col", "col-min")}>
            <div className={cx("footer-column")}>
              <h2 className={cx("col-heading")}>SẢN PHẨM</h2>
              <ul className={cx("footer-list")}>
                <li className={cx("footer-item")}>
                  <a href="#!">Game Nester</a>
                </li>
                <li className={cx("footer-item")}>
                  <a href="#!">Game CSS Diner</a>
                </li>
                <li className={cx("footer-item")}>
                  <a href="#!">Game CSS Selectors</a>
                </li>
                <li className={cx("footer-item")}>
                  <a href="#!">Game Froggy </a>
                </li>
                <li className={cx("footer-item")}>
                  <a href="#!">Game Froggy Pro</a>
                </li>
                <li className={cx("footer-item")}>
                  <a href="#!">Game Scoops</a>
                </li>
              </ul>
            </div>
          </div> */}
          <div className={cx("col", "s-12", "m-6","ml-3", "l-3", 'col-footer',"col-min")}>
            <div className={cx("footer-column")}>
              <h2 className={cx("col-heading")}>CÔNG CỤ </h2>
              <ul className={cx("footer-list")}>
                <li className={cx("footer-item")}>
                  <a href="#!">Tạo CV xin việc</a>
                </li>
                <li className={cx("footer-item")}>
                  <a href="#!">Rút gọn liên kết</a>
                </li>
                <li className={cx("footer-item")}>
                  <a href="#!">Clip-path maker</a>
                </li>
                <li className={cx("footer-item")}>
                  <a href="#!">Snippet generator</a>
                </li>
                <li className={cx("footer-item")}>
                  <a href="#!">Cảnh báo sờ tay lên mặt</a>
                </li>
              </ul>
            </div>
          </div>{" "}
          <div className={cx("col", "s-12", "m-6","ml-3", "l-3",'col-footer')}>
            <a
              target="_blank"
              href="https://www.google.com/search?q=C%C3%94NG+TY+C%E1%BB%94+PH%E1%BA%A6N+C%C3%94NG+NGH%E1%BB%86+GI%C3%81O+D%E1%BB%A4C+F8"
              rel="noreferrer"
            >
              <h2 className={cx("col-heading")}>
                CÔNG TY CỔ PHẦN CÔNG NGHỆ GIÁO DỤC E-LEARNING
              </h2>
            </a>
            <ul className={cx("footer-list")}>
              <li className={cx("footer-item")}>Mã số thuế: 0109922901</li>
              <li className={cx("footer-item")}>Ngày thành lập: 04/03/2022</li>
              <li className={cx("footer-item")}>
                Lĩnh vực: Công nghệ, giáo dục, lập trình, xây dựng và phát
                triển những sản phẩm mang lại giá trị cho cộng đồng.
              </li>
            </ul>
          </div>
        </section>
        <section className={cx("row")}>
          <section className={cx("footer-bottom")}>
            <p className={cx("footer-copyright")}>
              © 2022 - 2023 E-learning. Nền tảng học lập trình hàng đầu Việt Nam
            </p>
            <div className="social-list">
              <a
                className="Footer_social-item__GydUc social-item-first Footer_youtube__p9tJ3"
                href="https://www.youtube.com/c/F8VNOfficial"
                title="F8 trên Youtube"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  width="28px"
                  height="32px"
                >
                  <linearGradient
                    id="PgB_UHa29h0TpFV_moJI9a"
                    x1="9.816"
                    x2="41.246"
                    y1="9.871"
                    y2="41.301"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#f44f5a" />
                    <stop offset=".443" stopColor="#ee3d4a" />
                    <stop offset="1" stopColor="#e52030" />
                  </linearGradient>
                  <path
                    fill="url(#PgB_UHa29h0TpFV_moJI9a)"
                    d="M45.012,34.56c-0.439,2.24-2.304,3.947-4.608,4.267C36.783,39.36,30.748,40,23.945,40	c-6.693,0-12.728-0.64-16.459-1.173c-2.304-0.32-4.17-2.027-4.608-4.267C2.439,32.107,2,28.48,2,24s0.439-8.107,0.878-10.56	c0.439-2.24,2.304-3.947,4.608-4.267C11.107,8.64,17.142,8,23.945,8s12.728,0.64,16.459,1.173c2.304,0.32,4.17,2.027,4.608,4.267	C45.451,15.893,46,19.52,46,24C45.89,28.48,45.451,32.107,45.012,34.56z"
                  />
                  <path
                    d="M32.352,22.44l-11.436-7.624c-0.577-0.385-1.314-0.421-1.925-0.093C18.38,15.05,18,15.683,18,16.376	v15.248c0,0.693,0.38,1.327,0.991,1.654c0.278,0.149,0.581,0.222,0.884,0.222c0.364,0,0.726-0.106,1.04-0.315l11.436-7.624	c0.523-0.349,0.835-0.932,0.835-1.56C33.187,23.372,32.874,22.789,32.352,22.44z"
                    opacity=".05"
                  />
                  <path
                    d="M20.681,15.237l10.79,7.194c0.689,0.495,1.153,0.938,1.153,1.513c0,0.575-0.224,0.976-0.715,1.334	c-0.371,0.27-11.045,7.364-11.045,7.364c-0.901,0.604-2.364,0.476-2.364-1.499V16.744C18.5,14.739,20.084,14.839,20.681,15.237z"
                    opacity=".07"
                  />
                  <path
                    fill="#fff"
                    d="M19,31.568V16.433c0-0.743,0.828-1.187,1.447-0.774l11.352,7.568c0.553,0.368,0.553,1.18,0,1.549	l-11.352,7.568C19.828,32.755,19,32.312,19,31.568z"
                  />
                </svg>{" "}
              </a>
              <a
                className="Footer_social-item__GydUc Footer_facebook__9kuWE"
                href="https://www.facebook.com/groups/f8official"
                title="F8 trên Facebook"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  width="28px"
                  height="28px"
                >
                  <linearGradient
                    id="awSgIinfw5_FS5MLHI~A9a"
                    x1="6.228"
                    x2="42.077"
                    y1="4.896"
                    y2="43.432"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#0d61a9" />
                    <stop offset="1" stopColor="#16528c" />
                  </linearGradient>
                  <path
                    fill="url(#awSgIinfw5_FS5MLHI~A9a)"
                    d="M42,40c0,1.105-0.895,2-2,2H8c-1.105,0-2-0.895-2-2V8c0-1.105,0.895-2,2-2h32	c1.105,0,2,0.895,2,2V40z"
                  />
                  <path
                    d="M25,38V27h-4v-6h4v-2.138c0-5.042,2.666-7.818,7.505-7.818c1.995,0,3.077,0.14,3.598,0.208	l0.858,0.111L37,12.224L37,17h-3.635C32.237,17,32,18.378,32,19.535V21h4.723l-0.928,6H32v11H25z"
                    opacity=".05"
                  />
                  <path
                    d="M25.5,37.5v-11h-4v-5h4v-2.638c0-4.788,2.422-7.318,7.005-7.318c1.971,0,3.03,0.138,3.54,0.204	l0.436,0.057l0.02,0.442V16.5h-3.135c-1.623,0-1.865,1.901-1.865,3.035V21.5h4.64l-0.773,5H31.5v11H25.5z"
                    opacity=".07"
                  />
                  <path
                    fill="#fff"
                    d="M33.365,16H36v-3.754c-0.492-0.064-1.531-0.203-3.495-0.203c-4.101,0-6.505,2.08-6.505,6.819V22h-4v4	h4v11h5V26h3.938l0.618-4H31v-2.465C31,17.661,31.612,16,33.365,16z"
                  />
                </svg>
              </a>{" "}
              <a
                className="Footer_social-item__GydUc Footer_tiktok__OiXpU"
                href="https://www.tiktok.com/@f8official"
                title="F8 trên Tiktok"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 80 80"
                  width="28px"
                  height="28px"
                >
                  <path
                    fill="#b0c1d4"
                    d="M14.172,4.5h51.654c5.343,0,9.674,4.331,9.674,9.672v51.654c0,5.343-4.331,9.674-9.672,9.674H14.172 c-5.341,0-9.672-4.331-9.672-9.672V14.172C4.5,8.831,8.831,4.5,14.172,4.5z"
                  />
                  <path
                    fill="#66798f"
                    d="M65.828,76H14.172C8.563,76,4,71.437,4,65.828V14.172C4,8.563,8.563,4,14.172,4h51.654 C71.436,4,76,8.563,76,14.172v51.654C76,71.436,71.437,76,65.828,76z M14.172,5C9.114,5,5,9.114,5,14.172v51.656 C5,70.886,9.114,75,14.172,75h51.656C70.886,75,75,70.885,75,65.826V14.172C75,9.114,70.885,5,65.826,5H14.172z"
                  />
                  <path
                    fill="#ffb5d2"
                    d="M50.271,33.308c3.108,2.221,6.917,3.526,11.029,3.526v-7.911c-0.779,0-1.554-0.081-2.315-0.243 v6.226c-4.112,0-7.918-1.308-11.029-3.526v16.141c0,8.074-6.55,14.62-14.628,14.62c-3.014,0-5.816-0.911-8.143-2.473 c2.657,2.714,6.36,4.398,10.459,4.398c8.078,0,14.628-6.546,14.628-14.62V33.308L50.271,33.308z M53.129,25.329 c-1.588-1.734-2.631-3.976-2.858-6.455v-1.018h-2.195C48.628,21.006,50.514,23.698,53.129,25.329L53.129,25.329z M30.295,53.474 c-0.888-1.164-1.367-2.586-1.365-4.049c0-3.694,2.996-6.688,6.692-6.688c0.688,0,1.373,0.105,2.029,0.314v-8.086 c-0.767-0.105-1.54-0.15-2.315-0.134v6.293c-0.657-0.209-1.341-0.314-2.031-0.314c-3.696,0-6.692,2.994-6.692,6.688 C26.615,50.112,28.111,52.374,30.295,53.474z"
                  />
                  <path
                    fill="#fff"
                    d="M47.956,31.381c3.108,2.221,6.917,3.526,11.029,3.526v-6.226c-2.296-0.489-4.327-1.688-5.856-3.355	c-2.615-1.631-4.499-4.321-5.051-7.471h-5.765v31.591c-0.014,3.682-3.004,6.664-6.692,6.664c-2.173,0-4.104-1.035-5.327-2.639	c-2.183-1.101-3.68-3.363-3.68-5.974c0-3.694,2.996-6.688,6.692-6.688c0.708,0,1.39,0.11,2.031,0.314v-6.291	c-7.936,0.164-14.318,6.644-14.318,14.616c0,3.98,1.59,7.587,4.169,10.222c2.327,1.562,5.13,2.473,8.143,2.473	c8.078,0,14.628-6.546,14.628-14.62L47.956,31.381L47.956,31.381z"
                  />
                  <path
                    fill="#b5ddf5"
                    d="M58.985,28.683v-1.684c-2.071,0.004-4.098-0.576-5.856-1.672 C54.683,27.029,56.73,28.202,58.985,28.683z M48.076,17.856c-0.053-0.302-0.093-0.604-0.12-0.909v-1.018h-7.96v31.593 c-0.012,3.682-3.004,6.664-6.692,6.664c-1.083,0-2.104-0.256-3.01-0.714c1.223,1.603,3.154,2.639,5.327,2.639 c3.688,0,6.678-2.982,6.692-6.664V17.856H48.076z M35.336,34.833V33.04c-0.665-0.091-1.335-0.136-2.008-0.136 c-8.08,0-14.628,6.546-14.628,14.62c0,5.063,2.574,9.524,6.485,12.147c-2.58-2.635-4.169-6.242-4.169-10.222 C21.015,41.477,27.399,34.996,35.336,34.833z"
                  />
                  <path
                    fill="#66798f"
                    d="M47.956,15.929v1.018c0.028,0.306,0.067,0.607,0.12,0.909h0.002h2.193v1.018	c0.227,2.477,1.268,4.717,2.854,6.45c0.001,0.001,0.003,0.002,0.004,0.003c1.751,1.093,3.771,1.672,5.834,1.672	c0.007,0,0.014,0,0.021,0v1.682c0.761,0.162,1.536,0.243,2.315,0.243v7.911c-4.112,0-8.129-1.306-11.237-3.526v16.139	c0,8.074-6.341,14.62-14.419,14.62c-4.091,0-7.788-1.678-10.444-4.383c0.041,0.036,0.055,0.049,0.056,0.049	c0.001,0-0.071-0.064-0.071-0.064c0.005,0.005,0.01,0.01,0.015,0.015c-0.005-0.004-0.01-0.009-0.015-0.013	c-3.911-2.623-6.485-7.084-6.485-12.147c0-8.074,6.548-14.557,14.628-14.557c0.672,0,1.343,0.045,2.008,0.136v1.728	c0.1-0.002,0.201-0.003,0.301-0.003c0.674,0,1.347,0.046,2.014,0.137v8.086c-0.657-0.209-1.341-0.314-2.029-0.314	c-3.696,0-6.692,2.994-6.692,6.688c-0.002,1.462,0.477,2.883,1.363,4.046c0,0,0.001,0,0.001,0.001	c0.905,0.458,1.927,0.714,3.01,0.714c3.688,0,6.68-2.982,6.692-6.664V15.929H47.956 M39.033,15.033l-0.017,32.45	c-0.01,3.122-2.584,5.703-5.712,5.703c-0.824,0-1.614-0.17-2.351-0.507c-0.663-0.948-1.025-2.095-1.023-3.253	c0-3.138,2.553-5.689,5.692-5.689c0.59,0,1.171,0.09,1.726,0.266l1.303,0.415v-1.368v-8.086v-0.873l-0.865-0.118	c-0.481-0.065-0.966-0.109-1.45-0.131V33.04v-0.873l-0.865-0.055C34.765,32.016,34.044,32,33.328,32	C24.711,32,17.7,38.911,17.7,47.524c0,5.185,2.558,10.009,6.848,12.924C27.506,63.427,31.442,65,35.643,65	c8.617,0,15.368-6.992,15.336-15.573V35.123c3.067,1.734,6.758,2.711,10.32,2.711h1v-1v-7.911v-1h-1c-0.44,0-0.88-0.029-1.315-0.085	v-0.84L60,26.031l-1.001,0.001c-1.851,0-3.659-0.535-5.227-1.485c-1.432-1.607-2.295-3.582-2.5-5.721v-0.971v-1h-1h-1.315V15	L39.033,15.033z"
                  />
                </svg>
              </a>
            </div>
          </section>
        </section>
      </section>
    </footer>
  );
}

export default Footer;
