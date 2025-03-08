import { useState } from 'react';
import './NavBar.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// eslint-disable-next-line react/prop-types
export const NavBar = ({ onNavigate }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  return (
    <nav className="navbar fixed-top bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="logo-container">
          <h2 className="logo ms-2 pt-1">Rafael Velazquez.</h2>
        </div>
        <div className="d-flex justify-content-center flex-grow-1">
          <button className="btn btn-sm btn-outline-primary me-1 navbar-button" onClick={() => onNavigate(0)}>FRENTE</button>
          <button className="btn btn-sm btn-outline-warning mx-1 navbar-button" onClick={() => onNavigate(1)}>SKILLS</button>

          {/* Proyectos con dropdown */}
          <div className="dropdown mx-1" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <button className="btn btn-sm btn-outline-success navbar-button dropdown-toggle" type="button">
              PROJECTS
            </button>
            {dropdownOpen && (
              <ul className="dropdown-menu show custom-dropdown">
                <li><button className="btn btn-sm btn-outline-success dropdown-item" onClick={() => onNavigate(3)}>Movie Page Creator</button></li>
                <li><button className="btn btn-sm btn-outline-success dropdown-item" onClick={() => onNavigate(5)}>WebAdminISP</button></li>
                {/* Agregar más proyectos según sea necesario */}
              </ul>
            )}
          </div>

          <button className="btn btn-sm btn-outline-info mx-1 navbar-button" onClick={() => onNavigate(9)}>DORSO</button>
        </div>

        <div className="d-flex align-items-center">
          <a href="https://github.com/rvh2776" target="_blank" rel="noopener noreferrer" className="mx-2 navbar-icon">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/rafael-velazquez-25a928165/" target="_blank" rel="noopener noreferrer" className="mx-2 navbar-icon">
            <FaLinkedin size={30} />
          </a>
          <a href="mailto:rafael.vh@gmail.com" className="mx-2 navbar-icon">
            <FaEnvelope size={30} />
          </a>
        </div>
      </div>
    </nav>
  );
};

