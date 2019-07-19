import React, { Component } from 'react'
import { Row, Col, Container } from 'reactstrap';
import { FormControl, InputGroup, Button,ListGroup } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';

import './css/MMTodoList.css';


//要加這行才能用bootstrap
import "bootstrap/dist/css/bootstrap.css";
export default class App extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h1>代辦清單</h1>
                    </Col>


                    <Col>
                        <button>未完成</button>
                        <button>已完成</button>
                    </Col>
                </Row>
                <Row>
                    <Col className="App-body-center">
                        <div>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="新增待辦清單"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <InputGroup.Append>
                                    <Button className="button-background" variant="outline-secondary">Button</Button>
                                </InputGroup.Append>
                            </InputGroup>

                            <ListGroup variant="flush">
                                <ListGroup.Item className="list-background">構思</ListGroup.Item>
                                <ListGroup.Item className="list-background">Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item className="list-background">Morbi leo risus</ListGroup.Item>
                                <ListGroup.Item className="list-background">Porta ac consectetur ac</ListGroup.Item>
                            </ListGroup>
                        </div>


                    </Col>
                </Row>
            </Container>
        )
    }
}