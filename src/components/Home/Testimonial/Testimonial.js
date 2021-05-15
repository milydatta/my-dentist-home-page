import React from 'react';

const Testimonial = (props) => {
    const {quote,name,from ,img} = props.testimonial;
    return (
        <div className=" col-md-4">
        <div className="card shadow-sm">
          <p className="card-body text-center">{quote}</p>
         <div className="card-footer d-flex  align-items-center">
            <img className="mx-3 mt-3" src={img} alt="" width="60"/>
            <div>
                <h6 className="text-success">{name}</h6>
                <p className="m-0">{from}</p>
            </div>
        </div>
        </div>
   </div>

    );
};

export default Testimonial;