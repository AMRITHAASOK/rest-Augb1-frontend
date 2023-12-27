import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <div> <MDBNavbar light bgColor='light'>
    <MDBContainer fluid>
      <MDBNavbarBrand href=''>
      <i class="fa-solid fa-utensils mx-3 fs-2"></i>
        RestoCafe
      </MDBNavbarBrand>
    </MDBContainer>
  </MDBNavbar></div>
  )
}

export default Header