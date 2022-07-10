import { collection, getDocs } from "firebase/firestore";
import { db } from '../../Firebase/FirebaseConfig';

const useFirebaseData = () => {

    const getDataByCollectionName = async (colName) => {

        const data = [];
        const docs = await getDocs(collection(db, colName));
        docs.forEach((doc) => {
            //console.log(documento.data());
            data.push(doc.data());
        })
        //console.log(comidas);
        return data;

    }

    return {
        getDataByCollectionName
    };
}

export default useFirebaseData;