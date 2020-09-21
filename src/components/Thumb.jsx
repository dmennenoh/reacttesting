import React, { Component } from 'react';
import {Figure} from 'react-bootstrap';

class Thumb extends Component
{    
    render() {
        return(
        <Figure>
            <Figure.Image
                width={260}
                height={230}
                alt="260x230"
                src={this.props.src}
            />
            <p className="thumbTitle">
                {this.props.caption}
            </p>
            <p className="thumbTool">
                {this.props.tool}
            </p>
        </Figure>)
    }
}

export default Thumb;