import { useRef, useState } from "react";
import { storage, db } from "../../Firebase/FirebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import styles from "./UploadForm.module.scss";
import HeaderMenu from "../HeaderMenu/HeaderMenu";

const UploadForm = () => {

    const [imageUpload, setImageUpload] = useState(null);
    const [collectionN, setCollectionN] = useState('');
    const [ingrediente, setIngrediente] = useState('');
    const [selector, setSelector] = useState('Comidas');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const fileRef = useRef();

    const uploadImage = (collectionN, imageName) => {

        const imageRef = ref(storage, `images/${collectionN}/${imageName + v4()}`);
        uploadBytes(imageRef, imageUpload).then(() => {
            getDownloadURL(imageRef).then((url) => {
                createNewItem(url);
            }).finally(() => {
                setIsLoading(false);
            });
        }).catch((error) => {
            setError('Hubo un error al subir Imagen. Intentalo de nuevo');
        });

    };

    const createNewItem = (url) => {

        addDoc(collection(db, selector), {
            nombre: collectionN.toLocaleLowerCase(),
            ingredientes: ingrediente.toLocaleLowerCase(),
            imagen: url
        });
    }

    const submitForm = (e) => {
        e.preventDefault();
        if (!imageUpload) {
            setError('Falta una imagen wacho');
            return;
        }
        setIsLoading(true);
        uploadImage(collectionN, imageUpload.name);
        console.log('----------', imageUpload);
        // coleccion no puede ser vacia
        // cambiar espacios por _
        setIngrediente('');
        setImageUpload(null);
        setCollectionN('');
        setError('');
        fileRef.current.value = '';

    };
    console.log('>////<', imageUpload);

    const handleFileChange = (e) => {
        setImageUpload(e.target.files[0]);
        console.log('Queseyo');
    };

    const handleCollectionChange = (e) => {
        setCollectionN(e.target.value);
    };

    const handleSelectChange = (e) => {
        setSelector(e.target.value);
    }


    return (
        <div>
            <div>
                <HeaderMenu />
            </div>
            <form className={styles.formContainer} onSubmit={submitForm}>
                <label> Que subiras?
                    <select value={selector} onChange={handleSelectChange}>
                        <option value="Comidas"> Comida </option>
                        <option value="Pokemones"> Pokemon </option>
                    </select>
                </label>
                <input
                    className={styles.formInput}
                    type="text"
                    value={ingrediente}
                    placeholder="Ingrediente Principal"
                    onChange={(e) => setIngrediente(e.target.value)}
                />
                <input
                    className={styles.formInput}
                    type="text"
                    value={collectionN}
                    onChange={handleCollectionChange}
                    placeholder="Nombre"
                />
                <input
                    className={styles.formInput}
                    type="file"
                    onChange={handleFileChange}
                    ref={fileRef}
                />
                {isLoading
                    ? <p>Uploading...</p>
                    : <button type="submit">Upload Image</button>}
            </form>
            {error && <p>{error}</p>}
        </div>
    );
}

export default UploadForm;