import HeaderMenu from "../HeaderMenu/HeaderMenu";
//import styles from "./MainPage.module.scss";
import PruebaDB from '../PruebaDB/PruebaDB';
//import UploadForm from "../UploadForm/UploadForm";

const MainPage = () => {
    return (
        <div>
            <HeaderMenu />
            {/* <UploadForm /> */}
            <PruebaDB />
        </div>
    );
}

export default MainPage;