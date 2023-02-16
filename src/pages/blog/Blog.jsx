import classNames from "classnames/bind";
import styles from "./blog.module.scss";
import BlogItem from "./BlogItem";
const cx = classNames.bind(styles);
Blog.propTypes = {};

function Blog(props) {
  return (
    <section className={cx("container")}>
      <div className={cx("title")}>
        <h2>BLOG</h2>
      </div>
      <div className={cx("wrapper")}>
        <section className={cx("container-top")}>
          <h3>Bài viết nổi bật</h3>
          <p>
            Tổng hợp các bài viết chia sẻ về kinh nghiệm tự học lập trình online
            và các kỹ thuật lập trình web.
          </p>
        </section>

        <div className={cx("container-body")}>
          <section className={cx("row")}>
            <section
              className={cx("col", "s-12", "m-12", "l-8", "main-content")}
            >
              <div className={cx("blog-left")}>
                <BlogItem />
              </div>
            </section>
            <section className={cx("col", "s-12", "m-12", "l-4")}></section>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Blog;
