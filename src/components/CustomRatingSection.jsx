import { MDBBtn, MDBIcon, MDBRow } from "mdb-react-ui-kit";
import React from "react";

function CustomRatingSection() {
  return (
    <div className="custom">
      <h3 className="text-custom">Custom Rating 4.5 (413)</h3>
      <div className="d-flex align-items-startmb-3 star-bar">
        <MDBIcon fas icon="star" className="fa-2x" />
        <MDBIcon fas icon="star" className="fa-2x" />
        <MDBIcon fas icon="star" className="fa-2x" />
        <MDBIcon fas icon="star" className="fa-2x" />
        <MDBIcon fas icon="star-half-alt" className="fa-2x" />
        <a className="add">+ Add Rating</a>
      </div>

      <div className="d-flex align-items-startmb-3 star-bar">
        <MDBIcon fas icon="user-circle" className="fa-4x" />
        <h6 className="txt">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          facere.<br></br>
          <h6 className="text-dark">-Food Voyager</h6>
        </h6>
      </div>

      <div className="d-flex align-items-startmb-1 star-bar">
        <MDBIcon fas icon="user-circle" className="fa-4x" />
        <h6 className="txt">
          Lorem ipsum dolor sit amet consectetur.<br></br>
          <h6 className="text-dark">-Ankitha Mishra</h6>

        </h6>
        <br />
      </div>

      {/* // -------------------write review-------------------- */}
      <div className="d-flex align-items-startmb-1 star-bar">
        <h3 className="text-custom">Write Review</h3>
        <br></br>
      </div>

      <div>
        <textarea name="" id="" cols="50" rows="10"></textarea>
      </div>

      <div style={{display:"flex"}}>
        <MDBBtn className="submit" style={{textTransform:"capitalize",fontSize:"20px"}}>Submit Review</MDBBtn>
      </div>






    </div>
  );
}

export default CustomRatingSection;
