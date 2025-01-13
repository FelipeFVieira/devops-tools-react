import React, { useState } from "react";
import styled from "styled-components";

const SideBarDiv = styled.div`  
  position: fixed;
  height: 87vh;
  width: 200px;
  background-color: green;
  color: white;
  z-index: 2;
`;
const SideBar = () => {
  return (
    <div>
      <SideBarDiv>
          <div>
            <h2>Services</h2>
          </div>
          <div style={{ backgroundColor: 'blue' }}>
            <p>Opção 1</p>
            <p>Opção 2</p>
            <p>Opção 3</p>
          </div>
      </SideBarDiv>
    </div>
  );
};

export default SideBar;
