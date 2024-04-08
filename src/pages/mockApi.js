// api/mockApi.js
const properties = [
    {
        id: 1,
        title: 'Beautiful House',
        description: 'A lovely house in a peaceful neighborhood.',
        price: 250000,
        ownerId: 101,
        ownerName: 'John Doe'
    },
    {
        id: 2,
        title: 'Spacious Apartment',
        description: 'A spacious apartment with great views.',
        price: 180000,
        ownerId: 102,
        ownerName: 'Jane Smith'
    }
];

const mockApi = {
    getPropertyDetails: (propertyId) => {
        return new Promise((resolve, reject) => {
            const property = properties.find(prop => prop.id === propertyId);
            if (property) {
                resolve(property);
            } else {
                reject(new Error('Property not found'));
            }
        });
    },
    sendMessageToOwner: (propertyId, message) => {
        return new Promise((resolve, reject) => {
            // Simulate sending message (no real action performed)
            setTimeout(() => {
                resolve({ message: 'Message sent successfully' });
            }, 1000);
        });
    },
    getOwnerContactDetails: (ownerId) => {
        return new Promise((resolve, reject) => {
            // Simulate getting contact details (no real action performed)
            setTimeout(() => {
                const contactDetails = {
                    ownerId: ownerId,
                    email: 'example@example.com',
                    phone: '123-456-7890'
                };
                resolve(contactDetails);
            }, 1000);
        });
    }
};

export default mockApi;
