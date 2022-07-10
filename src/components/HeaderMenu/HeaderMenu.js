import { Link, NavLink } from "react-router-dom";
import {
    HOME,
    SHOP,
    ADMINUPLOAD,
    CREATEUSER,
} from "../../routes/routes";
import styles from "./HeaderMenu.module.scss";
//import Logo from '../../assets/images/Logo.png';
import Cart from '../../assets/images/Cart.png';

const HeaderMenu = () => {
    return (
        <header className={styles.container}>
            <nav className={styles.nav} >
                <ul className={styles.menuNav}>
                    <li className={styles.menuNavItem}>
                        <NavLink
                            to={HOME}
                            className={({ isActive }) =>
                                isActive ? styles.activeStyle : undefined
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className={styles.menuNavItem}>
                        <NavLink
                            to={SHOP}
                            className={({ isActive }) =>
                                isActive ? styles.activeStyle : undefined
                            }
                        >
                            Shop
                        </NavLink>
                    </li>
                    <li className={styles.menuNavItem}>
                        <NavLink
                            to={"HOME"}
                            className={({ isActive }) =>
                                isActive ? styles.activeStyle : undefined
                            }
                        >
                            Contact Us
                        </NavLink>
                    </li>
                    <li className={styles.menuNavItem}>
                        <Link to={ADMINUPLOAD} className={styles.menuNavLinke}> Upload </Link>
                    </li>
                </ul>
            </nav>

            <div className={styles.logo}>
                {/* <img src={Logo} alt="" /> */}
                {/* Imagen del Logo */}
                <h1>Store-05</h1>
            </div>

            <div className={styles.menuRight}>
                <ul className={styles.menuRightItems}>
                    <li className={styles.menuRightItem}>
                        <NavLink
                            to={"HOME"}
                            className={({ isActive }) =>
                                isActive ? styles.activeStyle : undefined
                            }
                        >
                            Sign In
                        </NavLink>
                    </li>
                    <li className={styles.menuRightItem}>
                        <NavLink
                            to={CREATEUSER}
                            className={({ isActive }) =>
                                isActive ? styles.activeStyle : undefined
                            }
                        >
                            Create Account
                        </NavLink>
                    </li>
                    <li className={styles.menuRightItem}>
                        <NavLink
                            to={"HOME"}
                            className={({ isActive }) =>
                                isActive ? styles.activeStyle : undefined
                            }
                        >
                            <img src={Cart} alt="" />
                        </NavLink>
                    </li>
                </ul>

            </div>
        </header >
    );
}

export default HeaderMenu;