import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Bg from '../../images/ToolBackground.png';

class Home extends Component {
  render() {
    return (
        <div className="window home" style={{ height: '100vh', backgroundImage: `url(${Bg})` }}>
            <div className="text-box">
                <p style={{color: 'white'}}>
                  Test out this dynamic search tool, great for quick product pages!
                </p>
                <Link to="/preview" className="btn btn-success">Get Started!</Link>
            </div>
        </div>
    );
  }
}

export default Home;
