import React, {useState} from 'react'
import Slider from "./Components/Slider"
import Jumbotron from "./Components/Jumbotron"
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import one from './one.jpg'
import two from './two.jpg'
import three from './three.jpg'
export const Home = () => (
    <>
        <Slider></Slider>
        <Container style={{ paddingTop: "2rem", paddingBottom: '2rem' }}>
            <Row>
                <Col>
                    <Card style={{ width: "18rem" }}>
                        <Card.Img variant="top" src={one} />
                        <Card.Body>
                            <Card.Title>Кот</Card.Title>
                            <Card.Text>
                                Кот
                            </Card.Text>
                            <Button target="_blank" href="https://ru.wikipedia.org/wiki/Кошка" variant="primary">Learn more</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: "18rem" }}>
                        <Card.Img variant="top" src={two} />
                        <Card.Body>
                            <Card.Title>Кот</Card.Title>
                            <Card.Text>
                                Кот
                            </Card.Text>
                            <Button target="_blank" href="https://ru.wikipedia.org/wiki/Кошка" variant="primary">Learn more</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: "18rem" }}>
                        <Card.Img variant="top" src={three} />
                        <Card.Body>
                            <Card.Title>Енот</Card.Title>
                            <Card.Text>
                                Енот
                            </Card.Text>
                            <Button target="_blank" href="https://ru.wikipedia.org/wiki/Еноты"  variant="primary">Learn more</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        <Jumbotron></Jumbotron>
        <Container style={{marginBottom:"30px"}}>
            <Row>
                <Col md={7}>
                    <img src={three} height={400}/>
                </Col>
                <Col md={5}>
                    <h2>Енот</h2>
                    <p>Some text for testingSome text  Some text for testingSome text
            Some text for testingSome text Some text for testingSome text
            Some text for testingSome text Some text for testingSome text
            Some text for testingSome text Some text for testingSome text
            </p>

                </Col>
            </Row>
        </Container>
    </>
)