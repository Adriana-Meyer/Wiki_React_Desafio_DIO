import React from 'react';
import { ButtonContainer } from './button-styles';

function Button({onClick}) {
    return (
        <ButtonContainer onClick={onClick}>
            Adicionar à lista
        </ButtonContainer>
    )
}

export default Button;