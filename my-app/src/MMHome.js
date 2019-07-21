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
import MMList from './MMList'
import MMAnalysis from './MMAnalysis'
import MMHome2 from './MMHome2'


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
      <div>
        <header>
          <div>
          </div>
        </header>
        <body className="App-body-green">
          <Container fluid>
            <Row className="show-grid" >
              <Col md="1" className="App-nav-background" >
                <div >
                <Link  to="/list">
                <p onClick={this._menuToggle} ><img src={icon_list} /></p>
                </Link>
                 
                <Link  to="/analysis">
                <p><img src={icon_analysis} /></p>
                </Link>
                </div>
              </Col>
              <Col md="11" className="App-body-background-image-orange">
                <Route path="/" exact component={MMHome2.js} />
                <Route path="/list" component={MMList} />
                <Route path="/analysis" component={MMAnalysis} />

                {/* <Route path="/" exact component={APP1} /> */}
                  {/* <Col className="App-body-center">
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
                  </Col> */}

              </Col>
            </Row>
          </Container>

        </body>

      </div>

    );
  }
}

export default App;

const Box = props => <div className="box">{props.children} </div>;

// render(<App />, document.getElementById("root"));
