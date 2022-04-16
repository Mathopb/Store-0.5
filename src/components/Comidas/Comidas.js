import { Link } from "react-router-dom";
import styles from "./Comidas.module.scss";
import { COMIDAINFO } from "../../routes/routes";

const Comidas = ({ comida, image_url, ingrediente }) => {

    const dbName = comida;
    const showName = dbName.charAt(0).toUpperCase() + dbName.slice(1);

    return (
        <Link className={styles.comidasLink} to={COMIDAINFO.replace(":nameorid", comida)}>
            <div className={styles.comidasContainer}>
                <span className={styles.comidasName}>{showName}</span>
                <img
                    className={styles.comidasImg}
                    src={image_url}
                    alt={`${comida}`}
                />
            </div>
        </Link>
    )
};

export default Comidas;
