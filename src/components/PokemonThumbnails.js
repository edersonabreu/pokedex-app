import React from 'react';
import PokeballIcon from '../imgs/pokeball-icon.png';

function capitalizeFirst(str) {
    var subs = str.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
    return subs;
}

const PokemonThumb = ({id, image, name, type, _callback }) => {
    const style = type + " thumb-container";
    return (
        <div className={style}>
            <div className="number"><small>#0{id}</small></div>
            <div className="detail-wrapper">
                <h3>{capitalizeFirst(name)}</h3>
                <small> {type}</small>
            </div>
            <div className="image">
                <img src={image} alt={name} />
            </div>
            <div className="pokeball-icon">
                <img src={PokeballIcon} alt="pokeball-icon" />
            </div>
        </div>
    )
}

export default PokemonThumb