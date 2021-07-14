import React from 'react';
import img from '../../../images/doctor-sm.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';


const Doctor = () => {
    return (
        <div className="col-md-4 text-center">
            {/* {
            doctor.image ? <img style={{ height:'300px'}} src={`data:image/png;base64,${doctor.image.img}`}/>
            :
            <img style={{ height:'300px'}} className="img-fluid mb-3" src={`http://localhost:5050/${doctor.img}`} alt=""/>
        } */}
            <img className="img-fluid mb-3" src={img} alt=""/>
            <h4>Dr.Coudi</h4>
            <p> <FontAwesomeIcon className="text-success" icon={faPhoneAlt}/> +880-188-934789</p>
        </div>
    );
};

export default Doctor;
//`http://localhost:5050/${doctor.img}`