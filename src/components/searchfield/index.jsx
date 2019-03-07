import React, { Component } from 'react';

class Searchfield extends Component {
  render() {
    return (
        <div>
            <input type="text"/>
            <div className="close">
                <span className="front"></span>
                <span className="back"></span>
            </div>
        </div>
    );
  }
}

export default Searchfield;
