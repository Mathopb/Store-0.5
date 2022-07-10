import { useEffect, useState } from "react";
import Items from '../Items/Items';
import styles from "./CollItemList.module.scss";
import useFirebaseData from "../../hooks/request/useFirebaseData";
import { useLocation } from "react-router-dom";

const CollItemList = () => {

    const location = useLocation();
    console.log('location ====> ', location);
    const collName = location.pathname.charAt(1).toUpperCase() + location.pathname.slice(2);
    console.log(collName);

    const [itemList, setItemList] = useState([]);
    const { getDataByCollectionName } = useFirebaseData();

    useEffect(() => {

        const obtenerDatos = async () => {

            const data = await getDataByCollectionName(collName);
            setItemList(data);

        }

        obtenerDatos();

    }, []);

    if (itemList.length === 0) {
        return (<div className={styles.loading}>Cargando</div>)
    }

    return (
        <div>
            <h2>{collName}</h2>
            <div className={styles.mainContainer}>
                <div />

                <div className={styles.dataContainer}>

                    {
                        itemList.map((d) =>
                            <Items
                                key={d.imagen}
                                item={d.nombre}
                                image_url={d.imagen}
                                ingrediente={d.ingredientes}
                                collName={location.pathname.slice(1)}
                            />
                        )
                    }
                    {
                        itemList.map((d) =>
                            <Items
                                key={d.imagen}
                                item={d.nombre}
                                image_url={d.imagen}
                                ingrediente={d.ingredientes}
                                collName={location.pathname.slice(1)}
                            />
                        )
                    }
                </div>
            </div>

        </div>
    );
}

export default CollItemList;