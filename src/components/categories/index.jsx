import React, { Component } from 'react';

export default class Categories extends Component {
    constructor(props) {
    super(props);
    this.state = {
    };
}

handleChange(e){
    const label = e.target.value;
    this.props.changeLabel(label);
}

render() {
    return (
        <div>
            {this.props.categories.map(item => (
                <button key={item.id} onClick={this.handleChange.bind(this)} value={item.Category} className="cat_btn">{item.Category}</button>
            ))}
        </div>
        );
    }
}
