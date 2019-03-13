import React, { Component } from 'react';
import Items from './items';

export default class listItems extends Component {
    constructor() {
        super();
        this.state = {
            catOrNot: false,
        }
    }

    render() {
        let filteredItems;
        const { catOrNot } = this.state;
        let categoryItems = this.props.products.filter((product) => {
            return product.Category === this.props.label;
        });
        if(catOrNot){
            filteredItems = this.props.products.filter((product) => {
                return product.Name.toLowerCase().indexOf(this.props.fromChildSearch) !== -1;
            });
        }else{
            filteredItems = categoryItems.filter((product) => {
                return product.Name.toLowerCase().indexOf(this.props.fromChildSearch) !== -1;
            });
        }

            if(this.props.fromChildSearch || this.props.label){
                return (
                    <div className="row" style={{paddingBottom: '40px' ,paddingTop: '50px'}}>
                        {filteredItems.map((product) => {
                            return <Items product={product} key={product.id}/>
                        })}
                    </div>
                );
            }else{
                return (
                    <div></div>
                );
            }
        }
}
