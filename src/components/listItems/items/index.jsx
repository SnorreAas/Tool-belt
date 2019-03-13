import React, { Component } from 'react';
import ImageLoader from 'react-load-image';

export default class Items extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    function Preloader(props) {
        return <img src="Hammer.png" />;
    }

    render() {
        return (
            <div className="col-sm-4 colSpacing center items">
                <div className="card">
                    <ImageLoader
                        src="/images/Hammer.png"
                        >
                        <img />
                        <div>Error!</div>
                        <Preloader />
                    </ImageLoader>
                    <h4>{this.props.product.Name}</h4>
                    <p className="price">$19.99</p>
                    <p><button>Add to Cart</button></p>
                </div>
            </div>
        );
    }
}
