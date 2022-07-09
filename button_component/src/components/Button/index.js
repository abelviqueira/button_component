import React, { Component } from 'react';
import './style.css';

class Button extends Component {
    render() {
        return (
            <div className='button'>
                {this.props.children ? this.props.children : 'Default'}
            </div>
        );
    }
}

export default Button;