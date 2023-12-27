import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

function RestCard({ restarants }) {
  console.log(restarants);
  return (
    <div>
    <Link to={`view/${restarants.id}`} style={{textDecoration:'none'}}>
    <MDBCard className="my-4 mx-3" style={{ height: "500px" }}>
        <MDBCardImage
          src={restarants.photograph}
          height={"350px"}
          position="top"
          alt="..."
        />
        <MDBCardBody>
          <MDBCardTitle>{restarants.name}</MDBCardTitle>
          <MDBCardText>{restarants.address}</MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </Link>
    </div>
  );
}

export default RestCard;
