import { Routes, Route } from "react-router-dom";
import MainPage from "../MainPage/MainPage";
//import MainShop from "../MainShop/MainShop";
import UploadForm from "../UploadForm/UploadForm";
import {
    HOME,
    REMERAINFO,
    ADMINUPLOAD
} from "../../routes/routes";

const Layout = () => {
    return ( 
        <Routes>
            <Route path={HOME} element={<MainPage />}/>
            {/* <Route path='shop' component={<MainShop />}/> */}
            <Route path={ADMINUPLOAD} element={<UploadForm />}/>
            
        </Routes>
     );
}
 
export default Layout;