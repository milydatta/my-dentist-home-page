import React from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    return (
        <section className="doctors">
        <div className="container">
            <h2 className="text-center  text-success mb-5">Our Doctors</h2>
            <div className="row">
                <Doctor/>
                <Doctor/>
                <Doctor/>
            </div>
        </div>
    </section>
    );
};

export default Doctors;