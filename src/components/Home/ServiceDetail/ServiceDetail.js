import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4 text-center mt-5">
            <img style={{ height:'50px'}} src={service.img} alt=""/>
            <h5 className="mt-5 mb-4">{service.name}</h5>
            <p className="text-secondary">lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur</p>
        </div>
    );
};

export default ServiceDetail;