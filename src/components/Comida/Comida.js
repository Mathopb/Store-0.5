import { useParams } from "react-router-dom";

const Comida = () => {

    let { nameorid } = useParams();

    return (
        <div>
            <p>{nameorid}</p>
        </div>
    );
}

export default Comida;