import React, { useState } from 'react';
import Badge from './badge';

export default function FavoritesList() {
    const [favorites, setFavorites] = useState([]);

    const addFavorite = (item) => {
        if (!favorites.includes(item)) setFavorites([...favorites, item]);
    };

    const removeFavorite = (item) => {
        setFavorites(favorites.filter(fav => fav !== item));
    };

    return (
        <div className="favorites-list">
            <h3>Favorites</h3>
            <div className="badges-container">
                {favorites.map(fav => (
                    <Badge key={fav} label={fav} onRemove={() => removeFavorite(fav)} />
                ))}
            </div>
        </div>
    );
}
