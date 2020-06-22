import React from 'react';
import { NavButton } from './Button.styles.js';

export const Button = (props) => {
    const {label,type} = props;
    return (
        <NavButton type={type}>{label}</NavButton>
    )
};

