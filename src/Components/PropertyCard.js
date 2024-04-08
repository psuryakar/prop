// PropertyCard.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function PropertyCard({ property }) {
    return (
        <div className="property-card">
            <h3>{property.title}</h3>
            <p>Description: {property.description}</p>
            <p>Price: ${property.price}</p>
            {/* Display other property details */}
        </div>
    );
}

export default PropertyCard;
