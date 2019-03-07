import React, { Component } from 'react';

const test = [
    'Hand tools',
    'Equipment',
    'Power tools',
    'Radios',
    'Fasteners',
    'Ladders',
    'Abrasives',
    'Air tools',
    'Cleaning',
];

class Categories extends Component {
    constructor(props) {
    super(props);
    this.state = {
        setBtnActive: 'btnActive',
        setBtnDisabled: '',
        btnClass: '',
    };
    this.handleOnChange = this.handleOnChange.bind(this);
}

handleOnChange(){
    this.setState({
        test: this.state.setBtnActive,
    });
}


render() {
    const { btnClass } = this.state;
    const listItems = test.map((item, i) =>
        <button key={i} onChange={() => this.handleOnChange} className={"cat_btn "+{btnClass}}>{item}</button>
    );
    return (
        <div>
            {listItems}
        </div>
        );
    }
}

export default Categories;
