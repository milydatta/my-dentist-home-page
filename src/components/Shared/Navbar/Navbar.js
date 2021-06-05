import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><span className="text-success">My Dentist</span></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link  ms-5" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link  ms-5" href="appointment">Appointment</a>
              </li>
              <li className="nav-item">
                <a className="nav-link  ms-5" href="dashboard">Dashboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link  ms-5" href="dashboard">Admin</a>
              </li>
              <li className="nav-item">
                <a className="nav-link  ms-5" href="#">Blogs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link  ms-5" href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;