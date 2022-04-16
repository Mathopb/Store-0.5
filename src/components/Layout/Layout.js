import { Routes, Route } from "react-router-dom";
//import MainPage from "../MainPage/MainPage";
import MainShop from "../MainShop/MainShop";
import UploadForm from "../UploadForm/UploadForm";
import {
    HOME,
    ADMINUPLOAD,
    COMIDASHOP,
    BEBIDAS,
    COMIDAINFO
} from "../../routes/routes";
import ListaComidas from "../ListaComidas/ListaComidas";
import Bebidas from "../Bebidas/Bebidas";
import Comida from "../Comida/Comida";
import { Fragment } from "react";
import HeaderMenu from "../HeaderMenu/HeaderMenu";

const Layout = () => {
    return (
        <Fragment>
            <HeaderMenu />
            <Routes>
                <Route path={HOME} element={<MainShop />} />
                <Route path={ADMINUPLOAD} element={<UploadForm />} />
                <Route path={COMIDASHOP} element={<ListaComidas />} />
                <Route path={COMIDAINFO} element={<Comida />} />
                <Route path={BEBIDAS} element={<Bebidas />} />

            </Routes>
        </Fragment>
    );
}

export default Layout;