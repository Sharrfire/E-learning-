import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import Title from "~/layouts/components/TitleLayout/TitleLayout";
import styles from "./blog.module.scss";
import BlogItem from "./BlogItem";

const cx = classNames.bind(styles);
Blog.propTypes = {};

function Blog(props) {
  const [blogList, setBlogList] = useState([]);
  const BASE_URL =
    "https://e-learning-976fe-default-rtdb.asia-southeast1.firebasedatabase.app/";
  useEffect(() => {
    (async () => {
      const response = await fetch(BASE_URL + "blog.json");
      var blogListData = await response.json();
      setBlogList([...blogListData.data]);
    })();
  }, []);
  return (
    <section className={cx("container")}>
      <Title title={"blog"} />
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
              className={cx(
                "col",
                "s-12",
                "m-12",
                "m-o-1",
                "l-8",
                "l-o-0",
                "main-content"
              )}
            >
              <div className={cx("blog-left")}>
                {blogList.map((blog) => (
                  <BlogItem key={blog.id} {...blog} />
                ))}
              </div>
            </section>
            <section
              className={cx(
                "col",
                "s-12",
                "m-12",
                "m-o-1",
                "l-4",
                "l-o-0",
                "main-content"
              )}
            >
              <div className={cx("topic-list-wrapper")}>
                <h3>Các chủ đề được đề xuất</h3>
                <ul className={cx("topics-list")}>
                  <li>
                    <a href="#!">Front-end / Mobile apps</a>
                  </li>
                  <li>
                    <a href="#!">Back-end / Devops</a>
                  </li>{" "}
                  <li>
                    <a href="#!">Back-end / Devops</a>
                  </li>{" "}
                  <li>
                    <a href="#!">Back-end / Devops</a>
                  </li>
                  <li>
                    <a href="#!">UI / UX / Design</a>
                  </li>
                  <li>
                    <a href="#!">Others</a>
                  </li>
                </ul>
              </div>
            </section>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Blog;
