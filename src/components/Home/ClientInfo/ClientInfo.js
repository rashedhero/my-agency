import React from 'react';

const ClientInfo = ({client}) => {
    return (
     <div  >
        
        <div>
    <p>{client.name}</p>
    <p>{client.designation}</p>
    <p>{client.description}</p>
        </div>
    </div>
    )
};

export default ClientInfo;
