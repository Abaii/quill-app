import React from 'react';
import { StyledButton } from './Button.styles.js';

export const Button = (props) => {
    const { type, label, onClick } = props;
    return (
        <StyledButton type={type} onClick={()=>onClick()}>{label}</StyledButton>
    )
};

