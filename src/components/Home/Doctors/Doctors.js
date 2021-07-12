import React from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    // const [doctors, setDoctors] = useState([])
    // useEffect( () => {
    //     fetch('https://quiet-beach-82539.herokuapp.com/doctors')
    //     .then(res => res.json())
    //     .then(data => setDoctors(data))
    // }, [])

    return (
        <section className="doctors">
        <div className="container">
            <h2 className="text-center  text-success mb-5">Our Doctors</h2>
            <div className="row">
                <Doctor/>
                <Doctor/>
                <Doctor/>
            {/* {
                     doctors.map(doctor =><Doctor key={doctor._id} doctor={doctor} />)
                    } */}
            </div>
        </div>
    </section>
    );
};

export default Doctors;