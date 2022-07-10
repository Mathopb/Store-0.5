import { generatePath, Link } from "react-router-dom";
import { Fragment } from "react";
import {
    COMIDASHOP,
    BEBIDAS,
    ARTICLELIST
} from "../../routes/routes";
import styles from "./MainShop.module.scss";
import Food1 from "../../assets/images/food-1.jpg";
import Drink1 from "../../assets/images/drink-1.jpg";
import { DRINKS, FOODS } from "../../constants/collections";

const MainShop = () => {
    return (
        <Fragment>

            <div className={styles.shopContainer}>
                <div className={styles.shopMenu}>
                    <Link className={styles.shopLink} to={generatePath(ARTICLELIST, { collectionName: FOODS })} >
                        <h3>Comidas</h3>
                        <img className={styles.shopImg} src={Food1} alt="" />
                    </Link>
                </div>
                <div className={styles.shopMenu}>
                    <Link className={styles.shopLink} to={generatePath(ARTICLELIST, { collectionName: DRINKS })} >
                        <h3>Bebidas</h3>
                        <img className={styles.shopImg} src={Drink1} alt="" />
                    </Link>
                </div>
                <div className={styles.shopMenu}>
                    <Link className={styles.shopLink} to={COMIDASHOP} >
                        <h3>Comidas</h3>
                        <img className={styles.shopImg} src={Food1} alt="" />
                    </Link>
                </div>
                <div className={styles.shopMenu}>
                    <Link className={styles.shopLink} to={BEBIDAS} >
                        <h3>Bebidas</h3>
                        <img className={styles.shopImg} src={Drink1} alt="" />
                    </Link>
                </div>
                <div className={styles.shopMenu}>
                    <Link className={styles.shopLink} to={COMIDASHOP} >
                        <h3>Comidas</h3>
                        <img className={styles.shopImg} src={Food1} alt="" />
                    </Link>
                </div>
            </div>

        </Fragment>
    );
}

export default MainShop;