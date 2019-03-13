import React, { Component } from 'react';
import Items from './items';

export default class listItems extends Component {
    render() {
        let filteredItems = this.props.products.filter((product) => {
                return product.Name.toLowerCase().indexOf(this.props.fromChildSearch) !== -1;
            }
        );
            if(this.props.fromChildSearch){
                return (
                    <div className="row" style={{paddingTop: '50px'}}>
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
