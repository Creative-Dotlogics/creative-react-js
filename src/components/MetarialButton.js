import React, { Component } from 'react';
class MaterialButton extends Component {
    render() {
        var btnClass = this.props.btnClass
        btnClass = "btn " + btnClass
        return (
            <div className="">
            	<button type={this.props.type} className={btnClass} onClick={this.props.onClick}>{this.props.btnName}</button>
            </div>
        )
    }
}

export default MaterialButton