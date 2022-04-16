import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../Firebase/FirebaseConfig';
import Bebida from "../Bebida/Bebida";

const Bebidas = () => {
    const [bebidas, setBebidas] = useState([]);

    useEffect(() => {

        const obtenerDatos = async () => {

            const data = await getDocs(collection(db, 'Pokemones'));
            const bebida = [];
            data.forEach((documento) => {
                //console.log(documento.data());
                bebida.push(documento.data());
            })
            setBebidas(bebida);

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