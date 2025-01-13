import React from 'react';
import styled from 'styled-components';
import logo from '../../images/logo.png';

const LogoDiv = styled.div`
  display: flex;
  width: 60px;
  height: 60px;
  padding-left: 30px;

  transition: transform 0.3s ease; 
  
  &:hover {
    transform: scale(1.1); 
  }
  cursor: pointer;
`

const Logo = () => {
  return (
    <LogoDiv>
      <img src={logo} alt='devops logo'></img>
    </LogoDiv>
  );
};

export default Logo;