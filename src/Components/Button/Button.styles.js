import styled, { css } from 'styled-components';

const PrimaryButtonStyles = css`
    font-size:20px;
    outline:none;
    border:0px;
    cursor:pointer;
    height:30px;
    color:#1c2c4a;
    background-color:#F8F8FF;
    margin:20px;

    &:hover{
        color:#DCDCDC;
    }

`;

export const StyledButton = styled.button`
    font-size:20px;

    ${({ type }) => type ==='primary' && PrimaryButtonStyles} 
`;