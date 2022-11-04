import React from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import Stars from "./Stars"

//DONE fixed MDBIcons not displaying error. ref: https://stackoverflow.com/questions/54380295/mdbicon-not-displaying-icons-in-react-app

function UserCard() {
  return (
    <MDBCard className="mb-4">
      <MDBCardBody className="text-center">
        <MDBCardImage
          src="http://media2.s-nbcnews.com/i/streams/2012/February/120227/105187-lisa-granshawAAEA3BA7-DBD0-2809-3D75-A303123C3B8F.jpg"
          alt="avatar"
          className="rounded-circle  border border-5"
          style={{ width: '60%'}}
          fluid />
        <p className="text-muted mb-1" style={{fontWeight: 'bold'}}>Polar Bruin</p>
        <p className="text-muted mb-4">Senior CS student willing to help with CS hw/projects.</p>
        <div className="d-flex justify-content-center mb-2">
          <MDBBtn>Follow</MDBBtn>
          <MDBBtn outline className="ms-1">Message</MDBBtn>
        </div>
      </MDBCardBody>
      <MDBCardBody className="text-center">
        <MDBCardTitle>Ratings from Bruin Pals</MDBCardTitle>
        <div style={{display:"flex", flexDirection:"row", justifyContent: "space-evenly"}}>
        <div>As a customer <br /> <Stars /></div>
        <div>As a tasker <br />  <Stars /></div>
        </div>
        
      </MDBCardBody>
    </MDBCard>

  );
}

export default UserCard;
