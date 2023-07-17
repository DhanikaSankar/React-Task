import { MDBBtn, MDBCol, MDBIcon, MDBRow } from 'mdb-react-ui-kit'
import React from 'react'

function SelectVariantSection() {
  return (
    <>
      {/* <MDBRow className="row2"> */}

        <div>
          <h4 className="text1">Select Variants</h4>
        </div>

        <div className='d-flex'>
          <MDBCol><img src="../images/kitkat2.jpg" alt="img2" className="img3"/></MDBCol>
          <MDBCol><img src="../images/kitkat3.jpg" alt="img2" className="img3"/></MDBCol>
          <MDBCol><img src="../images/kitkat4.jpg" alt="img2" className="img3"/></MDBCol>
        </div>

        <div className='mt-1'>
          <h1 className='text2'>KitKat Senses Cookie Crumble</h1>
        </div>
         
        <div className='d-flex main-cash'>
          <h4 className='cash'>$ 349</h4>
          <MDBIcon fas icon="star"/>
          <MDBIcon fas icon="star"/>
          <MDBIcon fas icon="star"/>
          <MDBIcon fas icon="star"/>
          <MDBIcon fas icon="star-half-alt"/>
          <h4 style={{marginLeft:"10px"}}>4.5(413)</h4>
        </div>

        <hr/>
        
        <div>
          <h3 className='pro'>Product Description</h3>
        </div>
          <h5 className='pro-des'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Recusandae cupiditate eos ipsum dol. 
          <a className='text-primary link'>{" "}Read More</a></h5>

          <div className='d-flex slct-main'>
            <p className='m-4'>Size</p> <select style={{marginRight:"80px",fontSize:"17px",fontWeight:"bold"}}>
              <option>60 g</option></select>
            <p className='m-4'>Qty</p> <select style={{fontSize:"17px",fontWeight:"bold"}}><option value="" className='option1'>1</option></select>
          </div>

          <div>
            <button className='cart'>Add to Cart</button>
          </div>
          </>
  )
}

export default SelectVariantSection