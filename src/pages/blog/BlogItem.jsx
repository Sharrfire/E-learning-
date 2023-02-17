import classNames from "classnames/bind";
import styles from "./blogItem.module.scss";
const cx = classNames.bind(styles);
BlogItem.propTypes = {};

function BlogItem(props) {
  const { desc, title, image_url, user, min_read, tags } = props;
  return (
    <div>
      <div className={cx("post-item-wrapper")}>
        <div className={cx("post-item-header")}>
          <div className={cx("post-item-author")}>
            <a href="#!">
              <div className={cx("fallback-avatar")}>
                <img src={user.avatar_url} alt={user.full_name} />
              </div>
            </a>
            <a href="#!">
              <span>{user.full_name}</span>
            </a>
          </div>
        </div>
        <div className={cx('row',"post-item-body")}>
          <div className={cx('col','s-12','m-12','l-8',"post-item-info")}>
            <a href="/blog/lap-trinh-web-la-gi-ky-nang-nao-lap-trinh-vien-web-can-co.html">
              <h2 className={cx("post-item-title")}>{title}</h2>
            </a>
            <p className={cx("post-item-desc")}>{desc}</p>
            <div className={cx("post-item-info")}>
              {tags?.map((tag) => {
                  return (
                    <a key={tag.id} className={cx("post-item-tags")} href="#!">
                      {tag.name}
                    </a>
                  );
              })}

              <span>một ngày trước</span>
              <span className={cx("post-item-dot")}>·</span>
              <span>{min_read} phút đọc</span>
            </div>
          </div>
          <div className={cx('col','s-12','m-12', 'l-4',"post-item-thumb")}>
            <a href="https://fullstack.edu.vn/blog/lap-trinh-web-la-gi-ky-nang-nao-lap-trinh-vien-web-can-co.html">
              <img src={image_url} alt={title} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogItem;
