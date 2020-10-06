import React from 'react';
import { Component } from 'react';
import {Container} from 'react-bootstrap';
import ModalGall from './ModalGall';


class Work extends Component
{
    
    constructor() 
    {  
        super(); //needed or we can't use 'this' here 
        this.state = {data:null, done:false, modal:null};        
    }


    //react lifecyle method
    componentDidMount()
    {
        let req = new XMLHttpRequest();
        req.open("GET", "./assets/galleryData.json", true);

        //arrow function - binds this to calling object - Work class
        req.onload = () => {
            if (req.readyState === 4) {
                if (req.status === 200) { 
                    let jp = JSON.parse(req.responseText);
                    this.setState({data: jp, done:true});   //causes component to rerender         
                } else {
                    console.error(req.statusText);
                }
            }
        };

        req.send();
    }


    imageClicked = (key) => {
        for(let i = 0; i < this.state.data.galleryData.length; i++){
            if(this.state.data.galleryData[i].key === key){                
                this.setState({modal:this.state.data.galleryData[i]});
                break;
            }
        }        
    } 
    

    modalClosed(ref)
    {
        ref.setState({modal:null});
    }


    render()
    {
        if(!this.state.done){
            return (
                <Container>
                    <p>...loading json...</p>
                </Container>
            );
        }else{
            return (                
                <Container className='gallery'>
                    {this.state.data.galleryThumbs.map((item, index) => (
                        <div key={index} className="thumbSizer">     
                            <div className="thumb">
                                <img src={item.image} alt={item.title} onClick={() => this.imageClicked(item.key)}/>                
                            </div>  
                            <p className="thumbTitle">
                                {item.title}
                            </p>
                            <p className="thumbTool">
                                {item.tool}
                            </p> 
                        </div>
                    ))}                    
                    <ModalGall data={this.state.modal} cb={() => this.modalClosed(this)}/>                                                
                </Container>                 
            );
        }
    }
}

export default Work;