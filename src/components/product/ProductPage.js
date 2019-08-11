import React from 'react';

export default function ProductPage({ match }) {
    return (
        <div>
            <h3>{match.params.productId}</h3>
        </div>
    );
}