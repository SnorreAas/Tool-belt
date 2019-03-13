import React, { Component } from 'react';

class Searchfield extends Component {
    constructor(props){
        super(props);
        this.state = {
            search: '',
        };
        this.handleOnChangeSearch = this.handleOnChangeSearch.bind(this);
    }

    handleOnChangeSearch(event){
        this.props.handleData(this.state.search);
        this.setState({
            search: event.target.value.substr(0, 20),
        });
    }

render() {
    const { search } = this.state;
    return (
        <div>
            <input type="text"
                value={search}
                onChange={this.handleOnChangeSearch}
                placeholder="Search.."
            />
            <div className="close">
                <span className="front"></span>
                <span className="back"></span>
            </div>
        </div>
    );
  }
}

export default Searchfield;
