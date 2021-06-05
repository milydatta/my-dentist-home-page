import React, { useEffect, useState } from 'react';
import AppointmentDataTable from '../../Dashboard/AppointmentDataTable/AppointmentDataTable';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const AllPatients = () => {
    const [appointments, setAppointments] = useState([]);


    useEffect( () => {
        fetch('http://localhost:5050/appointments', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({appointments})
    })
    .then(res=>res.json())
    .then(data => setAppointments(data))
   }, [])

    // useEffect(() => {
    //     fetch('http://localhost:5050/appointments')
    //         .then(res => res.json())
    //         .then(data => setAppointments(data))
    // }, [])

    return (
        <div className="container-fluid row " >
        <Sidebar></Sidebar>
        <div className="col-md-10 mr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <h3 className="text-success text-center mb-5">All Patients</h3>
            <AppointmentDataTable appointments={appointments}/>
        </div>
    </div>
    );
};

export default AllPatients;


// useEffect( () => {
//     fetch('http://localhost:5050/appointmentsByDate', {
//     method: 'POST',
//     headers: {'content-type': 'application/json'},
//     body: JSON.stringify({date: selectedDate})
// })
// .then(res=>res.json())
// .then(data => setAppointments(data))
// }, [selectedDate])