import React from 'react';
// import AppointmentDataTable from '../AppointmentDataTable/AppointmentDataTable';
import AppointmentShortList from '../AppointmentShortList/AppointmentShortList';

const AppointmentsByDate = ({appointments}) => {
    console.log(appointments);
    return (
        <div>
            <h2 className="text-success text-center mt-5 mb-5">Appointments</h2>
            {/* <AppointmentDataTable></AppointmentDataTable> */}
            {
                  appointments.length ?
                  <AppointmentShortList appointments={appointments}></AppointmentShortList>
                 :
                 <div className="p-5">
                     <h4 className="lead text-center">No Appointments for this Date</h4>
                 </div>
            }
        </div>
    );
};

export default AppointmentsByDate;


// appointments.map(app => <li key={app._id}>{app.name}</li>)