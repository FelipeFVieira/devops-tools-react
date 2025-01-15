import React, { act, useState } from 'react';
import styled from 'styled-components';
import FormButton from '../FormButton';
import { triggerWorkflow } from '../../../helpers/github-requests/triggerWorkflow';
const FormDiv = styled.div`
    // display: flex;
    // background-color: #080a0c;
`;

const InputStyle = styled.input`
    padding: 10px;
    border-radius: 5px;
    margin: 5px;
    background-color: #080a0c;
    color: #fff;
    font-family: 'Inter', sans-serif;
    font-weight: bold;
    font-size: 16px;
`;

const BucketS3Form = ({}) => {
    const [bucketName, setBucketName] = useState('');
    const [awsRegion, setAwsRegion] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Evita o recarregamento da página
        // Chama a função onBuild com os dados do formulário
        if (triggerWorkflow) {
            triggerWorkflow('Active-Pulumi-Website-on-S3-Python', bucketName, awsRegion );
        }
        // Opcional: Limpar os campos após o envio
        setBucketName('');
        setAwsRegion('');
    };

    return (
        <FormDiv>
            <form onSubmit={handleSubmit}>
                <label>
                    Bucket Name:
                    <InputStyle 
                        type="text" 
                        required 
                        value={bucketName} 
                        onChange={(e) => setBucketName(e.target.value)} // Atualiza o estado
                    />
                </label>
                <br /><br />
                <label>
                    AWS Region:
                    <InputStyle 
                        type="text" 
                        required 
                        value={awsRegion} 
                        onChange={(e) => setAwsRegion(e.target.value)} // Atualiza o estado
                    />
                </label>
                <br /><br /><br /><br />
                <FormButton type="submit">Build!</FormButton>
            </form>
        </FormDiv>
    );
};

export default BucketS3Form;
