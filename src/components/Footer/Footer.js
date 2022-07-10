import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.mainContainer}>
            <div className={styles.infoContainer}>
                <div className={styles.terms}>
                    <p>Terminos y Condiciones</p>
                </div>
                <div className={styles.contact}>
                    <p>Contactame</p>
                    <p>correo@correo.com</p>
                </div>
                <div className={styles.direction}>
                    <p>Direccion</p>
                    <p>Direccion del local</p>
                </div>
                <div className={styles.social}>
                    <p>Links Sociales</p>
                    <div className={styles.links}>
                        <a href=" " target="_blank" rel="noreferrer">
                            <i className="fab fa-twitter fa-2x"></i>
                        </a>
                        <a href=" " target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram fa-2x"></i>
                        </a>
                    </div>
                </div>

            </div>

            <div className={styles.creator}>
                <p>@2022. Created by Mathias Pignone for F70</p>
            </div>
        </footer>
    );
}

export default Footer;