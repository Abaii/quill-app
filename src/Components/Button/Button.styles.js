import styled, { css } from 'styled-components';

const PrimaryButtonStyles = css`
    background-color:#F9F9F9;
    font-size:20px;
    font-family:Arial, Helvetica, sans-serif;
    font-weight:bold;
    width:60px;
    height:30px;
`;

export const NavButton = styled.button`
    background-color:#F9F9F9;
    font-size:20px;
    border:none;

    ${({ type }) => type ==='primary' && PrimaryButtonStyles} 
`;