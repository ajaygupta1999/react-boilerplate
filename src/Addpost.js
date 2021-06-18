import React, { Component } from 'react';
import  {handleAddPost } from "./store/actions/app";
import  { connect } from "react-redux";





class Addpost extends Component {

    state = {
        name : "",
        post : "",
        body : "",
        author : ""
    }


    handleChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name] : e.target.value
        });
    }

    handleSubmit = async (e) => {
        console.log("Submitted data");
        e.preventDefault();
        await this.props.handleAddPost(this.state);
    }


    render(){

        let { posts } = this.props;


        return(
            <div className="container mt-5">
                <div className="mt-5 mb-5">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Name</label>
                            <input type="text" name="name" onChange={this.handleChange} value={this.state.name} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Lastname</label>
                            <input type="text" name="post" onChange={this.handleChange} value={this.state.post} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="text" onChange={this.handleChange} value={this.state.body} name="body" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Password</label>
                            <input type="text" name="author" onChange={this.handleChange} value={this.state.author} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                {
                    posts.length > 0 && 
                        <div className="mt-5 mb-5">
                            {
                                posts.map(post => (
                                    <div className="mt-2 mb-2">
                                        <p style={{ margin : "0" }}>{ post.name }</p>
                                        <p style={{ margin : "0" }}>{ post.author } </p>
                                        <p style={{ margin : "0" }}>{ post.body }</p>
                                        <p style={{ margin : "0" }}>{ post.post }</p>
                                    </div>
                                ))
                            }
                        </div>
                }   
            </div>
        )
    }
}


const mapStateToProps = (store) => ({
    posts : store.app.data
});



export default connect( mapStateToProps ,  {  handleAddPost  } )(Addpost);