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
        let divisor = 5; 
        let counter = 0;
        
        if(this.props.data.images.length > divisor){
            divisor = Math.max(5, Math.floor(this.props.data.images.length / 2));            
        }

        let retS = "<div class=\"justify-content-md-center row row-cols-lg-5\">";
        for(let i = 0; i < this.props.data.images.length; i++){
            retS += "<div class=\"col\"><img key=\"" + i + "\" class=\"img-fluid img-pad\" src=\"" + this.props.data.images[i] + "\" alt=\"pretty\"/></div>";
           
            counter++;           
            if(counter === divisor){
                retS += "</div>";//close current row
                retS += "<div class=\"justify-content-md-center row row-cols-lg-5\">";//open new row
                counter = 0;
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