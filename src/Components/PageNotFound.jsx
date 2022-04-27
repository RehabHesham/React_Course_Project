import React from "react";
import styled from "styled-components";

function PageNotFound() {
  return (
    <div>
      <Image
        src="https://media.istockphoto.com/vectors/page-not-found-banner-template-vector-id1311367104?k=20&m=1311367104&s=612x612&w=0&h=xwkALhDaxMN_u3nur9DrkXoXXfXVRqFAwiV878CYiTM="
        alt="page not found"
      />
    </div>
  );
}
const Image = styled.img`
  width: 100%;
`;

export default PageNotFound;
