import React from 'react';
import {Container} from 'react-bootstrap';

function Contact()
{
    return(
        
        <Container>
            <ul className="contact">
                <li><span className='blueText'>Email: </span>dmennenoh95@gmail.com</li>
                <li><span className='blueText'>LinkedIn: </span><a href='http://www.linkedin.com/in/dmennenoh' target='_blank' rel='noopener noreferrer'>linkedin.com/in/dmennenoh</a></li>
                 <li><span className='blueText'>ArtStation: </span><a href='http://www.artstation.com/dmennenoh' target='_blank' rel='noopener noreferrer'>artstation.com/dmennenoh</a></li>
                <li>I live in SE Wisconsin with my beautiful wife Jacqueline (<a href='http://www.jacqlines.com' target='_blank' rel='noopener noreferrer'>jacqlines.com</a>) and my two boys Kaden (11) and Kian (7)</li>
            </ul>            
            <img width='90%' height='auto' src='/assets/thefam.jpg' alt='the family'/>
        </Container>
    );
}

export default Contact;
