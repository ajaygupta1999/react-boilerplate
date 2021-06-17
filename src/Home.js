import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Home extends Component {

    render(){

        return(
            <div classNameName="mt-5">
                <h1 className="mt-5">Hello sir</h1>
                <Link to="/test">Go to link page</Link>
            </div>
        )
    }

}


export default Home;