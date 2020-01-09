import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { NavDropdown } from "react-bootstrap";
import "./Menu.css";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #0c1937;
`;
const MenuItem = styled(NavLink)`
  color: #000000;
  padding: 10px;
  background-color: #e1e8f7;
  &:hover {
    text-decoration: none;
    color: #6784c7;
  }
`;
const Wrapper = styled(NavDropdown)`
  height: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  margin: 5px;
  color: #ffffff !important;
  &:hover {
    border: 1px solid #ffffff;
  }
`;

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAboutMenu: false
    };
  }

  render() {
    console.log(this.state);
    return (
      <Container>
        <Wrapper
          title={<span style={{ color: "red" }}>System</span>}
          id="basic-nav-dropdown"
        >
          {/* <NavDropdown.Item> */}
          <MenuItem to="/ba110">BA110 Site for super-user</MenuItem>
          <MenuItem to="/ba110">BA110 Site for super-user</MenuItem>
          <MenuItem to="/ba110">BA110 Site for super-user</MenuItem>
          <MenuItem to="/ba110">BA110 Site for super-user</MenuItem>
          {/* </NavDropdown.Item> */}
          {/* <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
        </Wrapper>
        {/* <Wrapper>
          <MenuItem to="/system">System</MenuItem>
        </Wrapper>
        <Wrapper>
          <MenuItem to="/public">Public Page</MenuItem>
        </Wrapper>
        <Wrapper>
          <MenuItem to="/protected">Protected Page</MenuItem>
        </Wrapper> */}
      </Container>
    );
  }
}
