import React, { useState } from 'react';
import styled from 'styled-components';


const ButtonDiv = styled.div`
    display: flex;
    justify-content: center;
`
const ButtonStyled = styled.button`
    background-color: #008cba;
    padding: 5px 10px;
    color: #fff;
    font-family: 'Inter', sans-serif;
    font-weight: bold;
    border: 2px solid #000;
    border-radius: 5px;
    transition: background-color 0.3s ease;
    cursor: pointer;

    &:hover {
      background-color:rgba(255, 60, 0, 0.45);
    }
`
const FormButton = ({onClick,children}) => {

  return (
    <ButtonDiv>
        <ButtonStyled onClick={onClick}>{children}</ButtonStyled>
    </ButtonDiv>
  );
};

export default FormButton;