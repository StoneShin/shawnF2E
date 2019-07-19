import React, { Component } from "react";
import { render } from "react-dom";
import logo from './logo.svg';
import { Row, Col, Container } from 'reactstrap';
import { Button, CardBody, Collapse, Card } from 'reactstrap';

import orange from './img/orange.svg';
import icon_cancel from './img/icon-cancel.svg';
import icon_bell from './img/icon-bell.svg';
import icon_list from './img/icon-list.svg'
import icon_analysis from './img/icon-analysis.svg'

import { OffCanvas, OffCanvasMenu, OffCanvasBody } from "react-offcanvas";
import classNames from 'classnames';
import Sidebar from "react-sidebar";
import './App.css';


//要加這行才能用bootstrap
import "bootstrap/dist/css/bootstrap.css";

class MenuLinks extends React.Component {
  constructor(props) {
    super(props);
    // Any number of links can be added here
    this.state = {
      links: [{
        text: 'Author',
        link: 'https://github.com/Lakston',
        icon: 'fa-pencil-square-o'
      }, {
        text: 'Github page',
        link: 'https://github.com/Lakston',
        icon: 'fa-github'
      }, {
        text: 'Twitter',
        link: 'https://twitter.com/Fab_is_coding',
        icon: 'fa-twitter'
      }]
    }
  }
  render() {
    let links = this.state.links.map((link, i) => <li ref={i + 1}><i aria-hidden="true" className={`fa ${ link.icon }`}></i><a href={link.link} target="_blank">{link.text}</a></li>);

    return (
        <div className={this.props.menuStatus} id='menu'>
          <ul>
            { links }
          </ul>
        </div>
    )
  }
}


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
            {/* <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Toggle</Button> */}
            <Button color="primary" onClick={this.onSetSidebarOpen} style={{ marginBottom: '1rem' }}>Toggle</Button>
           
          </div>
        </header>
        <body className="App-body-green">
          <Container fluid>
            <Row className="show-grid" >
              <Col md="1" className="App-nav-background" >
                <div >
                  <p onClick={this._menuToggle} ><img src={icon_list} /></p>
                  <p><img src={icon_analysis} /></p>
                </div>
              </Col>
              <Col md="11" className="App-body-background-image-orange">
                <Row >
                  <Col className="App-body-center">
                          <div>
                      <p style={{ fontSize: 150 }}>25:00</p>
                      <div style={{ textAlign: "center" }}>
                        <img src={icon_bell} className="App-image-square" />
                        <img src={orange} className="App-image-square-fill" />
                        <img src={icon_cancel} className="App-image-square" />
                      </div>

                    </div>
                    <Sidebar
        sidebar={<b>Sidebar content</b>}
        open={this.state.sidebarOpen}
        dragToggleDistance={"1000"}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "white" } }}
      >
        <button onClick={() => this.onSetSidebarOpen(true)}>
          Open sidebar
        </button>
      </Sidebar>
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

render(<App />, document.getElementById("root"));
