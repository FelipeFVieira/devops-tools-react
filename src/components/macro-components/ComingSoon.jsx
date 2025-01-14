import React, { useContext } from 'react';
import styled from "styled-components";
import { StateContext } from '../../StateContext';

const ComingSoonDiv = styled.div`
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
    border: 1px solid #57606a;
    border-radius: 5px;
    padding: 16% 40%;
    justify-content: center;
    margin: auto;
`
const ComingSoon = () => {

    const {isSidebarOpen} = useContext(StateContext);

    return (
        <ComingSoonDiv $isOpen={isSidebarOpen} >
            <Conteiner >
                <h1>Coming Soon!</h1>
            </Conteiner>
        </ComingSoonDiv>
    )
}

export default ComingSoon