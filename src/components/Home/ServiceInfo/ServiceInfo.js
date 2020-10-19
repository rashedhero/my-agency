import React from 'react';

const ServiceInfo = ({service}) => {
    return (
        <div className="col-md-4" d-flex justify-content-between>
            <div>
      <p>{service.icon}</p>
       <h4>{service.title}</h4>
       <p>{service.description}</p>
            </div>
        </div>
    );
};

export default ServiceInfo;