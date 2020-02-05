import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/AxiosWithAuth';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../assets/nextset.png';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Navigation = (props) => {
  const [name, setName] = useState("");

  useEffect(() => {
    axiosWithAuth()
      .get('api/user')
      .then(res => {
        console.log(res);
        setName(res.data.name);
      })
      .catch(err => {

        console.log(err)
      })
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color='light' light expand='md'>
        <NavbarBrand href="#"><img style={img} src={Logo}/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='mr-auto' navbar>
            {/* <NavItem> 
              <NavLink href="/components/">Components</NavLink>
            </NavItem> 
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem> */}
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle>≡</DropdownToggle>
              <DropdownMenu left>
                <DropdownItem>Create an Exercise</DropdownItem>
                <DropdownItem>View Exercises</DropdownItem>
                <DropdownItem>View User Info</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText style={user}>Welcome, {name}!</NavbarText>
        </Collapse>
      </Navbar>
      <div>

      </div>
    </div>
  );
};

export default Navigation;

// inline styling
const user = {
  marginRight: "1%",
}
 const img = {
   width: "200px",
   height: "110px",
 }