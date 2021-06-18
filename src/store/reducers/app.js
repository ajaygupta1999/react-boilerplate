
import {
    CREATE_REDUX_STORE,
    ERROR
} from "../actionTypes";



let DEFAULT_STATE = {
    data : [{
        name :  "bnsjbkjs",
        author : "dafsggds",
        post : "sfzdgsfsh",
        body : "dfhsbhsbrg"
    },
    {
        name :  "bnsjbkjs",
        author : "dafsggds",
        post : "sfzdgsfsh",
        body : "dfhsbhsbrg"
    },
    {
        name :  "bnsjbkjs",
        author : "dafsggds",
        post : "sfzdgsfsh",
        body : "dfhsbhsbrg"
    }],
    isFetching : false,
    isError : false,
}


const app = ( state = DEFAULT_STATE , action ) => {
     
     switch(action.type){

        case "SET_LOADER":
            return {  ...state, isFetching : true }

        case CREATE_REDUX_STORE:
            return { ...state, isFetching : true, data : action.data }

        case ERROR:
            return { ...state, isFetching : false, isError : true }

        case "LOAD_DATA":
            return { ...state, isFetching : false , data : action.data  }

        case "ADD_POST":
            return { ...state, data : [...state.data , action.data] }

        default:
            return state;
     }
}



export default app;