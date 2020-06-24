import React from 'react';
import { StyledButton } from './Button.styles.js';

export const Button = (props) => {
    const { type, label } = props;
    return (
        <StyledButton type={type}>{label}</StyledButton>
    )
};

