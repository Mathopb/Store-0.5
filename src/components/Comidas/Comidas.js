import styles from "./Comidas.module.scss";

const Comidas = ({ comida, image_url, ingrediente }) => (

    <div className={styles.comidasContainer}>
        <span className={styles.foodName}>Nombre: {comida}</span>
        <img 
        src={image_url} 
        alt={`${comida}`}
        />
        <span className={styles.foodYummy}>Ingrediente: {ingrediente}</span>
    </div>

);

export default Comidas;
