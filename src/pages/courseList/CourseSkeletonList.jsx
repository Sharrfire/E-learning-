import { Skeleton } from "@mui/material";
import classNames from "classnames/bind";
import styles from "./courseList.module.scss";

CourseSkeletonList.propTypes = {};
const cx = classNames.bind(styles);

function CourseSkeletonList({ length }) {
    return (
        <div className={cx("row", "courses-list")}>
            {Array.from(new Array(length)).map((x, index) => (
                <div
                    className={cx(
                        "col",
                        "s-12",
                        "m-12",
                        "ml-4",
                        "l-3",
                        "card-global-res"
                    )}
                    style={{ display: "flex", flex: "auto" }}
                    key={index}
                >
                    <div href="" className={cx("card-global")} style={{ borderRadius: '0px' }}>
                        <Skeleton variant="rectangular" width={278} height={185} />
                        <div className={cx("card-body-global")}>
                        <Skeleton variant="text" sx={{ fontSize: '1.6rem' }} />
                        <Skeleton variant="text" sx={{ fontSize: '1.6rem' }} />
                            {/* <Skeleton variant="rounded" width={238} height={74} /> */}
                            <Skeleton variant="rounded" width={160} height={40} style={{ marginTop: '52px' }} />
                        </div>
                        <Skeleton variant="rounded" width={278} height={60} />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CourseSkeletonList;
