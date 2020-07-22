import React from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";
require("./Tabs.css");

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              <h4>
                <strong>Social</strong>
              </h4>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              <h4>
                <strong>Direct</strong>
              </h4>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="3">
                <a href="https://github.com/joshuaeup">
                  <i
                    className="fa fa-github-square fa-3x socialIcon"
                    aria-hidden="true"
                  />
                </a>
              </Col>
              <Col sm="3">
                <a href="https://www.linkedin.com/in/joshua-proctor">
                  <i
                    className="fa fa-linkedin-square fa-3x socialIcon"
                    aria-hidden="true"
                  />
                </a>
              </Col>
              <Col sm="3">
                <a href="https://codepen.io/joshuaeup/">
                  <i
                    className="fa fa-codepen  fa-3x socialIcon"
                    aria-hidden="true"
                  />
                </a>
              </Col>
              <Col sm="3">
                <a href="https://www.instagram.com/joshuaeup">
                  <i
                    className="fa fa-instagram fa-3x socialIcon"
                    aria-hidden="true"
                  />
                </a>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="6">
                <h4 className="text-white d-flex align-items-center contactInfo">
                  <i
                    className="fa fa-envelope-o directIcon"
                    aria-hidden="true"
                  />{" "}
                  joshuaeup@gmail.com
                </h4>
              </Col>
              <Col sm="6">
                <h4 className="text-white d-flex align-items-center contactInfo">
                  <i
                    className="fa fa-phone-square directIcon"
                    aria-hidden="true"
                  />{" "}
                  (980) 365 - 1799
                </h4>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
