/* eslint-disable react/prop-types */
import React from 'react';
import PageBase from '../PageBase/PageBase';
import DePelisFront from '/images/DePelisFront.png';

import './Projects.css';

// eslint-disable-next-line react/display-name
const Projects = React.forwardRef((props, ref) => {
  return (
    <PageBase
        ref={ref}
        title="Movie Page Creator | Front-end"
        number={props.number}
        className="skills-page"
    >
      <div className="project-card"/>
        {/* <img src="/images/DePelisFront.png" className="project-image" alt="Imagen del Proyecto"/> */}
        <img src={DePelisFront} className="project-image" alt="Imagen del Proyecto"/>
        
      <div className="project-content"/>
        {/* <h3 className="project-title">Movie Page Creator</h3> */}
        <p className="project-description">
          Aplicación web, que permite crear y gestionar una página de películas.<br/>Utilizando tecnologías como HTML, CSS, JavaScript y Webpack, ofrece una experiencia completa para gestionar y visualizar información de películas.
        </p>
        <p className="project-features"/>
          <strong>Características:</strong><br/>
          - Formulario Dinámico: Permite agregar películas a la base de datos MongoDB a través de un formulario interactivo.<br/>
          - Visualización de Películas: Las películas se muestran en tarjetas dinámicas, organizadas de manera ordenada.<br/>
          - Detalle de Películas: Al hacer clic en una tarjeta, se muestra un detalle ampliado de la película, incluyendo sinopsis y otros detalles importantes.<br/>
          - Gestión de Películas: Posibilidad de crear, borrar y editar películas, así como cargar imágenes y otros detalles relacionados.
        <p/>
        <p className="project-tech">
          <strong>Tecnologías Usadas:</strong><br/>
          HTML, CSS, JavaScript, Webpack, MongoDB.
        </p>
      <div className="button-container mt-4">
        <a href="https://github.com/rvh2776/dePelis_front" target="_blank" className="btn btn-primary mx-2 mt-3">Ver en GitHub</a>
        <a href="https://github.com/rvh2776/dePelis_front" target="_blank" className="btn btn-secondary mt-3 disabled">Ver Demo</a>
      </div>

    </PageBase>
  );
});

export default Projects;
