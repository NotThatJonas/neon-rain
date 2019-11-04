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




        //   <div className="modal-dialog" role="document">
        //             <div className="modal-content">
        //                 <div className="modal-header">
        //                     <h5 className="modal-title" id="mymodal">Create Account</h5>
        //                     <button type="button" className="close" data-dismiss="modal" aria-label="Close">
        //                         <span aria-hidden="true">&times;</span>
        //                     </button>
        //                 </div>
        //                 <div className="modal-body">
        //                     <form className="create-form">
        //                         <div className="form-group">
        //                             <label for="email" className="col-form-label">Username:</label>
        //                             <input type="text" className="form-control" id="email">
        //                             </input>
        //                         </div>
        //                         <div className="form-group">
        //                             <label for="password" className="col-form-label">Password:</label>
        //                             <input type="password" className="form-control" id="password">
        //                             </input>
        //                         </div>

        //                     </form>
        //                 </div>
        //                 <div className="modal-footer">
        //                     <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        //                     <button type="button" className="btn btn-primary" data-dismiss="modal" id="create-user">Create Profile</button>
        //                 </div>
        //             </div>
        //         </div>