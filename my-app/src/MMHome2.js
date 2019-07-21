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



    render() {
        return (
            <Row>
                <Col className={"App-body-center"} >
                    <div>
                        <p style={{ fontSize: 150 }}>25:00</p>
                        <div style={{ textAlign: "center" }}>
                            <img src={icon_bell} className="App-image-square" />
                            <img src={orange} className="App-image-square-fill" />
                            <img src={icon_cancel} className="App-image-square" />
                        </div>

                    </div>
                </Col>

                <Col className="App-body-center">
                    <ul>
                        <li>構思番茄鐘頁面</li>
                        <li>學習javascript</li>
                        <li>學習網頁切版</li>
                        <li>設計番茄鐘 UI介面</li>
                    </ul>
                </Col>
            </Row>
        );
    }
}

export default App;

const Box = props => <div className="box">{props.children} </div>;

// render(<App />, document.getElementById("root"));
