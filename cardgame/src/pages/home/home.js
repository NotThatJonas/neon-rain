import React, { Component } from "react";
import "./style.css";
class Home extends Component {
  state = {
    username: "",
    password: ""
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <div class="landing">
          <div class="home-wrap">
            <div class="home-inner"></div>
          </div>
        </div>

        <div class="caption text-center nes-pointer">
          <button type="button" className="btn nes-pointer neon1 mb-3 nes-btn">
            Start New
          </button>

          <button
            type="button"
            className="btn mb-3 neon1 nes-pointer nes-btn "
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Resume  
          </button>
          <button type="button" className="btn mb-3 neon1 nes-pointer nes-btn">
            Highscore
          </button>
        </div>
      </div>
    );
  }
}

export default Home;

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
