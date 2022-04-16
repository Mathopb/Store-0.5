const Bebida = ({ nombre, image_url, tipo }) => (

    <div>
        <span>Nombre: {nombre}</span>
        <img
            src={image_url}
            alt={`${nombre}`}
        />
        <span>Tipo: {tipo}</span>
    </div>

);

export default Bebida;