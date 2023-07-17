import { MDBCol, MDBRow } from 'mdb-react-ui-kit'
import React from 'react'

function ImageSection() {
  return (
    <>
        <div className='d-flex row'>
          <div className='col'> 
            <MDBCol><img src="../images/kitkat1.jpg" alt="img1" className="img1"/></MDBCol>
          </div>

          <div className='col'> 
            <div className='row'>
              <img src="../images/kitkat2.jpg" alt="img2" className="img2"/>
              <img src="../images/kitkat3.jpg" alt="img2" className="img2"/>
              <img src="../images/kitkat4.jpg" alt="img2" className="img2"/>
            </div>
            <div className='row'>
              <img src="../images/kitkat3.jpg" alt="img2" className="img4"/>
              <img src="../images/kitkat1.jpg" alt="img2" className="img4"/>
            </div>
          </div>
        </div>
    </>
  )
}

export default ImageSection