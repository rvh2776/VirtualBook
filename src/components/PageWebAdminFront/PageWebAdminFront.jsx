/* eslint-disable react/prop-types */
import React from 'react';
import PageBase from '../PageBase/PageBase';
import ProjectVideo from '../ProjectVideos/ProjectVideo';
import DemoFront from '/videos/webadminisp-demo.mp4';


import './PageWebAdminFront.css';

// eslint-disable-next-line react/display-name
const PageWebAdminFront = React.forwardRef((props, ref) => {
  return (
    <PageBase
        ref={ref}
        title="WebAdminISP | Front-end"
        number={props.number}
        className="skills-page"
    >
        <div className="project-card"/>
            {/* <img src="/images/WebAdminFront.png" className="project-image" alt="Imagen del Proyecto"/> */}
        <div className="project-content"/>

        {/* <ProjectVideo src="/videos/webadminisp-demo.mp4" /> */}
        <ProjectVideo src={DemoFront} />

            <p className="project-description mt-2">
                WebAdminISP es una solución para la gestión de proveedores de servicios de Internet (ISP), desarrollada en equipo.
                Facilita la administración, la interacción con los clientes y la automatización de procesos administrativos.
                <br />Cuenta con un dashboard intuitivo para la administración, chat en vivo, manejo de usuarios, visualización de facturas y gestión de servicios.
            </p>
            <p className="project-features">
                <strong>Características principales dashboards:</strong><br/>
                - <strong>Administración:</strong> Gestión de clientes, altas y bajas de servicios, asistencias, etc.<br/>
                - <strong>Clientes:</strong> Historial, pago y descargas de facturas, solicitud de asistencia, cambio de plan, baja de servicio, chat en vivo y chatbot de consultas rápidas.
            </p>
            <p className="project-tech">
                <strong>Tecnologías Usadas:</strong><br/>
                Next.js, Tailwind CSS, Socket.IO, Google Maps, Mercado Pago, OAuth con Google.
            </p>

            <p className="project-tech">
                <strong>Mi rol en el proyecto:</strong><br/>
                Colaboré en la implementación del frontend, encargándome de la integración de funcionalidades como, la integración con la pasarela de pagos.
            </p>
        <div className="button-container">
            <a href="https://github.com/rvh2776/wedAdminIsp-front" target="_blank" className="btn btn-primary mx-2">Ver en GitHub</a>
            <a href="https://demo-ultranet.vercel.app/" target="_blank" className="btn btn-secondary">Ver Demo</a>
        </div>
    </PageBase>
  );
});

export default PageWebAdminFront;