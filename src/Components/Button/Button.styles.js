import styled, { css } from 'styled-components';

const PrimaryButtonStyles = css`
    font-size:20px;
    outline:none;
    border:0px;
    cursor:pointer;
    height:30px;
    color:#1c2c4a;
    margin:20px;
    background-color:#DCDCDC;

    &:hover{
        color:#DCDCDC;
    }

`;

export const StyledButton = styled.button`
    font-size:20px;
    font-family: 'Courier New', Courier, monospace;


    ${({ type }) => type ==='primary' && PrimaryButtonStyles} 
`;