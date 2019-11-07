import React, { Component } from "react";
import "./style1.css";

class Leaderboards extends Component {
  render() {
    return (
      <div>
        <div className="landing1">
          <div className="home-wrap1">
            <div className="home-inner1"></div>
          </div>
        </div>
          <div className="container">
            <div>
              <h1 className="neon3 head">Leaderboard</h1>
            </div>
            <div className=" neon2 nes-table-responsive">
              <table className="nes-table is-bordered is-dark">
                <thead>
                  <tr>
                    <th>Table.is-dark</th>
                    <th>Table.is-bordered</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Thou hast had a good morning</td>
                    <td>Thou hast had a good afternon</td>
                  </tr>
                  <tr>
                    <td>Thou hast had a good morning</td>
                    <td>Thou hast had a good afternoon</td>
                  </tr>
                  <tr>
                    <td>Thou hast had a good morning</td>
                    <td>Thou hast had a good afternoon</td>
                  </tr>
                  <tr>
                    <td>Thou hast had a good morning</td>
                    <td>Thou hast had a good afternoon</td>
                  </tr>
                  <tr>
                    <td>Thou hast had a good morning</td>
                    <td>Thou hast had a good afternoon</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
      </div>
    );
  }
}

export default Leaderboards;
