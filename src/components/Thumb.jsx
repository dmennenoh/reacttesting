import React, { Component } from 'react';
import {Container} from 'react-bootstrap';

class Thumb extends Component
{    
    render() {
        return(   
            <div className="thumbSizer">     
                <div className="thumb">
                    <img src={this.props.src} alt="This zooms-in really well and smooth" />                
                </div>  
                <p className="thumbTitle">
                    {this.props.caption}
                </p>
                <p className="thumbTool">
                    {this.props.tool}
                </p> 
          </div>     
        );
    }
}

export default Thumb;