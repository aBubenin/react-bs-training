import React from 'react'
import { Carousel } from 'react-bootstrap'
import forest from '../forest.jpg'
export default function Slider(){
    return (
    
    <Carousel>
        <Carousel.Item style ={ {'height': '600px'}}>
            <img
                className="d-block w-100"
                src={forest}
                alt="First slide"
                />
            <Carousel.Caption>
                <h3>Some Text</h3>
                <p>Do do nostrud est aliqua.</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item style ={ {'height': '600px'}}>
            <img
                className="d-block w-100"
                src={forest}
                alt="First slide"
                />
            <Carousel.Caption>
                <h3>Some Text</h3>
                <p>Do do nostrud est aliqua.</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item style ={ {'height': '600px'}}>
            <img
                className="d-block w-100"
                src={forest}
                alt="First slide"
                />
            <Carousel.Caption>
                <h3>Some Text</h3>
                <p>Do do nostrud est aliqua.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    
 )
}