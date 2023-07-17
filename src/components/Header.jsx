import { MDBBadge, MDBContainer, MDBDropdown, MDBDropdownToggle, MDBIcon, MDBNavbar, MDBNavbarBrand, MDBNavbarItem, MDBNavbarNav } from 'mdb-react-ui-kit'
import React from 'react'

function Header() {
  return (
    <>
     <MDBNavbar expand="lg" light className="bg-white">
          {/* Container wrapper */}
          <MDBContainer fluid>
              <MDBNavbarNav className="d-flex flex-row" left fullWidth={false}>
                  <MDBNavbarBrand style={{marginLeft:"50px",fontSize:"30px"}} ><b>Yellow Store</b></MDBNavbarBrand>
              </MDBNavbarNav>

              <MDBNavbarNav className="d-flex flex-row" right fullWidth={false} style={{paddingRight:"80px"}}>
                  <MDBNavbarItem style={{paddingRight:"40px",paddingTop:"10px"}}>
                    <MDBIcon fas icon="search" className='fa-2x'/>
                  </MDBNavbarItem>

                  <MDBNavbarItem style={{paddingRight:"50px"}}>
                    <MDBDropdown>
                      <MDBDropdownToggle tag="a" className="hidden-arrow me-2 me-lg-0 nav-link">
                        <MDBIcon fas icon="shopping-cart" className='fa-2x' style={{color:"black"}}/>
                        <MDBBadge pill notification color="danger">{""}
                          1
                        </MDBBadge>
                      </MDBDropdownToggle>
                    </MDBDropdown>
                  </MDBNavbarItem>


                  <MDBNavbarItem>
                    <h6 style={{paddingTop:"5px"}}><small>Menu</small></h6>
                    <MDBIcon fas icon="align-right" className='fa-2x' style={{padding:"1px"}}/>
                  </MDBNavbarItem>
                  <MDBNavbarItem></MDBNavbarItem>
                </MDBNavbarNav>
          </MDBContainer>
        </MDBNavbar>
    </>
  )
}

export default Header