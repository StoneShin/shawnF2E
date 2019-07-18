import React, { Component } from "react";
import { render } from "react-dom";
import logo from './logo.svg';
import { Row, Col, Container } from 'reactstrap';
import { Button,CardBody, Collapse,Card } from 'reactstrap';

import orange from './img/orange.svg';
import icon_cancel from './img/icon-cancel.svg';
import icon_bell from './img/icon-bell.svg';
import icon_list from './img/icon-list.svg'
import icon_analysis from './img/icon-analysis.svg'

import './App.css';


//要加這行才能用bootstrap
import "bootstrap/dist/css/bootstrap.css";



class App extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }


  render() {
    return (

      <div>
        <header>
        <div>
        <Button color="primary"  onClick={this.toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
      </div>

          {/* <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          */}
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </header>
        <body className="App-body-green">
          <Container fluid>
            <Row className="show-grid" >
              <Col md="1" className="App-nav-background" >
                <div >
                  <p data-toggle="collapse" data-target="#navbarToggleExternalContent"><img src={icon_list} /></p>
                  <p><img src={icon_analysis} /></p>
                </div>
              </Col>
              <Col md="11" className="App-body-background-image-orange">
                <Row >
                <Collapse isOpen={this.state.collapse} className={`menu-show ${this.state.collapse}`} width >
          <Card>
            <CardBody>
            Anim pariatur cliche reprehenderit,
             enim eiusmod high life accusamus terry richardson ad squid. Nihil
             anim keffiyeh helvetica, craft beer labore wes anderson cred
             nesciunt sapiente ea proident.
            </CardBody>
          </Card>
        </Collapse>
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
               
                    {/* <p>構思番茄鐘頁面</p>
                    <li>
                      <dl>
                        <dt><input type="checkbox" />構思番茄鐘頁面</dt>
                        <dd> Black, Strong </dd>
                      </dl>
                    </li> */}
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
