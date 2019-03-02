import React, { Component } from 'react';

class Preview extends Component {
  render() {
    return (
            <div className="window">
                <div className="row">
                    <div className="col-sm-2 center"></div>
                    <div className="col-sm-8 center">
                        <a href="#" class="button1 bouncy">Facebark</a>
                        <a href="#" class="button1 bouncy">Facebark</a>
                        <a href="#" class="button1 bouncy">Facebark</a>
                        <a href="#" class="button1 bouncy">Facebark</a>
                    </div>
                    <div className="col-sm-2 center"></div>
                </div>
                <div className="row">
                    <div className="col-sm-2 center"></div>
                    <div className="col-sm-8 center">
                        <input type="text" placeholder="Search.."/>
                    </div>
                    <div className="col-sm-2 center"></div>
                </div>
            </div>
    );
  }
}

export default Preview;
