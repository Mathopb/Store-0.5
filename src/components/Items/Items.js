import { Link, generatePath } from "react-router-dom";
import styles from "./Items.module.scss";
import { ITEMINFO } from "../../routes/routes";

const Items = ({ item, image_url, collName }) => {

    const dbName = item;
    const showName = dbName.charAt(0).toUpperCase() + dbName.slice(1);
    const precio = 15;
    console.log('items collname ===>', collName);

    return (
        // <Link className={styles.comidasLink} to={ITEMINFO.replace(":nameorid", item)}>
        <Link className={styles.comidasLink} to={generatePath(ITEMINFO, { collectionName: collName, nameorid: item })}>
            <div className={styles.comidasContainer}>
                <img
                    className={styles.comidasImg}
                    src={image_url}
                    alt={`${item}`}
                />
                <span className={styles.comidasName}>{showName}</span>
                <span className={styles.comidasPrecio}>${precio}</span>
            </div>
        </Link >
    )
};

export default Items;
