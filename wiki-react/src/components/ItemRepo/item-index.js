import React from 'react';
import { ItemContainer } from './item-styles';

function ItemRepo({repo}) {
    return (
        <ItemContainer>
            <h3>{repo.name}</h3>
            <p>{repo.full_name}</p>
            <p>{repo.description}</p>
            <a href={repo.html_url} target="_blank" className="verRepo">Ver Repositório</a>
            <a href="#" className="remover">Remover</a>
            <hr />
        </ItemContainer>
    )
}

export default ItemRepo;