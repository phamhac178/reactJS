import classNames from "classnames/bind";
import Sidebar from "./Sidebar/index";
import styles from "./DefaultLayoutmodule.scss";
import Header from "../components/Header";

function DefaultLayout({ children }) {
    const cx = classNames.bind(styles);

    return (
        <div className={"wrapper"}>
            <Header />
            <div className={cx("container")}>
                <Sidebar />
                <div className={cx("content")}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
