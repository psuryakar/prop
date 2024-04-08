// PropertyDetailPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function PropertyDetailPage() {
    const { propertyId } = useParams();
    const [property, setProperty] = useState(null);

    useEffect(() => {
        // Simulate fetching property details from a backend API
        const fetchPropertyDetails = () => {
            // Simulated property data
            const samplePropertyData = {
                id: propertyId,
                title: "Luxury Apartment",
                description: "Spacious apartment with great amenities",
                price: 500000,
                // Add other property details here...
            };

            setProperty(samplePropertyData);
        };

        fetchPropertyDetails();
    }, [propertyId]);

    if (!property) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{property.title}</h5>
                    <p className="card-text">Description: {property.description}</p>
                    <p className="card-text">Price: ${property.price}</p>
                    {/* Add other property details */}
                </div>
            </div>
        </div>
    );
}

export default PropertyDetailPage;
