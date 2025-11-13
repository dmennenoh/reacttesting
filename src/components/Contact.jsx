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
                <li><span className='blueText'>My Resume: </span><a href='https://www.dmennenoh.netlify.app/assets/resume_dmennenoh.pdf' target='_blank' rel='noopener noreferrer'>My resume - PDF</a></li>
                <li>I live in SE Wisconsin with my beautiful wife Jacqueline (<a href='http://www.kadenkian.com' target='_blank' rel='noopener noreferrer'>kadenkian.com</a>) and my two boys Kaden (16) and Kian (12)</li>
            </ul>            
            <img width='90%' height='auto' src='/assets/thefam.jpg' alt='the family'/>
        </Container>
    );
}

export default Contact;
