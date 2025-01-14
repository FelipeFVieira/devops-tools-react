import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../micro-components/Logo';
import menuIcon from '../../images/menu-icon.svg';
import SideBar from './SideBar';

const NavBackgroundDiv = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  background-color: #000;
  width: 100%;
  height: 13vh;
  max-width: 100%;
  border-bottom: 1px solid #57606a;
`;

const MenuButtonDiv = styled.div`
  display: flex;
  width: 22px;
  height: 22px;
  margin-left: 40px;
  padding: 5px;
  border: 1px solid #02d35f73;
  border-radius: 5px;
  &:hover {
    background-color: #1B2023; 
  }

  cursor: pointer;
`;

const NavBar = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div>
      <NavBackgroundDiv>
        <MenuButtonDiv onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <img src={menuIcon} alt='menu'></img>
        </MenuButtonDiv>
        <Logo />
      </NavBackgroundDiv>

      <SideBar isOpen={isSidebarOpen}/>
     
    </div>
  );
};

export default NavBar;
