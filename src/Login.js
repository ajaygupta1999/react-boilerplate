import React, { Component } from 'react';
import  { handleLogin , handleVerifyToken } from "./store/actions/app";
import { connect } from "react-redux"; 


class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            isloggedin : false,
            email : "",
            password : "",
            tokendata : {},
            afterverificationdata : {},
            isverified : false,
        }
    }


    handleChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name] : e.target.value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        let obj = {
            email : this.state.email,
            password : this.state.password
        }

        let token = await this.props.handleLogin(obj);
        this.setState({
            ...this.state,
            isloggedin : true,
            tokendata : token
        });
    }



    handleVerify = async () => {
        let data = await this.props.handleVerifyToken();
        this.setState({
            ...this.state,
            isverified : true,
            afterverificationdata : data
        });
    }



    render() {
        return (
            <div className="container">
                {
                    !this.state.isloggedin ? (
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" 
                                value={this.state.email} name="email" id="exampleInputEmail1" onChange={this.handleChange} aria-describedby="emailHelp" placeholder="Enter email" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    ) : (
                        <div className="token-data">
                            {
                                !this.state.isverified ? (
                                    <div>
                                        <p> { this.state.tokendata } </p>
                                        <button onClick={this.handleVerify} className="btn btn-sm btn-primary">
                                            verify
                                        </button>
                                    </div>
                                ) : (
                                    <div>
                                        <p>Verified .. </p>
                                    </div>
                                )
                            }
                        </div>
                    )
                }

                
            </div>
        ) 
   } 
}




export default connect( null , { handleLogin , handleVerifyToken })(Login);

