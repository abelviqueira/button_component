import React, { Component, useState, useEffect } from 'react';
import './style.css';
class Button extends Component {
    constructor(props) {
        super(props);
        let variant = typeof this.props.variant !== 'undefined' ? this.props.variant : false;
        let disabled = typeof this.props.disabled !== 'undefined' ? 'disabled' : false;
        let disableShadow = typeof this.props.disableShadow !== 'undefined' ? 'disableShadow' : false;

        this.classes = {
            variant: variant,
            disabled: disabled,
            disableShadow: disableShadow,
        }
        
    }
    

    render() {
        // const classes = this.state.variant + ' ' + this.state.disabled + ' ' + this.state.disableShadow;
        const classes = Object.values(this.classes).filter((x) => x !== false).join(' ');

        return (
            <button key="button" className={classes}>
                {this.props.children ? this.props.children : 'Default'}
            </button>
        );
    }
}

export default Button;