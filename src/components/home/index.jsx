import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
        <div className="window">
            <div className="row">
                <div className="col-md-2 center" />
                <div className="col-md-8 center">
                    <p>
                      Test out this dynamic search tool, great for quick product pages!
                    </p>
                    <Link to="/preview" className="btn btn-success">Get Started!</Link>
                </div>
                <div className="col-md-2 center" />
            </div>
        </div>
    );
  }
}

export default Home;
