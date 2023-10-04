import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../Services/Myfirebase/myfirebase";

export const addcart = (data) =>{

    return{
        type:'ADDCART',
        payload : data,
    }
}

export const getData = (data) => {
 
    return{
        type : 'ALL_PRODUCT',
        payload : data
    }
}  

export const singleproduct = (data) => {
 
    return{
        type : 'SINGLE_PRODUCT',
        payload : data
    }
}

export const ADDproductasync = (data) =>{
    return async dispatch =>{
        await addDoc(collection(db, "products"),data)
        dispatch(addcart(data));
    }
}

export const Editproductasync = (id)=>{
    return async dispatch =>{
        let alldata = [];

        const docref = doc(db,"products",`${id}`);
        const docsnap = await getDoc(docref);

        console.log(docsnap.data(),"docsnapdocsnapdocsnapdocsnapdocsnapdocsnapdocsnap");
        
  
        dispatch(singleproduct(docsnap.data()));
    }
}

export const UpdateProductasync = (data,id)=>{
    return async dispatch =>{
        await updateDoc(doc(db,"products",`${id}`,data));

        dispatch(getAllAsyncData())
    }
}



export const getAllAsyncData = () => {
    return async dispatch => {

        let alldata = [];

        let firestoredata = await getDocs(collection(db,"products"));
        firestoredata.forEach((doc) => {
           let d = {...doc.data(),id : doc.id}
           alldata = [...alldata,d]
        })

    dispatch(getData(alldata));
  }
}

export const productremove = (id) =>{
    return{
        type:'REMOVE_CART',
        payload: id 
    }
}

export const removeProductasync = (id) =>{
    return async dispatch =>{
        await deleteDoc(doc(db,"products" ,`${id}`))
    dispatch(getAllAsyncData());

    }
}