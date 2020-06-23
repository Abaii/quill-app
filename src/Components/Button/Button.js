import React from 'react';
import { StyledButton } from './Button.styles.js';

export const Button = (props) => {
    const { type, functionality, label } = props;
    return (
        <StyledButton type={type} onClick={()=>functionality(label)}>{label}</StyledButton>
    )
};

