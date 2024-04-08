// UserProfilePage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserProfilePage() {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        // Fetch user's wishlist from the backend API
        axios.get('/api/wishlist')
            .then(response => {
                setWishlist(response.data);
            })
            .catch(error => {
                console.error('Error fetching user wishlist:', error);
            });
    }, []);

    return (
        <div>
            <h1>User Profile</h1>
            <h2>Wishlist</h2>
            <ul>
                {wishlist.map(item => (
                    <li key={item.propertyId}>
                        {/* Display wishlist item details */}
                        {item.title} - {item.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserProfilePage;
