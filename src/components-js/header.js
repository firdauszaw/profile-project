import React from 'react';
import {SvgIcon} from '@material-ui/core';
import {Navbar, Nav, Button} from 'react-bootstrap';
import '../components-css/header.css';

function HomeIcon(props){
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}

export default function headNav(){
    return (
      <>
        <Navbar bg="dark" expand="lg">
            <HomeIcon color="primary" fontSize="large"/>
            <Navbar.Toggle aria-controls="navbar-coll" />
                <Navbar.Collapse id="navbar-coll" className="justify-content-end">
                    <Nav>
                        <Button variant="outline-light"  className = "centerNav" href="#">Home</Button>{' '}
                        <Button variant="outline-light"  className = "centerNav" href="#">About</Button>{' '}
                        <Button variant="outline-light"  className = "centerNav" href="#">Experience</Button>{' '}
                        <Button variant="outline-light"  className = "centerNav" href="#">Services</Button>{' '}
                        <Button variant="outline-light"  className = "centerNav" href="#">Portfolio</Button>{' '}
                        <Button variant="outline-light"  className = "centerNav" href="#">Contact Me</Button>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
      </>  
    );
}