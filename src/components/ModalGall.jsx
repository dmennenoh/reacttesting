import React from 'react';
import { Component } from 'react';
import {Button} from 'react-bootstrap';
import ReactHtmlParser from 'react-html-parser';
 
class ModalGall extends Component
{
    render()
    {       
        if(!this.props.data){
            return(null);
        }
        
        let retS = "<div class=\"justify-content-md-center row row-cols-lg-6\">";
        for(let i = 0; i < this.props.data.images.length; i++){
            retS += "<div class=\"col\"><img key=\"" + i + "\" class=\"img-fluid\" src=\"" + this.props.data.images[i] + "\" alt=\"pretty\"/></div>";
           
            if(i % 5 === 0 && i !== 0){
                retS += "</div>";//close current row
                retS += "<div class=\"justify-content-md-center row row-cols-lg-6\">";//open new row
            }
        }
        retS += "</div>";        
        
        return (       
            <div className="mymodal">            
                <div id="caption"><p>{this.props.data.text}</p></div>
                <Button className="upRight" variant="primary" onClick={this.props.cb}>
                    Close
                </Button>
                { ReactHtmlParser(retS) }                
            </div>
        );
    }
}

export default ModalGall;