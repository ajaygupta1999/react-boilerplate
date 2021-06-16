import  { 
    CREATE_REDUX_STORE,
    ERROR
} from "../actionTypes";


export const setStore = () => async (dispatch) => {
    try{
        let data = { 
            name : "Ajay",
            surname : "Gupta"
        }
        dispatch({ type : CREATE_REDUX_STORE , data });

    }catch(err){
        console.log(err.message);
        dispatch({ type : ERROR });
    }
}
