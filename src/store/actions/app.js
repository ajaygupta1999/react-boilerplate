import  { 
    CREATE_REDUX_STORE,
    ERROR
} from "../actionTypes";

import { config } from "../../constants";
import { setTokenHeader , apiCall } from "../../services/utils";




export const setStore = () => async (dispatch) => {
    try{
        let data = { 
            name : "Ajay",
            surname : "Gupta"
        }
        dispatch({ type : CREATE_REDUX_STORE , data : data });

    }catch(err){
        console.log(err.message);
        dispatch({ type : ERROR });
    }
}



export const handleLogin = (data) => async (dispatch) => {
    try{
        console.log("data ==>" , data);
        let backenddata = await apiCall("POST" , `${process.env.REACT_APP_SERVERURL}/login` , data); 
        console.log(backenddata);
        setTokenHeader(backenddata.token);
        return backenddata.token;
    }catch(err){
        console.log(err);
    }
}


export const handleVerifyToken = () => async (dispatch) => {
    try{
        let verifieddata = await apiCall('GET' , `${process.env.REACT_APP_SERVERURL}/verify/token`)
        console.log(verifieddata);
        return verifieddata;
    }catch(err){
        console.log(err);
    }
}



export const handleSubmitBackend = (data) => async (dispatch) => {
    try{
       console.log("In actions");
       dispatch({ type : "SET_LOADER" });
       let data = {
           name : "Ajdskbadsgsr",
           key : "12345"
       };
       dispatch({ type : "LOAD_DATA" , data : data });
       // let backenddata = await apiCall("POST" , `${process.env.REACT_APP_SERVERURL}/login` , data);
    }catch(err){
        console.log(err);
    }
}



export const handleAddPost = (obj) => async (dispatch) => {
    try{
        dispatch({  type : "ADD_POST" , data : obj });
    }catch(err){
        console.log(err);
    }
}
