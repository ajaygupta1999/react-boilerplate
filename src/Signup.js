import React , { useState } from "react";
import { connect } from "react-redux";
import { handleSubmitBackend } from "./store/actions/app";


const Signup = ({ handleSubmitBackend  , appdata }) => {

    const [state , setState] = useState({
        firstname : "",
        lastname : "",
        email : "",
        password : "",
        isSubmitted : false,
    });

    


    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        });
    }

    const handleSubmit = async (e) => {
        console.log("Submitted data");
        e.preventDefault();
        let data = await handleSubmitBackend(state);
        console.log(data);
        setState({
            ...state,
            isSubmitted : true
        });
    }


    return (
        <div>
            {
                state.isSubmitted ? (
                    <div>
                        { appdata.data.name }
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Firstname</label>
                            <input type="firstname" name="firstname" onChange={handleChange} value={state.firstname} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Lastname</label>
                            <input type="text" name="lastname" onChange={handleChange} value={state.lastname} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" onChange={handleChange} value={state.email} name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Password</label>
                            <input type="password" name="password" onChange={handleChange} value={state.password} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                )
            }
            
        </div>
    )
}



const mapStateToProps = (store) => ({
    appdata : store.app
});




export default connect(mapStateToProps , { handleSubmitBackend } )(Signup);

