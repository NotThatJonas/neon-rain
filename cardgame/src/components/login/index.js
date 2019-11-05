import React, { Component } from "react";
import "./style.css";

class Login extends Component {

    state = {
        username: "",
        password: ""
    };



    render() {
        // Notice how each input has a `value`, `name`, and `onChange` prop
        return (
            <div>
            <div className="container">
                <div className="row">
                    <h1 className="header">Neon Rain!!</h1>
                </div>
                <div className="row">
                    <img className="image" src="https://image.shutterstock.com/image-illustration/3d-render-ultraviolet-neon-square-260nw-1127031815.jpg" alt="Neon">
                    </img>
                </div>
                <div className="row">
             
                    <button type="button" className="btn start btn-primary">Start New</button> 
                  
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Login
</button>
              
             </div>
                <div className="row">
                    <button type="button" className="btn highscore start btn-primary">Highscore</button>
                </div>
                
              
                   
          
</div>
                 

                </div>
                )
    }
                }



export default Login;




      