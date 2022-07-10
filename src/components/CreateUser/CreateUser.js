import { useState } from 'react';
import styles from './CreateUser.module.scss';

const CreateUser = () => {

    const [user, setUser] = useState({
        name: '',
        lastName: '',
        email: '',
        password: '',
        confirmPass: ''
    });
    const [error, setError] = useState('');

    const { name, lastName, email, password, confirmPass } = user;

    const onChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value

        })
        console.log(e.target.value);
    }

    const submitForm = e => {
        e.preventDefault();
        console.log("estoy funcionando");

        //validar campos vacios

        //password minimo de 6 caracteres

        //Los 2 passwords iguales
        if (password !== confirmPass) {
            setError('Las Contraseñas no coinciden')
            return;
        }

        setError('');
    }

    return (
        <div className={styles.mainContainer}>
            <h2>Crear Nuevo Usuario</h2>

            <div className={styles.fullContainer}>


                <form
                    className={styles.formContainer}
                    onSubmit={submitForm}>

                    <div className={styles.addInfo}>
                        <label className={styles.formLabel}>Nombre</label>
                        <input
                            className={styles.formInput}
                            id='name'
                            type="text"
                            name='name'
                            required
                            value={name}
                            placeholder="Tu Nombre.."
                            onChange={onChange}
                        />

                    </div>
                    <div className={styles.addInfo}>
                        <label className={styles.formLabel}>Apellido</label>
                        <input
                            className={styles.formInput}
                            id='lastName'
                            type="text"
                            name='lastName'
                            value={lastName}
                            placeholder="Tu Apellido.."
                            onChange={onChange}
                        />

                    </div>
                    <div className={styles.addInfo}>
                        <label className={styles.formLabel}>Email</label>
                        <input
                            className={styles.formInput}
                            id='email'
                            type="text"
                            name='email'
                            value={email}
                            placeholder="Tu Email.."
                            onChange={onChange}
                        />

                    </div>
                    <div className={styles.addInfo}>
                        <label className={styles.formLabel}>Password</label>
                        <input
                            className={styles.formInput}
                            id='password'
                            type="text"
                            name='password'
                            value={password}
                            placeholder="Una Contraseña.."
                            onChange={onChange}
                        />

                    </div>
                    {error && <p className={styles.error}>{error}</p>}
                    {/* ESTO QUIERO PONERLO DEBAJO DEL INPUT PERO QUE QUEDE JUNTO */}
                    <div className={styles.addInfo}>
                        <label className={styles.formLabel}>Confirm Password</label>
                        <input
                            className={styles.formInput}
                            id='confirmPass'
                            type="text"
                            name='confirmPass'
                            value={confirmPass}
                            placeholder="Repite la Contraseña.."
                            onChange={onChange}
                        />

                    </div>
                    {error && <p className={styles.error}>{error}</p>}
                    {/* ESTO QUIERO PONERLO DEBAJO DEL INPUT PERO QUE QUEDE JUNTO */}

                    <button type='submit'>Submit</button>
                </form>
            </div>

        </div>
    );
}

export default CreateUser;