import React, { Component } from "react";
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from "react-offcanvas";
import { Row, Col, Container } from 'reactstrap';
import { Button, CardBody, Collapse, Card } from 'reactstrap';

import orange from './img/orange.svg';
import icon_cancel from './img/icon-cancel.svg';
import icon_bell from './img/icon-bell.svg';
import icon_list from './img/icon-list.svg'
import icon_analysis from './img/icon-analysis.svg'

import styles from "./styles.css";

export default class App extends Component {
    componentWillMount() {
        // sets the initial state
        this.setState({
            isMenuOpened: false
        });
    }

    render() {
        return (
            <div>
                <header>
                    <div>
                        {/* <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Toggle</Button> */}
                    </div>
                </header>
                <body className="App-body-green">
                    <Container fluid>
                        <Row className="show-grid" >
                            <Col md="1" className="App-nav-background" >
                                <div >
                                    <p onClick={this.handleClick.bind(this)} ><img src={icon_list} /></p>
                                    <p><img src={icon_analysis} /></p>
                                </div>
                            </Col>
                            <Col md="11" className="App-body-background-image-orange">


                                <OffCanvas
                                    width={300}
                                    transitionDuration={300}
                                    isMenuOpened={this.state.isMenuOpened}
                                    position={"left"}
                                    effect={"parallax"}
                                >
                                    <OffCanvasBody

                                        className={styles.bodyClass}
                                        style={{ fontSize: "30px" }}
                                    >
                                        <Row>
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

                                            <Col className="App-body-center">
                                                <ul>
                                                    <li>構思番茄鐘頁面</li>
                                                    <li>學習javascript</li>
                                                    <li>學習網頁切版</li>
                                                    <li>設計番茄鐘 UI介面</li>
                                                </ul>
                                            </Col>
                                        </Row>
                                    
                                    </OffCanvasBody>
                                </OffCanvas>
                              
                            </Col>
                        </Row>
                    </Container>

                </body>

            </div>

        );
    }

    handleClick() {
        // toggles the menu opened state
        this.setState({ isMenuOpened: !this.state.isMenuOpened });
    }
}