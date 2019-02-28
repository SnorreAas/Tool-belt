import React, { Component } from 'react';

class Preview extends Component {
  render() {
    return (
            <div className="window">
                <div className="row">
                    <div className="col-sm-2 center"></div>
                    <div className="col-sm-8 center">
                        <a href="something" class="button1 bouncy">Facebark</a>
                        <a href="something" class="button1 bouncy" style={{animation-delay: 0.07s}}>SJWHub</a>
                        <a href="something" class="button1 bouncy" style={{animation-delay: 0.14s}}>Plebbit</a>
                        <a href="something" class="button1 bouncy" style={{animation-delay: 0.21s}}>4chin</a>
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
