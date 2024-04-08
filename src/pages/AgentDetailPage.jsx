// AgentDetailPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function AgentDetailPage() {
    const { agentId } = useParams();
    const [agent, setAgent] = useState(null);

    useEffect(() => {
        // Fetch agent details from the backend API
        axios.get(`/api/agents/${agentId}`)
            .then(response => {
                setAgent(response.data);
            })
            .catch(error => {
                console.error('Error fetching agent details:', error);
            });
    }, [agentId]);

    if (!agent) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{agent.agencyName}</h1>
            <p>Contact: {agent.contactName}</p>
            <p>Email: {agent.email}</p>
            {/* Display other agent details */}
        </div>
    );
}

export default AgentDetailPage;
