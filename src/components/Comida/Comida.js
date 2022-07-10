import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../Firebase/FirebaseConfig';
import { useParams } from "react-router-dom";
import styles from "./Comida.module.scss";

const Comida = () => {

    const { collectionName, nameorid } = useParams();
    const colName = collectionName.charAt(0).toUpperCase() + collectionName.slice(1);


    const [comidaInfo, setcomidaInfo] = useState({
        nombre: '',
        imagen: '',
        ingredientes: ''
    });
    const [quantity, setQuantity] = useState(1);

    console.log(nameorid);
    console.log('nombre colleccion', collectionName);

    useEffect(() => {

        const obtenerDatos = async () => {

            const data = await query(collection(db, colName), where("nombre", "==", nameorid));
            const documentos = await getDocs(data);
            const information = [];
            documentos.forEach((doc) => {
                console.log(doc.id, "=>", doc.data());
                information.push(doc.data());
            });
            const doc = information[0];
            setcomidaInfo({
                nombre: doc.nombre,
                imagen: doc.imagen,
                ingredientes: doc.ingredientes
            });
        }

        obtenerDatos();

    }, [nameorid]);

    const handleTalle = (e) => {
        console.log(e.target.value);
    }

    const increaseItem = () => {
        setQuantity(prevCount => prevCount + 1)
    }

    const decreaseItem = () => {
        if (quantity > 1) {

            setQuantity(prevCount => prevCount - 1)
        }
    }

    const { nombre, imagen } = comidaInfo;

    return (
        <div className={styles.mainContainer}>
            {/* <h1>{nombre}</h1>
            <img src={imagen} alt="" />
            <p>{ingredientes}</p> */}
            <div />
            <div>
                <div className={styles.mainContent}>
                    <div className={styles.imgContainer}>
                        <img
                            src={imagen}
                            alt=""
                        />
                    </div>
                    <div className={styles.options}>
                        <p>home/shop/comidas</p>
                        <h2>{nombre}</h2>
                        <p>Precio: $450</p>
                        <h4>Elige tu Talla</h4>
                        <ul className={styles.talles} role="radiogroup" onChange={handleTalle}>
                            <li>
                                <input className={styles.talleInput} id="xs" type="radio" name="talle" value="xs" />
                                <label htmlFor="xs">XS</label>
                            </li>
                            <li>
                                <input className={styles.talleInput} id="s" type="radio" name="talle" value="s" />
                                <label htmlFor="s">S</label>
                            </li>
                            <li>
                                <input className={styles.talleInput} id="m" type="radio" name="talle" value="m" />
                                <label htmlFor="m">M</label>
                            </li>
                            <li>
                                <input className={styles.talleInput} id="l" type="radio" name="talle" value="l" />
                                <label htmlFor="l">L</label>
                            </li>
                            <li>
                                <input className={styles.talleInput} id="xl" type="radio" name="talle" value="xl" />
                                <label htmlFor="xl">XL</label>
                            </li>
                            <li>
                                <input className={styles.talleInput} id="xxl" type="radio" name="talle" value="xxl" />
                                <label htmlFor="xxl">XXL</label>
                            </li>
                        </ul>
                        <h3>Cuanta cantidad?</h3>
                        <div className={styles.quantityItems}>
                            <input className={styles.minusBtn} type="button" onClick={decreaseItem} value="-" />
                            <label>{quantity}</label>
                            <input className={styles.plusBtn} type="button" onClick={increaseItem} value="+" />
                        </div>
                        <div className={styles.addCartButton}>
                            <button>Agregar al Carrito</button>
                        </div>
                    </div>

                </div>
                <div className={styles.secondaryContent}>


                    <h3>Detalles</h3>

                    <div className={styles.descriptionContent}>
                        <div className={styles.detailsLeft}>
                            <h4>Sobre el Producto</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div className={styles.detailsRight}>
                            <h4>Sobre el Envio</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>

                    </div>
                </div>
            </div>

            <div />

        </div >
    );
}

export default Comida;