import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../Firebase/FirebaseConfig';
import Comidas from '../Comidas/Comidas';
import styles from "./ListaComidas.module.scss";

const ListaComidas = () => {

    const [comidita, setComidita] = useState([]);

    useEffect(() => {

        const obtenerDatos = async () => {

            const data = await getDocs(collection(db, 'Comidas'));
            const comidas = [];
            data.forEach((documento) => {
                //console.log(documento.data());
                comidas.push(documento.data());
            })
            //console.log(comidas);
            setComidita(comidas);

        }

        obtenerDatos();

    }, []);

    if (comidita.length === 0) {
        return (<div className={styles.loading}>Cargando</div>)
    }

    return (
        <div>
            <h1>🌯</h1>
            <div className={styles.dataContainer}>

                {
                    comidita.map((c) =>
                        <Comidas
                            key={c.imagen}
                            comida={c.nombre}
                            image_url={c.imagen}
                            ingrediente={c.ingredientes}
                        />
                    )
                }
            </div>

        </div>
    );
}

export default ListaComidas;