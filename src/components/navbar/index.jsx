import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md nav">
                    <Link to="/">HOME</Link>
                </div>
                {/*<div className="col-md nav" />*/}
            </div>
        );
    }
}

export default Nav;
