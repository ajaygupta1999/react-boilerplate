import React , {  useState, useEffect } from 'react';




const Test = () => {
    
    const [state , setState ] = useState({ 
        firstname : "" , 
        lastname : "",
        imgurl : {
            dataUrl : "",
            dataid:  ""
        },
        datasection : {
            binding : "",
            rowbindind : "",
            getPrice : "",
            rowdata : {
                name:  ""
            }
        }
    });


    useEffect(() => {   
        console.log("Something done");
    } , [state.firstname]);



    const handleIncrementCount = () => {
        setState(currentState => ({
            ...currentState,
            firstname : "Ajay",
            lastname : "Gupta"
        }));
    }

    const setImage = (imgurl , id) => {
        setState({
            ...state,
            imgurl : {
                ...state.imgurl,
                dataUrl : imgurl,
                dataid : id
            }
        });
    }

    return (
        <div className="tezt-group">
            <h1>This is a test page</h1>
            <p>Firstname : { state.firstname }</p>
            <p>Lastname : { state.lastname }</p>
            <p>Imgurl : {  state.imgurl.dataUrl  } , {  state.imgurl.dataid  }</p>
            <button className="btn btn-sm btn-primary" onClick={() => {
                setImage("https://images.unsplash.com/photo-1623387417661-bae2a167418b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" , 12345)
            }}> set Image Fields </button>
            <button className="btn btn-sm btn-primary" onClick={handleIncrementCount}>+1 Count</button>
        </div>
    )
}


export default Test;