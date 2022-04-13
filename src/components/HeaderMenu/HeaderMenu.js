import { Link } from "react-router-dom";
import styles from "./HeaderMenu.module.scss";
import {
    HOME,
    REMERAINFO,
    ADMINUPLOAD
} from "../../routes/routes";

const HeaderMenu = () => {
    return (
        <header>
            <div className={styles.menuLeft}>
                <nav>
                    <ul className={styles.menuNav}>
                        <li className={styles.menuNavItem}>
                            <Link to={HOME} className={styles.menuNavLinke}> Home </Link>
                        </li>
                        <li className={styles.menuNavItem}>
                            <Link to={ADMINUPLOAD} className={styles.menuNavLinke}> Upload </Link>
                        </li>
                        {/* <li className={styles.menuNavItem}>
                            <Link to="/" className={styles.menuNavLinke}> About </Link>
                        </li>
                        <li className={styles.menuNavItem}>
                            <Link to="/" className={styles.menuNavLinke}> Contact Me </Link>
                        </li> */}
                    </ul>
                </nav>
            </div>

            <div className={styles.menuCenter}>
            <h1>Te cuento el Lore?</h1>
            </div>

            <div className={styles.menuRight}>
                <h3>Carrito</h3>
            </div>
        </header>
    );
}

export default HeaderMenu;