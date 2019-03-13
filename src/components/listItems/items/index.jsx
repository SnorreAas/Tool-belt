import React, { Component } from 'react';

export default class Items extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        return (
            <div className="col-sm-4 colSpacing center items">
                <div className="card">
                    <h4>{this.props.product.Name}</h4>
                    <p className="price">$19.99</p>
                    <p><button>Add to Cart</button></p>
                </div>
            </div>
        );
    }
}
