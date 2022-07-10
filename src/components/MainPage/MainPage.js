import { Link } from "react-router-dom";
import {
    SHOP
} from "../../routes/routes";
//import MainShop from "../MainShop/MainShop";
import styles from "./MainPage.module.scss";
import Banner from '../../assets/images/Banner.png';
import Food1 from "../../assets/images/food-1.jpg";
import Drink1 from "../../assets/images/drink-1.jpg";

const fakeData = [
    { name: "fasdfas", image: Food1, price: 450, id: 121, id2: 224 },
    { name: "fasdfas", image: Drink1, price: 450, id: 122, id2: 244 },
    { name: "fasdfas", image: Food1, price: 450, id: 123, id2: 235 },
    { name: "fasdfas", image: Drink1, price: 450, id: 124, id2: 264 },
    { name: "fasdfas", image: Food1, price: 450, id: 125, id2: 234 }
];

const MainPage = () => {


    return (
        <div>
            <div className={styles.bannerContainer}>
                <Link to={SHOP}>
                    <img className={styles.bannerImg} src={Banner} alt="" />
                </Link>
            </div>

            <section className={styles.new}>
                <h2>Lo Nuevo</h2>
                <ul className={styles.list}>
                    {fakeData.map(({ name, image, price, id }) =>
                        <li className={styles.listItem} key={id}>
                            <a href="home">
                                <p>{name}</p>
                                <img src={image} alt="" />
                                <p>${price}</p>
                            </a>
                        </li>)}
                </ul>
            </section>

            <section className={styles.popular}>
                <h2>Lo Mas Popular</h2>
                <ul className={styles.list}>
                    {fakeData.map(({ name, image, price, id2 }) =>
                        <li className={styles.listItem} key={id2}>
                            <a href="home">
                                <p>{name}</p>
                                <img src={image} alt="" />
                                <p>${price}</p>
                            </a>
                        </li>)
                    }
                </ul>
            </section>
        </div>
    );
}

export default MainPage;