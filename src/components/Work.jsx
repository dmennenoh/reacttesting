import React from 'react';
import { Component } from 'react';
import {Container} from 'react-bootstrap';


class Work extends Component
{
    constructor() 
    {  
        super(); //needed or we can't use 'this' here 
        this.state = {data:null, done:false};        
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

    imageClicked = (id) => {
        console.log("image " + id + " clicked");
    } 
    
    render()
    {
        if(!this.state.done){
            return (
                <Container>
                    <h2>Loading JSON</h2>
                </Container>
            );
        }else{
            return (
                <Container className='gallery'>
                    {this.state.data.gallery.map(item => (
                        <div className="thumbSizer">     
                            <div className="thumb">
                                <img src={item.image} alt={item.title} onClick={() => this.imageClicked(item.id)}/>                
                            </div>  
                            <p className="thumbTitle">
                                {item.title}
                            </p>
                            <p className="thumbTool">
                                {item.tool}
                            </p> 
                        </div>
                    ))}                    
                </Container>
            );
        }
    }
}

export default Work;