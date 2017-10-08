import React, { Component } from 'react';

class Slot extends Component {
    constructor(props) {
        super(props);
        this.play = this.play.bind(this);
    }

    play(e){
        alert(this.props.index)
    }

    render() {
        return (<div className="Slot" onClick={this.join}><span>{this.props.value}</span></div>)
    }
}

export default Slot
