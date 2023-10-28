//found at: http://localhost:3000/reference
import { Header, Footer } from "../../../global_components";
import "./RefrencePage.css";
import React from "react";
const ReferencePage = () => {
  return (
    <div>
      <Header />
      <div className="mainDivRefrence">
        <div className="titleText">
          <h1>References & Resources</h1>
        </div>

        <div>
          <p className="textPageRef">
            Here at Sunset Stories, we want to be transparent and give proper
            credit to the sources of the images used on our site. We acknowledge
            that all images on our site either belong to or have been sourced
            from other websites, and they are not ours to claim.
            <br />
            <br />
            Specifically, we'd like to acknowledge that the color images located
            in both the PECS and Story Library sections have been obtained from
            "Flaticon." Additionally, all images related to AUSLAN (Australian
            Sign Language) have been sourced from "Deaf Children Australia
            (DCA)."
            <br /> <br />
            <b>In summary:</b>
            <li className="list">
              All images used on this site belong to "Flaticon" and "Deaf
              Children Australia (DCA)."{" "}
            </li>
            <li className="list">
              {" "}
              All color images have been taken from the "Flaticon" website,
              which is Available{" "}
              <a href="https://www.flaticon.com/" target="_blank">
                Here
              </a>
            </li>{" "}
            <li className="list">
              All AUSLAN images located in the PECS Library have been sourced
              from "Deaf Children Australia," and they are Available{" "}
              <a
                href="https://www.deafchildrenaustralia.org.au/"
                target="_blank"
              >
                Here
              </a>
            </li>{" "}
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ReferencePage;
