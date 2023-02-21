import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import avatar from "~/assets/vendor/instrutor5.2e4bd1e6.jpg";
import { halfStar, star } from "~/constants/rate";
import Title from "~/layouts/components/TitleLayout/TitleLayout";
import styles from "./courseDetail.module.scss";
import CourseSection from "./CourseSection";
import courseApi from "~/api/courseApi";

const cx = classNames.bind(styles);
CourseDetail.propTypes = {};

function CourseDetail(props) {
  let navigate = useNavigate();

  let courseDetail= ({});

  // const data = {
  //   course: {
  //     id: 4,
  //     title: "App Đừng Chạm Tay Lên Mặt",
  //     slug: "tool-canh-bao-so-len-mat",
  //     students_count: 6871,
  //     old_price: 500000,
  //     price: 400000,
  //     description:
  //       "Xây dựng ứng dụng đưa ra cảnh báo khi người dùng sờ tay lên mặt. Chúng ta sẽ sử dụng thư viện ReactJS & Tensoflow để hoàn thiện ứng dụng này.",
  //     image: "courses/4/61a9e9e701506.png",
  //     tracks: [
  //       {
  //         id: 14,
  //         course_id: 4,
  //         title: "Giới thiệu",
  //         position: 1,
  //         track_steps: [
  //           {
  //             track_id: 1,
  //             step: {
  //               id: 155,
  //               title: "Giới thiệu",
  //               duration: 238,
  //               image_url: "",
  //               video_url: null,
  //             },
  //           },
  //           {
  //             track_id: 14,
  //             step: {
  //               id: 170,
  //               title: "Demo AI hoạt động",
  //               duration: 22,
  //               image_url: "",
  //               video_url: null,
  //             },
  //           },
  //         ],
  //       },
  //       {
  //         id: 15,
  //         course_id: 4,
  //         title: "Xây dựng",
  //         position: 2,

  //         track_steps: [
  //           {
  //             track_id: 15,
  //             step: {
  //               id: 156,
  //               title: "Install NodeJS",
  //               duration: 191,
  //               image_url: "",
  //               video_url: null,
  //             },
  //           },
  //           {
  //             track_id: 16,
  //             step: {
  //               id: 157,
  //               title: "Create react app",
  //               duration: 367,
  //               image_url: "",
  //               video_url: null,
  //             },
  //           },
  //           {
  //             track_id: 17,
  //             step: {
  //               id: 158,
  //               title: "Install dependencies",
  //               duration: 576,
  //               image_url: "",
  //               video_url: null,
  //             },
  //           },
  //           {
  //             track_id: 18,
  //             step: {
  //               id: 159,
  //               title: "Build UI frame",
  //               duration: 282,
  //               image_url: "",
  //               video_url: null,
  //             },
  //           },
  //           {
  //             track_id: 19,
  //             step: {
  //               id: 162,
  //               title: "Import dependencies",
  //               duration: 385,
  //               image_url: "",
  //               video_url: null,
  //             },
  //           },
  //           {
  //             track_id: 20,
  //             step: {
  //               id: 163,
  //               title: "Setup camera",
  //               duration: 568,
  //               image_url: "",
  //               video_url: null,
  //             },
  //           },
  //         ],
  //       },
  //       {
  //         id: 114,
  //         course_id: 4,
  //         title: "Trainning functions",
  //         position: 3,

  //         track_steps: [
  //           {
  //             track_id: 114,
  //             step: {
  //               id: 164,
  //               title: "Train function",
  //               duration: 697,
  //               image_url: "",
  //               video_url: null,
  //             },
  //           },
  //           {
  //             track_id: 115,
  //             step: {
  //               id: 165,
  //               title: "Training function",
  //               duration: 477,
  //               image_url: "",
  //               video_url: null,
  //             },
  //           },
  //           {
  //             track_id: 116,
  //             step: {
  //               id: 166,
  //               title: "Running function",
  //               duration: 896,
  //               image_url: "",
  //               video_url: null,
  //             },
  //           },
  //           {
  //             track_id: 117,
  //             step: {
  //               id: 167,
  //               title: "Implement audio and notification",
  //               duration: 885,
  //               image_url: "",
  //               video_url: null,
  //             },
  //           },
  //           {
  //             track_id: 118,
  //             step: {
  //               id: 168,
  //               title: "Traning guide",
  //               duration: 74,
  //               image_url: "",
  //               video_url: null,
  //             },
  //           },
  //         ],
  //       },
  //     ],
  //     level: {
  //       id: 1,
  //       title: "Trình độ cơ bản",
  //       level: 1,
  //       created_at: null,
  //       updated_at: null,
  //     },
  //     image_url:
  //       "https://files.fullstack.edu.vn/f8-prod/courses/4/61a9e9e701506.png",
  //     will_learns: [
  //       {
  //         id: 15,
  //         course_id: 4,
  //         content: "Làm được tool cảnh báo khi sờ tay lên mặt",
  //       },
  //       {
  //         id: 16,
  //         course_id: 4,
  //         content: "Biết áp dụng làm tool có concept tương tự",
  //       },
  //       {
  //         id: 17,
  //         course_id: 4,
  //         content: "Làm quen với tư tưởng Máy học",
  //       },
  //       {
  //         id: 18,
  //         course_id: 4,
  //         content: "Biết thêm một số kỹ thuật với Javascript",
  //       },
  //       {
  //         id: 19,
  //         course_id: 4,
  //         content:
  //           "Xây dựng các ứng dụng web mạnh mẽ, nhanh chóng, thân thiện với người dùng và phản ứng nhanh",
  //       },
  //       {
  //         id: 20,
  //         course_id: 4,
  //         content:
  //           "  Đăng ký công việc được trả lương cao có thể tìm thấy trong web dev ngay bây giờ",
  //       },
  //     ],
  //     requirements: [],
  //     related_courses: [],
  //   },
  // };

  useEffect(() => {
    (async () => {
      const response = await courseApi.get(1);
      courseDetail(...response.data)
    })();
  }, []);
  
  const handleLogin = () => {
    let path = `/login`;
    navigate(path);
  };
  console.log(courseDetail);

  return (
    <>

<section className={cx("container")}>
      <Title title={"THÔNG TIN KHÓA HỌC"} />
      <div className={cx("wrapper")}>
        <div className={cx("row")}>
          <div className={cx("col", "s-12", "m-12", "l-8", "main-content")}>
            <div className={cx("title-detail")}>
              {/* <h4>LẬP TRÌNH FRONT-END CHUYÊN NGHIỆP</h4> */}
              <h4>{courseDetail.title}</h4>
            </div>{" "}
            <div className={cx("header-detail")}>
              <div className={cx("col", "c-4", "detail-course-info")}>
                <div>
                  <img src={courseDetail.author.avatar||''} alt="" />
                </div>
                <div className={cx("instrutor-title")}>
                  <p>Giảng viên</p>
                  <p className={cx("name")}>{courseDetail.author.name ||''}</p>
                </div>
              </div>
              <div className={cx("col", "c-4", "detail-course-info")}>
                <div>
                  <img
                    className={cx("graduation-cap")}
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGz0lEQVR4nO2aa0wUVxTHx9b0Q5s2TWr7oWmb9JW2SdMvfmvTEpnZBeYusOy9AyxvEETltaBABXkUpKiVtGqJgEoRaKmikoIohQquGBv7jLWKj2qMiiKIfQiWIuxp7sCug8zIArvs1s4vOclmM/fO/Z8795xz7wzDqKioqKioqKioqKioqMwNnF/ws5yPEMIhsoIai0ioh3fAc8yDzNt+fo9zPiSW4/FRDhGQMxaR7zkkLPPw93+SeUCY54nwuxxPqliEB5SETzIe3+Z4XKvxETzz8vIeYv6LjziLyCqWJ2flBGr8gkGfuAaC83dA8AfVEJBcBFp/o/xTweMLHC/kcjrhBcadEQThYRYZOBaRXRzCw3JiUEQKhK1vgKQDf0DqYZhgyW2DELmpDfziVys5YpRDpI1FJEKn0z3KuAtaneF1FpG1LCLX5QauNYQDydwEcdXHJ4lWsmV7L4GxsBa8hBiFJUJ+5xAu1yJhoUtEe3uHPkFngs6I0jr2XZwhzmjKwSG7hd9rpo5hiKk4CoaUYtD4BinEDHySQzjTQ2dc4HThWiQspJ5XCmg+QXHizCU0XpuxaCVLbO4Xlw8KS1DKIEN0+Wl0Bl+6HB2bsxHOZHl8Timg0RmiM2U6NOJw4ZPMbIElX3RBYHYZaPWhSlnkytiyNLw0I9GCIDxCPTkW0MgduZvoIk3ijCS3/Ol80QpmT+BkETnCImGJRhP22JTCtb7CKyyPP+F43CfXoReOhKCcrbB013mXiVYMnHsuQlBuJXiT6PsFzlKOD3pDVjyLSATL438mNdQJoE8ogOiyTkhpH3a50KnM1HFHXI60tuB0gXLOuMMhIWXSOmcRGZJeyIcsg5DinZDY1OtyUTO1xOYbELp2j1zgtHj64rdsDtDwOMy2tqPSIJbmbLPF5QIcGjhrfwX/JdnS9JklffxD71ZrybB4+3dg6piDiD7HFl7SKA2QG2wO8PYWnmZ5MjghpwfGgrGgBpY3dLt84A6yEWNhzSlZB1BYHwNWKnD841dDVGnHrKo6V5nJDN0mM6xdYYYXx88f5B1AoYcSHMKFHCKXZdNgQDgIWVsgvu6M2892qhna0jpByOuA+bZgP5UDrNBSkkMGnkNkt2xqtBZCJU2uL4Q2t0FgdgWQjE0QXd7ZnWoezU8zw/OMDHY7QIoYH3RCGofIeaVSGKdtgNjPfoJU86jzhZstEFd7QhSs9Q+RK4NLGAVm5AArLML5Sjs/W+AMjoeQojpIaOxxuPDEfX0QWlwPfMjy+46B2oQc7wwHlG+vhpa2dkhJl6/BafXovzwfossOz6p6pG1jyjohIKFA7FPuXvFJK2HvV82QV7hekuJIkqwGniRJ6oDiGTtgx+c7wcqly1egorIaAsNiZQfoZYiEwJxtsLTe/v0D3WvQPQfde8j1GRAcBZ+WbYdzv12wjYOOyeYAhPPlNIwH+dM0yGtQwJsOcYCV0dFR+PHn41BQXALe/vKHF/poE4TTI7Gv/5oc0FoHxJ2db0y6bFuNToCM7AJoPXgIhoaGJt3fHgfMCnYKB0i50X8T6nY1QGRcknys0BshNn0NxBVVgTG/SnzEaTCVuzYiNgFq63ZDb9+N+97TrRxgxWKxwC8nTsK6ks2ADAqHF3IpFoeKbY6fOCn2YQ9u6QApAwOD0LS/FRJT31cUnrIyG/a3fAODg7dhuri9A6TQx7n9UCfUNzSJ1m4+Av39N2E22OmAeXTnS43+ZlzlAGdgjwM4Xgi/WzAJ4f87B0g1THuZsKoDcI7Ve1U1X4K7Qcckmd0c2SWAcJbsiZA9sDxOtjamVZi7sXnLtilL4fFT7wvU6G9mOnjqDHrrDdIyc8HdSM3IkaRUwY9xNBpNwDPjb2jByy8Irvf2gbvQ09MLWt+xI3A6RrqFZ5wBy5MWq5fziz6yu0pzJnQMuYXrpI9/M+MsNLzhPXqmbr1ZaXmluAlyFSMjI7CxtEJaTVo0PoZ3GGfCIbJRWr4mr8iCrjPn5lx81+mzkJi2akIpzfL4Y8bZCPS8kMd199bxpvTVYlnbfbXHaaK7r16D+r2N8gcxPK516GvxKZhH8+i9r9OsFhK1FLLyPoStlTVwoPUgfHvsBzjVdUYUcOvWgGjSPT39bf2fXkOvpW1oW9pHVl4RGCPjFTZR+G/6+n7atb0j4JDhVRbhaqVvgpxreJh+fbbIO+hlxtV46IwLWIQjWUT2TOtzuOkaj2+JR/X0TbZe/xTjjnh4eMxf5CW85okEwvEkj+PxDpqaOB4f4xC5yCJ8k5r4LeBdYbdt/yNycexavI/OMO2DvrWifc7lGldRUVFRUVFhHnj+BYip33TgrRGcAAAAAElFTkSuQmCC"
                    alt="graduated"
                  />
                </div>
                <div className={cx("instrutor-title")}>
                  <p>Lĩnh vực</p>
                  <p className={cx("name")}>Lập trình Backend </p>
                </div>
              </div>
              <div className={cx("col", "c-4", "detail-course-info")}>
                <div className={cx("review-detail")}>
                  <span>
                    {star}
                    {star}
                    {star}
                    {star}
                    {halfStar}
                    4.5
                  </span>
                  <p>100 đánh giá</p>
                </div>
              </div>
            </div>
            {/* <p className={cx("text-desc")}>{data.course.description}</p> */}
            <div className={cx("course-learn")}>
              <h6>Những gì bạn sẽ học</h6>
              <div className={cx("row")}>
                <ul className={cx("col", "c-12")}>
                  {/* {data.course.will_learns.map((learn) => (
                    <li key={learn.id}>{learn.content} </li>
                  ))} */}
                </ul>
              </div>
            </div>
            <div className={cx("course-content")}>
              <h6>Nội dung khóa học</h6>
              <div className={cx("course-detail-item")}>
                {/* {sectionNameList.map((sessionName) => (
                 
                ))} */}
                <div className={cx("course-detail-content")}>
                  {/* <CourseSection tracks={data.course.tracks} /> */}
                </div>
              </div>
            </div>
          </div>
          <div className={cx("col", "s-12", "m-12", "l-4")}>
            <div className={cx("sidebar-course-detail")}>
              {/* <img src={data.course.image_url} alt={data.course.slug} /> */}
              <div className={cx("course-price")}>
                <div className={cx("course-price-normal")}>
                  <span>
                    {new Intl.NumberFormat("de-DE").format(
                      // data.course.old_price
                    )}
                    <sup>đ</sup>
                  </span>
                </div>
                <div className={cx("course-price-sale")}>
                  <span>
                    {/* {new Intl.NumberFormat("de-DE").format(data.course.price)} */}
                    <sup>đ</sup>
                  </span>
                </div>
              </div>
              <div className={cx("course-buy-btn")}>
                <button onClick={handleLogin}>Đăng ký</button>
              </div>
              <div className={cx("detail-content")}>
                <ul>
                  <li>
                    <p>Ghi danh:</p>
                    <p>
                      <span> {courseDetail.students_count} học viên</span>
                    </p>
                  </li>
                  <li>
                    <p> Thời gian:</p>

                    <p>
                      <span> 18 giờ</span>
                    </p>
                  </li>
                  <li>
                    <p>Bài học:</p>
                    <p>
                      <span> 10</span>
                    </p>
                  </li>
                  <li>
                    <p>Video:</p>
                    <p>
                      <span> 14</span>
                    </p>
                  </li>
                  <li>
                    <p>Trình độ:</p>
                    <p>
                      {/* <span> {data.course.level.title}</span> */}
                    </p>
                  </li>
                </ul>
              </div>
              <form action="" className={cx("form-coupon")}>
                <input type="text" placeholder="Nhập mã" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>   
  
  </>
  );

}

export default CourseDetail;
