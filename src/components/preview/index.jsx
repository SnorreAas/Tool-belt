import React, { Component } from 'react';
import Divider from '../../images/Divider.png';

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
                        <div className="col-sm-2 center"></div>
                        <div className="col-sm-8 center limit">
                            <img src={Divider} alt={"Divider"} />
                        </div>
                        <div className="col-sm-2 center"></div>
                    </div>
                    {/* Categories */}
                    <div className="row">
                        <div className="col-sm-2 center"></div>
                        <div className="col-sm-8 center spacing">
                            <button className="cat_btn">Hand tools</button>
                            <button className="cat_btn">Equipment</button>
                            <button className="cat_btn">Power tools</button>
                            <button className="cat_btn">Radios</button>
                            <button className="cat_btn">Fasteners</button>
                            <button className="cat_btn">Ladders</button>
                            <button className="cat_btn">Abrasives</button>
                            <button className="cat_btn">Air tools</button>
                            <button className="cat_btn">Cleaning</button>
                        </div>
                        <div className="col-sm-2 center"></div>
                    </div>
                    {/* Search bar */}
                    <div className="row">
                        <div className="col-sm-2 center"></div>
                        <div className="col-sm-8 center spacing">
                            <input type="text"/>
                            <div class="close">
                                <span class="front"></span>
                                <span class="back"></span>
                            </div>
                        </div>
                        <div className="col-sm-2 center"></div>
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
