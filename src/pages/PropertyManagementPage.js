// PropertyManagementPage.js
import React, { useState, useEffect } from 'react';
import mockApi from './mockApi.js';

const PropertyManagementPage = () => {
    const [property, setProperty] = useState(null);
    const [message, setMessage] = useState('');
    const [contactDetails, setContactDetails] = useState(null);

    useEffect(() => {
        // Simulate fetching property details
        mockApi.getPropertyDetails(1)
            .then(property => {
                setProperty(property);
            })
            .catch(error => {
                console.error('Error fetching property details:', error);
            });
    }, []);

    const handleSendMessage = () => {
        // Simulate sending message to property owner
        mockApi.sendMessageToOwner(property.id, message)
            .then(response => {
                console.log(response.message);
                // Clear message input field
                setMessage('');
            })
            .catch(error => {
                console.error('Error sending message:', error);
            });
    };

    const handleGetContactDetails = () => {
        // Simulate getting contact details of property owner
        mockApi.getOwnerContactDetails(property.ownerId)
            .then(contactDetails => {
                setContactDetails(contactDetails);
            })
            .catch(error => {
                console.error('Error getting contact details:', error);
            });
    };

    if (!property) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{property.title}</h2>
            <p>{property.description}</p>
            <p>Price: {property.price}</p>
            <p>Contact Owner: {property.ownerName}</p>
            <button onClick={handleGetContactDetails}>Get Contact Details</button>
            {contactDetails && (
                <div>
                    <p>Email: {contactDetails.email}</p>
                    <p>Phone: {contactDetails.phone}</p>
                </div>
            )}
            <br />
            <textarea value={message} onChange={e => setMessage(e.target.value)} />
            <br />
            <button onClick={handleSendMessage}>Send Message</button>
        </div>
    );
};

export default PropertyManagementPage;
