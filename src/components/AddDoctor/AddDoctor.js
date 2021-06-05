import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const AddDoctor = () => {

    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo = { ...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);
      
        fetch('http://localhost:5050/addADoctor', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          console.log(data)
        })
        .catch(error => {
          console.error(error)
        })
    }

    return (
        <section className="container-fluid row col-md-2">
        <Sidebar></Sidebar>
        <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right:0, backgroundColor: "#F4FDFB" }}>
           <h3 className="text-success">Add Doctor</h3> 
        <form onSubmit={handleSubmit}>
          <div class="form-group mt-3">
              <label for="exampleInputEmail1">Email address</label>
              <input onBlur = {handleBlur} type="email" class="form-control" name ="email" placeholder="Enter email"/>
         </div>
         <div class="form-group  mt-3">
             <label for="exampleInputPassword1">Name</label>
             <input onBlur = {handleBlur} type="text" class="form-control"  name ="name" placeholder="Name"/>
         </div>
         <div class="form-group  mt-3">
             <label for="exampleInputPassword1">Upload a image</label>
             <input onChange={handleFileChange} type="file" class="form-control"  name ="image" placeholder="Picture"/>
         </div>
        
            <button type="submit" class="btn btn-success mt-3">Submit</button>
        </form>
        </div>
        </section>
    );
};

export default AddDoctor;