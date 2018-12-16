import React, { Component, Fragment } from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

import { Home, Library } from "./async/Comp";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <Router>
          <Fragment>
            <Navbar light expand="md" style={{ backgroundColor: "#ab2708" }}>
              {/* <NavbarBrand href="/" style={{ color: "#fff" }}>
                Rural Library Foundation
              </NavbarBrand> */}
              <Link to="/" style={{ color: "#fff" }}>Rural Library Foundation</Link>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    {/* <NavLink href="/lib/" style={{ color: "#fff" }}>
                      Libraries
                    </NavLink> */}
                    <Link to="/lib" style={{ color: "#fff" }}>Libraries</Link>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/sp/" style={{ color: "#fff" }}>
                      Sponsors
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/ac/" style={{ color: "#fff" }}>
                      Activities
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/ne/" style={{ color: "#fff" }}>
                      News
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/cu/" style={{ color: "#fff" }}>
                      Contact us
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/lib" component={Library} />
            </Switch>
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default Index;
