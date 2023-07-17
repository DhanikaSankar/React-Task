import { MDBCol, MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import "./yellow.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ImageSection from "./components/ImageSection";
import SelectVariantSection from "./components/SelectVariantSection";
import CustomRatingSection from "./components/CustomRatingSection";

function YellowStore() {
  return (
    <>
      <header>
        <Header />
      </header>
      {/* ---------------------------------------------------------------------------------------------- */}
      <MDBContainer>
        <main>
          <ImageSection />
          <div className="d-flex">
            <MDBCol>
              <SelectVariantSection />
            </MDBCol>
            <MDBCol></MDBCol>
            <MDBCol>
              <CustomRatingSection />
            </MDBCol>
          </div>
        </main>
      </MDBContainer>
      {/* ------------------------------------------------------------------------------------------------ */}
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default YellowStore;
