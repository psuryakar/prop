import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function PropertyListPage() {
    const [properties] = useState([
        { id: 1, title: "Property 1",city:"Mumbai", description: "Description 1", price: 100000, imageUrl: "https://img.freepik.com/free-photo/3d-rendering-abstract-building_23-2150896894.jpg?w=740" },
        { id: 2, title: "Property 2",city:"Mumbai", description: "Description 2", price: 150000, imageUrl: "https://img.freepik.com/free-photo/3d-rendering-abstract-building_23-2150896894.jpg?w=740" },
        { id: 3, title: "Property 3",city:"Mumbai", description: "Description 3", price: 200000, imageUrl: "https://img.freepik.com/free-photo/3d-rendering-abstract-building_23-2150896894.jpg?w=740" },
        { id: 3, title: "Property 3",city:"Mumbai", description: "Description 3", price: 200000, imageUrl: "https://img.freepik.com/free-photo/3d-rendering-abstract-building_23-2150896894.jpg?w=740" },
        { id: 3, title: "Property 3",city:"Mumbai", description: "Description 3", price: 200000, imageUrl: "https://img.freepik.com/free-photo/3d-rendering-abstract-building_23-2150896894.jpg?w=740" },
        { id: 3, title: "Property 3",city:"Mumbai", description: "Description 3", price: 200000, imageUrl: "https://img.freepik.com/free-photo/3d-rendering-abstract-building_23-2150896894.jpg?w=740" },
        { id: 3, title: "Property 3", city:"Mumbai",description: "Description 3", price: 200000, imageUrl: "https://img.freepik.com/free-photo/3d-rendering-abstract-building_23-2150896894.jpg?w=740" },
        { id: 3, title: "Property 3",city:"Mumbai", description: "Description 3", price: 200000, imageUrl: "https://img.freepik.com/free-photo/3d-rendering-abstract-building_23-2150896894.jpg?w=740" },
        { id: 3, title: "Property 3",city:"Mumbai", description: "Description 3", price: 200000, imageUrl: "https://img.freepik.com/free-photo/3d-rendering-abstract-building_23-2150896894.jpg?w=740" },
        { id: 3, title: "Property 3",city:"Mumbai", description: "Description 3", price: 200000, imageUrl: "https://img.freepik.com/free-photo/3d-rendering-abstract-building_23-2150896894.jpg?w=740" },
        { id: 3, title: "Property 3", city:"Mumbai",description: "Description 3", price: 200000, imageUrl: "https://img.freepik.com/free-photo/3d-rendering-abstract-building_23-2150896894.jpg?w=740" },
        { id: 3, title: "Property 3",city:"Mumbai", description: "Description 3", price: 200000, imageUrl: "https://img.freepik.com/free-photo/3d-rendering-abstract-building_23-2150896894.jpg?w=740" },
        { id: 3, title: "Property 3",city:"Mumbai", description: "Description 3", price: 200000, imageUrl: "https://img.freepik.com/free-photo/3d-rendering-abstract-building_23-2150896894.jpg?w=740" },

        { id: 3, title: "Property 3",city:"Pune", description: "Description 3", price: 200000, imageUrl: "https://img.freepik.com/free-photo/3d-rendering-abstract-building_23-2150896894.jpg?w=740" },
        { id: 3, title: "Property 3",city:"Pune", description: "Description 3", price: 200000, imageUrl: "https://img.freepik.com/free-photo/3d-rendering-abstract-building_23-2150896894.jpg?w=740" },
        { id: 3, title: "Property 3", city:"Pune",description: "Description 3", price: 200000, imageUrl: "https://img.freepik.com/free-photo/3d-rendering-abstract-building_23-2150896894.jpg?w=740" },
        { id: 3, title: "Property 3", city:"Pune",description: "Description 3", price: 200000, imageUrl: "https://img.freepik.com/free-photo/3d-rendering-abstract-building_23-2150896894.jpg?w=740" },
        { id: 3, title: "Property 3",city:"Pune", description: "Description 3", price: 200000, imageUrl: "https://img.freepik.com/free-photo/3d-rendering-abstract-building_23-2150896894.jpg?w=740" },
        { id: 3, title: "Property 3", city:"Nashik",description: "Description 3", price: 200000, imageUrl: "https://img.freepik.com/free-photo/3d-rendering-abstract-building_23-2150896894.jpg?w=740" },
        { id: 3, title: "Property 3", city:"Nashik",description: "Description 3", price: 200000, imageUrl: "https://img.freepik.com/free-photo/3d-rendering-abstract-building_23-2150896894.jpg?w=740" },
        { id: 3, title: "Property 3", city:"Mumbai",description: "Description 3", price: 200000, imageUrl: "https://img.freepik.com/free-photo/3d-rendering-abstract-building_23-2150896894.jpg?w=740" },
        // Add more properties as needed...
    ]);
    const [filter, setFilter] = useState({ name: '', minPrice: '', maxPrice: '' });
    const [currentPage, setCurrentPage] = useState(1);
    const propertiesPerPage = 20;







  








    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilter({ ...filter, [name]: value });
        setCurrentPage(1); // Reset to first page when filter changes
    };

    const filteredProperties = properties.filter(property => {
        // Check if property title matches filter name (case-insensitive)
        if (filter.value && !property.city.toLowerCase().includes(filter.name.toLowerCase())) {
            return false;
        }
        // Check if property price is within the filter price range
        if (filter.minPrice && property.price < parseInt(filter.minPrice)) {
            return false;
        }
        if (filter.maxPrice && property.price > parseInt(filter.maxPrice)) {
            return false;
        }
        return true;
    });

    const indexOfLastProperty = currentPage * propertiesPerPage;
    const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
    const currentProperties = filteredProperties.slice(indexOfFirstProperty, indexOfLastProperty);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredProperties.length / propertiesPerPage); i++) {
        pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => (
        <li key={number} className="page-item">
            <button onClick={() => setCurrentPage(number)} className="page-link">
                {number}
            </button>
        </li>
    ));

    return (

<>
     
<div>

<div className="container mt-4">
    <div className="row mb-3">
        <div className="col">
            <input
                type="text"
                name="name"
                value={filter.name}
                onChange={handleFilterChange}
                placeholder="Filter by name"
                className="form-control"
            />
        </div>
        <div className="col">
            <input
                type="number"
                name="minPrice"
                value={filter.minPrice}
                onChange={handleFilterChange}
                placeholder="Min Price"
                className="form-control"
            />
        </div>
        <div className="col">
            <input
                type="number"
                name="maxPrice"
                value={filter.maxPrice}
                onChange={handleFilterChange}
                placeholder="Max Price"
                className="form-control"
            />
        </div>


            {/* Horizontal Cards */}
      <section className="horizontal-cards">
        <div className="card">
          <h2>New Launched Projects</h2>
          {/* Add content for new launched projects */}
        </div>
        <div className="card">
          <h2>Handpicked Properties</h2>
          {/* Add content for handpicked properties */}
        </div>
        <div className="card">
          <h2>Top Cities</h2>
          {/* Add content for top cities */}
        </div>
        <div className="card">
          <h2>Testimonials</h2>
          {/* Add content for testimonials */}
        </div>
      </section>




                {/* Add more filter inputs as needed */}
            </div>
            <div className="row row-cols-1 row-cols-md-4">
                {currentProperties.map(property => (
                    <div key={property.id} className="col mb-4">
                        <div className="card h-100">
                            <img src={property.imageUrl} className="card-img-top" alt={property.title} height="300px" />
                            <div className="card-body">
                                <h5 className="card-title">{property.title}</h5>
                                <p className="card-text">City: {property.city}</p>
                                <p className="card-text">Description: {property.description}</p>
                                <p className="card-text">Price: ${property.price}</p>
                                <Link to={`/property/${property.id}`} className="btn btn-primary">View Details</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {renderPageNumbers}
                </ul>
            </nav>
        </div>



    </div>

</>);
}

export default PropertyListPage;
