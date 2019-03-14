import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md nav">
                    <Link className="logo" to="/">TB</Link>
                </div>
            </div>
        );
    }
}

export default Nav;
