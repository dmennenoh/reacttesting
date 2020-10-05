import React from 'react';
import {Jumbotron,Container} from 'react-bootstrap';
import Particles from 'react-particles-js';

function Home()
{
    return(
        
            <Container className="contact">                
                Welcome to my little portfolio site. I've been building web sites, games, photobooths, and other interactives for the past 20 years or so. 
                Here you'll find a little sampling of the many projects I've worked on and some of the tools I've used to create them.<br/><br/>
                This site is made with React, React Router and React Bootstrap.
                <Particles
    params={{
	    particles: {            
	        number: {
                value: 60,
                density: {
                    enable: true,
                    value_area: 800
                  }
            },
            line_linked: {
                enable_auto: true,
                distance: 80,
                color: "#000",
                opacity: .2,
                width: 1,
                condensed_mode: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 600
                }
              },
	        size: {
	            value: 1,
	            random: true
            },
            color:{
                value: "#000"
            }
	    }
	}} />
            </Container>
            
        
    );
}

export default Home;