import React from 'react';
import PropertyForm from './PropertyForm';

function PostPropertyPage() {
    const handleSubmit = (formData) => {
        // Handle form submission (e.g., send data to backend)
        console.log(formData);
    };

    return (
        <div className="container mt-4">
            <h2>Post Property Ad</h2>
            <PropertyForm onSubmit={handleSubmit} />
        </div>
    );
}

export default PostPropertyPage;
