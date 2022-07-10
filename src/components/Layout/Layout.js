import { Routes, Route } from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import MainShop from "../MainShop/MainShop";
import UploadForm from "../UploadForm/UploadForm";
import {
    HOME,
    SHOP,
    ADMINUPLOAD,
    CREATEUSER,
    ARTICLELIST,
    ITEMINFO
} from "../../routes/routes";
import CollItemList from "../CollItemList/CollItemList";
import Comida from "../Comida/Comida";
import { Fragment } from "react";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import Footer from "../Footer/Footer";
import CreateUser from "../CreateUser/CreateUser";

const Layout = () => {
    return (
        <Fragment>
            <HeaderMenu />
            <Routes>
                <Route path={HOME} element={<MainPage />} />
                <Route path={SHOP} element={<MainShop />} />

                <Route path={ARTICLELIST} element={<CollItemList />} />
                <Route path={ITEMINFO} element={<Comida />} />

                <Route path={ADMINUPLOAD} element={<UploadForm />} />
                <Route path={CREATEUSER} element={<CreateUser />} />

            </Routes>
            <Footer />
        </Fragment>
    );
}

export default Layout;