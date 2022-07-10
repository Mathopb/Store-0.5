import { useEffect, useState } from "react";
import Bebida from "../Bebida/Bebida";
import useFirebaseData from "../../hooks/request/useFirebaseData";

import { useLocation } from "react-router-dom";

const Bebidas = () => {
    const [bebidas, setBebidas] = useState([]);
    const { getDataByCollectionName } = useFirebaseData();

    const location = useLocation();
    console.log(location);

    useEffect(() => {


        const obtenerDatos = async () => {

            const data = await getDataByCollectionName('Bebidas');
            setBebidas(data);

        }

        obtenerDatos();

    }, []);

    if (bebidas.length === 0) {
        return (<div>Cargando</div>)
    }

    return (
        <div>
            {
                bebidas.map(({ imagen, nombre, ingredientes }) =>
                    <Bebida
                        key={imagen}
                        nombre={nombre}
                        image_url={imagen}
                        tipo={ingredientes}
                    />
                )
            }
        </div>
    );
}

export default Bebidas;