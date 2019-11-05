import React, { Component } from "react";
import "./style.css";

class Leaderboards extends Component {
  
    render() {
      // Notice how each input has a `value`, `name`, and `onChange` prop
      return (
        <div>
          <div class="landing">
            <div class="home-wrap">
              <div class="home-inner"></div>
            </div>
          </div>
          <div class="col-md-4 text-center">
            <div class="skills">
              <i class="fas fa fa-database fa-3x"></i>
              <h4>Skills</h4>
            </div>
            <table>
              <tr>
                <td>HTML 5</td>
                <td>Node.js</td>
              </tr>
              <tr>
                <td>CSS 3</td>
                <td>Express.js</td>
              </tr>
              <tr>
                <td>Bootstrap 4</td>
                <td>React.js</td>
              </tr>
              <tr>
                <td>JavaScript</td>
                <td>MySQL</td>
              </tr>
              <tr>
                <td>jQuery</td>
                <td>Sequelize</td>
              </tr>
              <tr>
                <td>API/JSON</td>
                <td>MongoDB</td>
              </tr>
              <tr>
                <td>Heroku</td>
                <td>Git</td>
              </tr>
            </table>
          </div>
        </div>
      );
    }
  }
  
  export default Leaderboards;