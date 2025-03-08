/* eslint-disable react/prop-types */
import React from 'react';
import PageBase from '../PageBase/PageBase';
import DePelisBack from '/images/DePelisBack.png';

import './PageMovieBack.css';

// eslint-disable-next-line react/display-name
const PageMovieBack = React.forwardRef((props, ref) => {
  return (
    <PageBase
        ref={ref}
        title="Movie Page Creator | Back-end"
        number={props.number}
        className="skills-page"
    >
        <div className="project-card"/>
            {/* <img src="/images/DePelisBack.png" className="project-image" alt="Imagen del Proyecto"/> */}
            <img src={DePelisBack} className="project-image" alt="Imagen del Proyecto"/>
        <div className="project-content"/>
            {/* <h3 className="project-title">Movie Page Creator</h3> */}
            <p className="project-description">
                El backend de esta aplicación es una API RESTful desarrollada para gestionar las operaciones de la página de películas.<br/>
                Utilizando <strong>Node.js</strong> y <strong>Express</strong>, permite la interacción eficiente con la base de datos <strong>MongoDB</strong>, garantizando la persistencia y recuperación de datos.<br/>
                Cada solicitud desde el frontend es procesada en esta capa, asegurando una correcta validación de datos y seguridad en las operaciones.<br/>
            </p><br/>
            <p className="project-features">
                <strong>Características:</strong><br/>
                - CRUD completo para gestionar películas y detalles asociados.<br/>
                - Conexión y manejo eficiente de datos con <strong>MongoDB</strong> a través de <strong>Mongoose</strong>.<br/>
                - Validación de datos garantizando integridad y seguridad en las solicitudes.
            </p><br />
            <p className="project-tech">
                <strong>Tecnologías Usadas:</strong><br/>
                Node.js, Express, MongoDB, Mongoose.
            </p>
        <div className="button-container mt-5">
            <a href="https://github.com/rvh2776/DePelis_back" target="_blank" className="btn btn-primary mx-2">Ver en GitHub</a>
            <a href="https://github.com/rvh2776/dePelis_front" target="_blank" className="btn btn-secondary disabled">Ver Demo</a>
        </div>
    </PageBase>
  );
});

export default PageMovieBack;
