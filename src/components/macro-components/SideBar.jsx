import React, { useState } from "react";
import styled from "styled-components";

const SideBarDiv = styled.div`  
  position: fixed;
  display: column;
  height: 87vh;
  width: 14.5%;
  background-color: #080a0c;
  color: #02d35f;
  font-family: 'Inter', sans-serif;
  z-index: 2;
  transition: left 0.2s ease;
  left: ${(props) => (props.$isOpen ? '0' : '-200px')};
  align-items: center;
  justify-items: center;
  padding: 10px 0px;
  border-right: 1px solid #57606a;
  
`;

const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  margin-top: 15px;
  // align-items: center;
  padding: 5px 0px;
  font-size: 12px;
  font-weight: bold;
  width: 100%;
  gap: 25px;
  // border-top: 1px solid #0D2C40;
  // border-bottom: 1px solid #0D2C40;
`

const SideBarLink = styled.a`
  text-decoration: none;
  &:hover {
    border-bottom: 1px solid #0D2C40; 
  }
  padding: 5px 0px;
  color: white;
  display: block;
  padding-left: 7px;
`
const SideBar = ({isOpen}) => {
  return (
    <div>
      <SideBarDiv $isOpen={isOpen}>
          <Conteiner >
            <SideBarLink href="/analysis">Analysis</SideBarLink>
            <SideBarLink href="/compute" >Compute</SideBarLink>
            <SideBarLink href="/database">Database</SideBarLink>
            <SideBarLink href="/machinelearning">Machine Learning</SideBarLink>
            <SideBarLink href="/migration">Migration and Transfer</SideBarLink>
            <SideBarLink href="/network">Networks and Content Delivery</SideBarLink>
            <SideBarLink href="/security">Security, Identity, & Compliance</SideBarLink>
            <SideBarLink href="/storage" >Storage</SideBarLink>
          </Conteiner>
      </SideBarDiv>
    </div>
  );
};

export default SideBar;
