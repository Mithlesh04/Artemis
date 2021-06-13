import React from 'react';
import { Row , Navbar , Form , FormControl , Button } from 'react-bootstrap';
import BrandLogo from "./../../images/brand-logo.svg"
import { Search , Gear , ChatSquare , Bell } from 'react-bootstrap-icons';

import Avatar from "./../../images/userImg.jpg"

export function TopHeader(){
    return <Navbar fixed="top" style={{ backgroundColor : '#fefefe' , boxShadow : '0px 0px 6px 0px rgb(41 41 41 / 25%)' }}>
    <Navbar.Brand href="#home" className="ml-5">
      <img
        alt=""
        src={BrandLogo}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />
      <span className="ml-2" style={{fontWeight : 600}}>Artemis</span>
    </Navbar.Brand>

    <Form className="d-flex ml-5 pl-5">
    <Button variant="outline-none"><Search style={{color:'#ccc'}} /></Button>
      <FormControl
        type="search"
        placeholder="Type to search..."
        className="mr-2 ml-0 pl-0"
        aria-label="Search"
        variant = "outline-none"
        style={{border : 'none' }}
      />
    </Form>

    <Navbar.Collapse className="justify-content-end">
        <Gear className="mr-3" style={{color:"#ccc"}} />
        <ChatSquare className="mr-3" style={{color:"#ccc"}} />
        <Bell className="mr-2" style={{color:"#ccc"}} />
        <Row className="ml-1 mr-1">
            <div className="col-8 p-0 m-0 text-center" style={{width:150}}>
                Thomas Brown
               <div className="text-secondary" style={{lineHeight : .5}}><small>Developer</small></div>
            </div>
            <div className="col p-0 m-0">
                <img src={Avatar} alt="Avatar" width={40} />
            </div>
            
        </Row>
    </Navbar.Collapse>

 
  </Navbar>
}