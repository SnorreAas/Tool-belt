import React, { Component } from 'react';
import Items from './items';

export default class listItems extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        let filteredItems;
        let categoryItems = this.props.products.filter((product) => {
            return product.Category === this.props.label;
        });
        if(this.props.label===''){
            filteredItems = this.props.products.filter((product) => {
                return product.Name.toLowerCase().includes(this.props.fromChildSearch.toLowerCase()) || !this.props.fromChildSearch;
            });
        }else{
            filteredItems = categoryItems.filter((product) => {
                return product.Name.toLowerCase().includes(this.props.fromChildSearch.toLowerCase()) || !this.props.fromChildSearch;
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
