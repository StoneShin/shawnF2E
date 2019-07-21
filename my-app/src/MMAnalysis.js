import React, { Component } from "react";
import { render } from "react-dom";
import { Row, Col, Container } from 'reactstrap';
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
                <Col className={"App-body-center+" + " " + "List-shadow"} >
                    <Container>
                        <Row>
                            <Col>
                                <h1>專注度分析</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col className={"App-body-center"} >
                                <div className="vertical">
                                    <div>
                                        <p className="Analysis-list-size-16">今日  2019.07.13</p>
                                    </div>
                                    <div className="Analysis-border">
                                        <Row>
                                            <Col>
                                                <p className="Analysis-list-size">9</p>
                                                <p className="Analysis-list-size-16">待辦事項</p>
                                            </Col>
                                            <Col>
                                                <p className="Analysis-list-size-orange">7</p>
                                                <p className="Analysis-list-size-16">已完成</p>
                                            </Col>
                                        </Row>

                                    </div>
                                </div>
                            </Col>

                            <Col>
                                <div className="vertical">
                                    <div>
                                        <p className="Analysis-list-size-16">本週  2019.07.13</p>
                                    </div>
                                    <div className="Analysis-border">
                                        <Row>
                                            <Col>
                                                <p className="Analysis-list-size">54</p>
                                                <p className="Analysis-list-size-16">待辦事項</p>
                                            </Col>
                                            <Col>
                                                <p className="Analysis-list-size-orange">48</p>
                                                <p className="Analysis-list-size-16">已完成</p>
                                            </Col>
                                        </Row>

                                    </div>
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
