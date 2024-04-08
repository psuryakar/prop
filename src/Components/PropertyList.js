// src/components/PropertyList.js
import React from 'react';
import PropertyCard from './PropertyCard';
import properties from '../properties';

function PropertyList() {
    return (
        <div className="property-list">
            <h2>Properties</h2>
            {properties.map(property => (
                <PropertyCard key={property.propertyId} property={property} />
            ))}
        </div>
    );
}

export default PropertyList;
