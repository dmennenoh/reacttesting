import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Thumb from './Thumb';

function Work()
{
    return(
        <Container>
            <Row><br/></Row>
            <Row>
                <Col sm={3}>
                    <Thumb src={'./assets/thumbNutZ.jpg'} caption={'The Beginning'} tool={'TI99/4A'}/>
                </Col>
                <Col sm={3}>
                    <Thumb src={'./assets/thumbBigShot.jpg'} caption={'Nissan Sentra Big Shot'} tool={'Unity with Logitech G920 Steering Wheel'}/>
                </Col>
                <Col sm={3}>
                    <Thumb src={'./assets/thumbArtWall.jpg'} caption={'Nissan Pride & Progess Art Wall'} tool={'Unity with HTC Vive'}/>
                </Col>
                <Col sm={3}>
                    <Thumb src={'./assets/thumbXfinityBobble.jpg'} caption={'Xfinity Bobble Head Creator'} tool={'Unity'}/>
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                    <Thumb src={'./assets/thumbGSC.jpg'} caption={'Associated Bank Grand Slam Challenge'} tool={'Unity with Arduino'}/>
                </Col>
                <Col sm={3}>
                    <Thumb src={'./assets/thumbKatyPerry.jpg'} caption={'Katy Perry Witness Tour AR Photo Booth'} tool={'Adobe Animate with Facial recognition'}/>
                </Col>
                <Col sm={3}>
                    <Thumb src={'./assets/thumbSuitUp.jpg'} caption={'Associated Bank Suit Up'} tool={'Unity with Bellus 3D Camera'}/>
                </Col>
                <Col sm={3}>
                    <Thumb src={'./assets/thumbTheLab.jpg'} caption={'GMR The Lab VR interface'} tool={'Unity with HTC Vive'}/>
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                    <Thumb src={'./assets/thumbFixel.jpg'} caption={'Fixel 3D Display Prototype'} tool={'Unity and Arduino'}/>
                </Col>
                <Col sm={3}>
                    <Thumb src={'./assets/thumbXYZBert.jpg'} caption={'XYZBert - WebGL Game'} tool={'Unity and Blender'}/>
                </Col>    
                <Col sm={3}>
                    <Thumb src={'./assets/thumbShaders.jpg'} caption={'Some Shaders'} tool={'Unity - Shader Graph'}/>
                </Col>
                <Col sm={3}>
                    <Thumb src={'./assets/thumbBlender.jpg'} caption={'Blender Learnings'} tool={'Blender 2.8'}/>
                </Col>                
            </Row>
        </Container>
    );
}

export default Work;