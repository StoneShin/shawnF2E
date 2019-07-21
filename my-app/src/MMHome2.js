import React, { Component } from "react";
import { render } from "react-dom";
import { Row, Col, Container } from 'reactstrap';
import { FormControl, InputGroup, Button, ListGroup } from 'react-bootstrap';

import { Route } from 'react-router-dom';

import orange from './img/orange.svg';
import icon_cancel from './img/icon-cancel.svg';
import icon_bell from './img/icon-bell.svg';
import icon_list from './img/icon-list.svg'
import icon_analysis from './img/icon-analysis.svg'
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './App.css';


//要加這行才能用bootstrap
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
    constructor(props) {
        super(props);
        // this.toggle = this.toggle.bind(this);
        // this.state = { collapse: false };
        this.state = {
            sidebarOpen: true
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);

        this.state = {
            isOpen: false
        }
        this._menuToggle = this._menuToggle.bind(this);
        // this._handleDocumentClick = this._handleDocumentClick.bind(this);
    }
    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }
    componentDidMount() {
        document.addEventListener('click', this._handleDocumentClick, false);
    }
    componentWillUnmount() {
        document.removeEventListener('click', this._handleDocumentClick, false);
    }
    // _handleDocumentClick(e) {
    //   if (!this.refs.root.contains(e.target) && this.state.isOpen === true) {
    //     this.setState({
    //     isOpen: false
    //   });
    //   };
    // }
    _menuToggle(e) {
        e.stopPropagation();
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
    }


    render() {
        let menuStatus = this.state.isOpen ? 'isopen' : '';
        const classStr = classNames({
            'collapse': true,
            'width': true
        });
        return (
            <Row>
                <Col className={"App-body-center+"+" "+"List-shadow"} >
                    <Container>
                        <Row>
                            <Col>
                                <h1>代辦清單</h1>
                            </Col>


                            <Col>
                                <button className="Analysis-list-size-16">未完成</button>
                                <button>已完成</button>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="App-body-center" >
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
                </Col>

                <Col className="App-body-center">
                <div>
                      <p style={{ fontSize: 150 }}>25:00</p>
                      <div style={{ textAlign: "center" }}>
                        <img src={icon_bell} className="App-image-square" />
                        <img src={orange} className="App-image-square-fill" />
                        <img src={icon_cancel} className="App-image-square" />
                      </div>

                    </div>
                </Col>
            </Row>

        );
    }
}

export default App;

const Box = props => <div className="box">{props.children} </div>;

// render(<App />, document.getElementById("root"));
