import React, { Component } from 'react';
import Divider from '../../images/Divider.png';
import Categories from '../categories';
import Searchfield from '../searchfield';
import ListItems from '../listItems';

const categories = [
    { Category: 'Hand tools', id:0 },
    { Category: 'Equipment', id:1 },
    { Category: 'Power tools', id:2 },
    { Category: 'Radios', id:3 },
    { Category: 'Fasteners', id:4 },
    { Category: 'Ladders', id:5 },
    { Category: 'Abrasives', id:6 },
    { Category: 'Air tools', id:7 },
    { Category: 'Cleaning', id:8 },
];

const products = [
    { Name: 'Hammer', Category: 'Hand tools', id:1 },
    { Name: 'Saw', Category: 'Hand tools', id:2 },
    { Name: 'Wrench', Category: 'Hand tools', id:3 },
    { Name: 'Hard hat', Category: 'Equipment', id:4 },
    { Name: 'Drill', Category: 'Power tools', id:5 },
    { Name: 'Screwdriver', Category: 'Power tools', id:6 },
    { Name: 'Walkie Talkie', Category: 'Radio', id:7 },
    { Name: 'Clamp', Category: 'Fasteners', id:8 },
    { Name: 'Spring clamp', Category: 'Fasteners', id:9 },
    { Name: 'Hand drill', Category: 'Hand tools', id:10 },
    { Name: 'Push drill', Category: 'Hand tools', id:11 },
    { Name: 'Electric drill', Category: 'Power tools', id:12 },
];
export default class Preview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            label: 'Use the searchfield or choose a category!',
            fromChildSearch: '',
            fromChildCatOrNot: true,
        };
    }

    handleData(data) {
        this.setState({
            fromChildSearch: data
        });
    }

    handleCat(data){
        this.setState({
            fromChildCatOrNot: data
        });
    }

    changeLabel(label) {
        this.setState({label});
    }

    render() {
        const { label, fromChildSearch, catOrNot } = this.state;
        return (
            <div className="window container">
                {/* Title */}
                <div className="row">
                    <div className="col-sm-2 center"></div>
                    <div className="col-sm-8 center">
                        <h2 className="Cate">Categories</h2>
                    </div>
                    <div className="col-sm-2 center"></div>
                </div>
                {/* Divider */}
                <div className="row">
                    <div className="col-sm center"></div>
                    <div className="col-sm-12 center limit divider justify-content-center">
                        <img src={Divider} alt={"Divider"} />
                    </div>
                    <div className="col-sm center"></div>
                </div>
                {/* Categories */}
                <div className="row">
                    <div className="col-sm-2 center"></div>
                    <div className="col-sm-8 center spacing">
                        <Categories changeLabel={this.changeLabel.bind(this)} categories={categories} />
                    </div>
                    <div className="col-sm-2 center"></div>
                </div>
                {/* Search bar */}
                <div className="row">
                    <div className="col justify-content-center center"></div>
                    <div className="col center justify-content-center search spacing">
                        <Searchfield catOrNot={catOrNot} handleData={this.handleData.bind(this)} />
                    </div>
                    <div className="col center justify-content-center"></div>
                </div>
                {/* Chosen Category */}
                <div className="row">
                    <div className="col-sm-2 center"></div>
                    <div className="col-sm-8 center spacing">
                        <h5>{label}</h5>
                    </div>
                    <div className="col-sm-2 center"></div>
                </div>
                {/* Items */}
                <div className="row">
                    <div className="col-sm">
                        <ListItems products={products} label={label} fromChildSearch={fromChildSearch} />
                    </div>
                </div>
            </div>
        );
    }
}
