import React from 'react';
import styled from 'styled-components';

// Styled H1 component
const MyHeading = styled.h1`
  color: maroon;
  border: 4px solid red;
  border-radius: 5px;
  background-color: yellow;
  padding: 20px;
  width: 500px;
  margin:20px;
`;
const MyHead=styled.h1({
  color: 'blue',
  backgroundColor:'lightgreen',
  padding : '20px',
  margin:'20px',

})

function StyledComp() {
  const MyBtn = styled.button`
    background-color: blue;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;

    &:hover {
      background-color: maroon;
    }
  `;

  
  return (
    <div>
      <h1>Styled Components</h1>
      <MyBtn>Learn More</MyBtn>
      <br /><br />
      <MyBtn>Download</MyBtn>
      <br /><br />
      <MyBtn>Click Here</MyBtn>
      <br /><br />
    
     
      
      <MyHeading>My New Heading(1)</MyHeading>
      <MyHeading>My New Heading(2)</MyHeading>
      <MyHeading>My New Heading(3)</MyHeading>
      <MyHeading>My New Heading(4)</MyHeading>
      <MyHeading>My New Heading(5)</MyHeading>
     
      <MyHead>New Heading With Diffrent Method</MyHead>
      <MyHead>New Heading With Diffrent Method</MyHead>
      <MyHead>New Heading With Diffrent Method</MyHead>
      <MyHead>New Heading With Diffrent Method</MyHead>
    </div>
  );
}

export default StyledComp;
