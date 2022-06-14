import styles from "./Headermodule.scss";
import classNames from "classnames";

const cx = classNames.bind(styles);
function Header() {
    return (
        <Header className={cx("wrapper")}>
            <div className={cx("inner")}>
                {/**logo */}
                {/**search */}
            </div>
        </Header>
    );
}

export default Header;
