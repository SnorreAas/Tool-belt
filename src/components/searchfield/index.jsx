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
        this.setState({
            search: event.target.value.substr(0, 20)
        }, () => {
            this.props.handleData(this.state.search);
            console.log(this.state.search);
        });
    }

    handleSearchData(){
        this.setState({
            search: ''
        }, () => {
            this.props.handleData(this.state.search);
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
            <div className="close" onClick={this.handleSearchData.bind(this)}>
                <span className="front" onClick={this.handleSearchData.bind(this)}></span>
                <span className="back" onClick={this.handleSearchData.bind(this)}></span>
            </div>
        </div>
    );
  }
}

export default Searchfield;
