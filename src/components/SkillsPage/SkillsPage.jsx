/* eslint-disable react/prop-types */
import React from 'react';
import PageBase from '../PageBase/PageBase';
import './SkillsPage.css';

// eslint-disable-next-line react/display-name
const SkillsPage = React.forwardRef((props, ref) => {
  return (
    <PageBase
        ref={ref}
        title="My Hello World"
        number={props.number}
        className="skills-page"
    >
    <div className="project-card"/>
      {/* <img src="/images/WebAdminFront.png" className="project-image" alt="Imagen del Proyecto"/> */}
    <div className="project-content"/>
    <div className="about-section">
      <h2 className="about-title">Sobre mí</h2>
      <p className="about-paragraph">
        Mis estudios en electrónica y telecomunicaciones me llevaron a un estrecho contacto con la tecnología. 
        Comencé mi carrera trabajando con servicios de redes informáticas, lo que me acercó al mundo de los servidores Linux 
        y especialmente a la consola Bash, que me puso en el camino del desarrollo web full stack.
      </p>
      <p className="about-paragraph">
        Comencé con HTML, CSS, y luego avancé a JavaScript, Node.js, Express y React. 
        Más tarde, exploré tecnologías como NestJS, PostgresSQL, MongoDB y Docker, entre otras.
      </p>
      <p className="about-paragraph">
        Disfruto el desarrollo back-end, donde encuentro un gusto especial en resolver desafíos, 
        crear diversas lógicas de negocio, y buscar soluciones eficientes y escalables para los problemas que se presentan.
      </p>
    </div>

    </PageBase>
  );
});

export default SkillsPage;
