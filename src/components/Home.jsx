import React from 'react';
import {Jumbotron,Container} from 'react-bootstrap';
import Particles from 'react-particles-js';

function Home()
{
    return(
        <Jumbotron>
            <Container>
                Welcome to my little portfolio site. I've been building web sites, games, photobooths, and other apps for the past 20 years or so. 
                Here you'll find a little sampling of the many projects I've worked on and some of the tools I've used to create them.<br/><br/>
                This site is made with React, React Router and React Bootstrap.
                <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 80
	        },
	        "size": {
	            "value": 2,
	            "random": true
            },
            "color":{
                "value": "000000"
            }
	    }
	}} />
            </Container>
            
        </Jumbotron>
    );
}

export default Home;