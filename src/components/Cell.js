import React, { Component } from 'react';

class Cell extends Component {

    render() {
        return (<div className="Cell"><span>{this.props.value}</span></div>)
    }
}

export default Cell
