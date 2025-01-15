import React, { useState } from 'react';
import styled from 'styled-components';
import FormButton from './FormButton';

const ServiceCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #080a0c;
  width: 20%;
  margin: 10px; 
  border: 2px solid #57606a;
  border-radius: 5px;
  gap: 10px;
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  font-size: 16px;
`
const ImageDiv = styled.div`
  margin-top: 20px;
  width: 80%;
  height: 40%;
  overflow: hidden;
  border: 2px solid #000;
`
const ServiceImg = styled.img`
    width: 100%;
    height: 100%;
`
const DescriptionDiv = styled.div`
    color:rgb(156, 163, 172); 
    font-size: 12px;
    text-align: center;
    padding: 5px;
    margin-bottom: 42%;
`

const FormContainer = styled.div`
    position: fixed; /* Use fixed para que fique na tela */
    top: 50%; /* Posiciona o topo do contêiner no meio da tela */
    left: 50%; /* Posiciona a esquerda do contêiner no meio da tela */
    transform: translate(-50%, -50%); /* Move o contêiner para que o centro dele fique no meio da tela */
    display: ${props => (props.$visible ? 'flex' : 'none')};
    flex-direction: column;
    background-color: #080a0c;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    z-index: 1000; /* Garante que o contêiner fique acima de outros elementos */
    gap: 80px;
`;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5); /* Fundo escuro semi-transparente */
    display: ${props => (props.visible ? 'block' : 'none')};
    z-index: 999; /* Um nível abaixo do FormContainer */
`;
const ServiceCard = ({serviceImage, form}) => {

  const [formVisible, setFormVisible] = useState(false);

  const handleButtonClick = () => {
    setFormVisible(prev => !prev);
    
  };

  return (
    <>
    <ServiceCardDiv>
      <ImageDiv>
          <ServiceImg src={serviceImage} alt="service Image" />
      </ImageDiv>
      <p>Bucket S3</p>
      <DescriptionDiv>This service will build a simple bucket S3 in the chosen region</DescriptionDiv>
      <FormButton onClick={handleButtonClick}>Get Started!</FormButton>
    </ServiceCardDiv>

    <Overlay visible={formVisible} />
    <FormContainer $visible={formVisible}>
      {form}
      <FormButton onClick={handleButtonClick}>Fechar</FormButton>
    </FormContainer>
    </>
  );
};

export default ServiceCard;