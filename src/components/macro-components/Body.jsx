import React, { useContext } from 'react';
import styled from "styled-components";
import { StateContext } from '../../StateContext';

const BodyDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 86vh;
    color: #fff;
    width: ${props => props.$isOpen ? '80%' : '100%'};   
    margin-left: ${props => props.$isOpen ? '17.8%' : '0'};  
`

const Conteiner = styled.div`
    display: flex;
    // border: 1px solid #57606a;
    // border-radius: 5px;
    justify-content: space-between;
    margin: auto;
    width: 90%;
    height: 85%;
   
`
const Body = ({ children }) => {

    const {isSidebarOpen} = useContext(StateContext);

    return (
        <BodyDiv $isOpen={isSidebarOpen} >
            <Conteiner >
                { children }
            </Conteiner>
        </BodyDiv>
    )
}

export default Body