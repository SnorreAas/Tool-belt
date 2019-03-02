import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './css/App.css';
import './css/Nav.css';
import Nav from './components/navbar';
import Pages from './components/pages';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <BrowserRouter>
                {/* Navigation Bar */}
                <div className="container-fluid" style={{ height: '100vh' }}>
                    <Nav />
                    {/* Page content */}
                    <div className="window">
                        <Pages />
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
