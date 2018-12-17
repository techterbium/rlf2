import React, { Component, Fragment } from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";

import { Home, Library } from "./async/Comp";
import {UnderConstruction} from "../components/common/UnderConstruction";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggle = (...argument) => {
    var newIsOpen =
      argument.length === 1 && typeof argument[0] === "boolean"
        ? argument[0]
        : !this.state.isOpen;
    this.setState({
      isOpen: newIsOpen
    });
  };

  render() {
    return (
      <div>
        <Router>
          <Fragment>
            <Navbar light expand="md" style={{ backgroundColor: "#ab2708" }}>
              <Link
                to="/"
                onClick={() => {
                  this.toggle(false);
                }}
                className="nav-brand-item"
              >
                Rural Library Foundation
              </Link>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <Link to="/lib" onClick={this.toggle} className="nav-item">
                      Libraries
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/sp" onClick={this.toggle} className="nav-item">
                      Sponsorers
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/ac" onClick={this.toggle} className="nav-item">
                      Activities
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/ne" onClick={this.toggle} className="nav-item">
                      News
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/cu" onClick={this.toggle} className="nav-item">
                      Contact Us
                    </Link>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
            <Switch>
              <Route exact path="/" component={Home} />
              {/* <Route exact path="/lib" component={Library} /> */}
              <Route component={UnderConstruction} />
            </Switch>
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default Index;
