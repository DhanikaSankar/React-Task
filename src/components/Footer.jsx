import { MDBFooter } from 'mdb-react-ui-kit'
import React from 'react'

function Footer() {
  return (
    <>
     <MDBFooter className="text-center" color="white" bgColor="dark">
          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2020 Yellow Store. All Rights Reserved.
          </div>
    </MDBFooter></>
  )
}

export default Footer