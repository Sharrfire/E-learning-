import classNames from "classnames/bind";
import styles from "./blogItem.module.scss";
const cx = classNames.bind(styles);
BlogItem.propTypes = {
    
};

function BlogItem(props) {
    return (
        <div>
             <div className={cx("post-item-wrapper")}>
                  <div className={cx("post-item-header")}>
                    <div className={cx("post-item-author")}>
                      <a href="#!">
                        <div className={cx("fallback-avatar")}>
                          <img
                            src="https://files.fullstack.edu.vn/f8-prod/user_avatars/256991/63b63dc6657a1.jpg"
                            alt="Vịt Vịt"
                          />
                        </div>
                      </a>
                      <a href="#!">
                        <span>Vịt Vịt</span>
                      </a>
                    </div>
                  </div>
                  <div className={cx("post-item-body")}>
                    <div className={cx("post-item-info")}>
                      <a href="/blog/lap-trinh-web-la-gi-ky-nang-nao-lap-trinh-vien-web-can-co.html">
                        <h2 className={cx("post-item-title")}>
                          Lập trình web là gì? Kỹ năng nào lập trình viên web
                          cần có?&nbsp;
                        </h2>
                      </a>
                      <p className={cx("post-item-desc")}>
                        Dạo trên các cộng đồng, chúng ta đều thấy mọi người nói
                        rằng “lập trình viên website đang rất hot và không sợ
                        thất nghiệp”, vậy...
                      </p>
                      <div className={cx("post-item-info")}>
                        <a className={cx("post-item-tags")} href="#!">
                          Front-end
                        </a>  <a className={cx("post-item-tags")} href="#!">
                          Front-end
                        </a>
                        <span>một ngày trước</span>
                        <span className={cx("post-item-dot")}>·</span>
                        <span>6 phút đọc</span>
                      </div>
                    </div>
                    <div className={cx("post-item-thumb")} >
                      <a href="https://fullstack.edu.vn/blog/lap-trinh-web-la-gi-ky-nang-nao-lap-trinh-vien-web-can-co.html">
                        <img
                          src="https://files.fullstack.edu.vn/f8-prod/blog_posts/6484/63ec92953fb9b.jpg"
                          alt="Lập trình web là gì? Kỹ năng nào lập trình viên web cần có?&nbsp;"
                        />
                      </a>
                    </div>
                  </div>
               
               
                </div>
        </div>
    );
}

export default BlogItem;