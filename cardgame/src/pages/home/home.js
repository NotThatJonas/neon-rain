import React, { Component } from "react";
import "./style.css";
import axios from "axios";
import LoginForm from "../../components/login"
import resumeForm from "../../components/resume"

class Home extends Component {
  state = {
    username: "",
    password: "",
    loggedInUser:"",
    show: false,
    url:"http://localhost:8080",
    // url:"https://manateepi.herokuapp.com",
  };

  showLogin = () => {
      this.setState({
      show: true
    })
    console.log("we made it here");
    
  }

  showResume = () => {
    this.setState({
    show: true
  })
  console.log("we test it here");
  
}

  componentDidMount(){
    this.readSessions();
  }

  readSessions = ()=>{
    axios.get(`${this.state.url}/auth/readsessions`,{withCredentials:true}).then(res=>{
      console.log(res.data)
      this.setState({loggedInUser:res.data.user})
    })
  }

  handleChange= event=>{
    const {name,value}=event.target;
    this.setState({
      [name]:value
    })
  }

  handleLoginFormSubmit = event=>{
    console.log("we mafre it here!!!");
    if(event){
      event.preventDefault();
    }
    axios.post(`${this.state.url}/auth/login`,{name:this.state.username,password:this.state.password},{withCredentials:true}).then(res=>{
      console.log(res.data,res.status)
      this.setState({
        username:"",
        password:"",
        loggedInUser:res.data.user
      });
    }).catch(err=>{
      console.log(err.response);
      this.setState({
        username:"",
        password:"",
        loggedInUser:""
      })
    })
  }

  render() {

    return (
      
      <div>
        <div className="landing">
          <div className="home-wrap">
            <div className="home-inner"></div>
          </div>
        </div>

        <div className="caption text-center nes-pointer">
           <LoginForm show={this.state.show}>
           <form>
                <input name="name" value={this.props.username} onChange={this.handleChange} />
                <input name="password" value={this.props.password} type="password" onChange={this.handleChange} />
                <input type="submit" onClick={this.handleLoginFormSubmit} />
            </form>
           </LoginForm>
          <button onClick={this.showLogin} type="button" className="btn nes-pointer neon1 mb-3 nes-btn">
            Start New
          </button>
           <button onClick={this.showResume} type="button" className="btn nes-pointer neon1 mb-3 nes-btn">
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

          {/* <resumeForm show={this.state.show}>
           <form>
                <input name="name" value={this.props.username} onChange={this.handleChange} />
                <input name="password" value={this.props.password} type="password" onChange={this.handleChange} />
                <input type="submit" onClick={this.handleLoginFormSubmit} />
            </form>
           </resumeForm> */}