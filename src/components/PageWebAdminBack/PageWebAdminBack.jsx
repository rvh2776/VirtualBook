/* eslint-disable react/prop-types */
import React from 'react';
import PageBase from '../PageBase/PageBase';
import ProjectVideo from '../ProjectVideos/ProjectVideo';
import DemoBack from '/videos/webadminisp-demoBack.mp4';


import './PageWebAdminBack.css';

// eslint-disable-next-line react/display-name
const PageWebAdminBack = React.forwardRef((props, ref) => {
  return (
    <PageBase
        ref={ref}
        title="WebAdminISP | Back-end"
        number={props.number}
        className="skills-page"
    >
        <div className="project-card"/>
            {/* <img src="/images/WebAdminFront.png" className="project-image" alt="Imagen del Proyecto"/> */}
        <div className="project-content"/>

        {/* <ProjectVideo src="/videos/webadminisp-demoBack.mp4" /> */}
        <ProjectVideo src={DemoBack} />

            <p className="project-description mt-2">
                El backend de WebAdminISP es una solución robusta y escalable desarrollada en equipo, maneja la lógica del negocio y procesos claves. 
                Proporciona una API segura y eficiente para la administración de clientes, servicios, facturación y más.
                <br />Incluye integración de servicios externos como pasarelas de pago, envío de emails automatizados y generación de facturas en PDF.
            </p>
            <p className="project-features">
                <strong>Características principales del backend:</strong><br/>
                - <strong>Autenticación y autorización:</strong> Integración con Auth0 y JWT para la seguridad.<br/>
                - <strong>Facturación:</strong> Generación y envío de PDF, integración con Mercado Pago.<br/>
                - <strong>CRUD:</strong> Usuarios, clientes, servicios, etc... con TypeORM y PostgreSQL.<br/>
            </p>
            <p className="project-tech">
                <strong>Tecnologías Usadas:</strong><br/>
                Nest.js, Swagger, Auth0, JWT, WebSockets, Nodemailer, TypeORM, PostgreSQL.
            </p>

            <p className="project-tech">
                <strong>Mi rol en el proyecto:</strong><br/>
                Colaboré en el desarrollo del backend, encargándome de la implementación de la API, integración de la autenticación y autorización, manejo de pagos y mas.
            </p>
        <div className="button-container">
            <a href="https://github.com/rvh2776/webAdminIsp-back" target="_blank" className="btn btn-primary mx-2">Ver en GitHub</a>
            <span className="btn btn-secondary disabled">Ver Demo</span>
        </div>
    </PageBase>
  );
});

export default PageWebAdminBack;