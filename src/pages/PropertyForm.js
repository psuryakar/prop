import React, { useState } from 'react';

function PropertyForm({ onSubmit }) {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: '',
        // Add more form fields as needed
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" name="title" value={formData.title} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea className="form-control" id="description" name="description" value={formData.description} onChange={handleChange}></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="price" className="form-label">Price</label>
                <input type="number" className="form-control" id="price" name="price" value={formData.price} onChange={handleChange} />
            </div>
            {/* Add more form fields for property details */}
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default PropertyForm;
