import classNames from "classnames/bind";
import styles from "./title.module.scss";

const cx = classNames.bind(styles);
TitleLayout.propTypes = {
    
};

function TitleLayout({title}) {
    return (
        <div className={cx("title")}>
        <h2>{title}</h2>
      </div>
    );
}

export default TitleLayout;