import React, { Component } from 'react';
import Divider from '../../images/Divider.png';
import Categories from '../categories';
import Searchfield from '../searchfield';

class Preview extends Component {
    render() {
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
                        <Categories />
                    </div>
                    <div className="col-sm-2 center"></div>
                </div>
                {/* Search bar */}
                <div className="row">
                    <div className="col justify-content-center center"></div>
                    <div className="col center justify-content-center search spacing">
                        <Searchfield />
                    </div>
                    <div className="col center justify-content-center"></div>
                </div>
                {/* Chosen Category */}
                <div className="row">
                    <div className="col-sm-2 center"></div>
                    <div className="col-sm-8 center spacing">
                        Chosen Category
                    </div>
                    <div className="col-sm-2 center"></div>
                </div>
            </div>
        );
    }
}

export default Preview;
