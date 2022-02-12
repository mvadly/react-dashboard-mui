import React from 'react';

const Button = ({title, ...attr}) => {
    return (
        <button {...attr}>{title}</button>
    );
};

export default Button;