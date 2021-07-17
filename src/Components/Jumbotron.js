import React from 'react'
import { Jumbotron as Jumbo, Container} from 'react-bootstrap'
import forest from '../forest.jpg'
import styled from 'styled-components'

const Styles = styled.div `
    .jumbo {
        background: url(${forest}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: 400px;
        position: relative;
        z-index: -2;
    }
    .overlay {
        background-color: #000;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
`;

const Jumbotron = () => (
    <Styles>
    <Jumbo fluid className="jumbo">
    <div className="overlay"></div>
    <Container>
        <h1>Some text H1</h1>
        <p>
            Some text for testingSome text  Some text for testingSome text
            Some text for testingSome text Some text for testingSome text
            Some text for testingSome text Some text for testingSome text
            Some text for testingSome text Some text for testingSome text
            Some text for testingSome text  Some text for testingSome text
        </p>
    </Container>
    </Jumbo>
    </Styles>
)

export default Jumbotron;
