import React from 'react';
import { Component } from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'

class ModalGall extends Component
{
    render()
    {       
        if(!this.props.data){
            return(null);
        }
        return (       
            <div className="mymodal">            
                <div id="caption"><p>{this.props.data.text}</p></div>
                <Button className="upRight" variant="primary" onClick={this.props.cb}>
                    Close
                </Button>   
                <Row lg="6" className="justify-content-md-center">
                    {this.props.data.images.map(function(item,index) { return( <Col><img key={index} className="img-fluid" src={item} alt="pretty"/></Col>)})}
                </Row>
                               
            </div>
        );
    }
}

export default ModalGall;