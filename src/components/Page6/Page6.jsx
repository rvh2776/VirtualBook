/* eslint-disable react/prop-types */
import React from 'react';
import PageBase from '../PageBase/PageBase';

// eslint-disable-next-line react/display-name
const Page6 = React.forwardRef((props, ref) => {
    return (
        <PageBase
            ref={ref}
            title="Mas contenido..."
            number={props.number}
            className="skills-page"
        >
            <div className="project-card" />
            {/* <img src="/images/WebAdminFront.png" className="project-image" alt="Imagen del Proyecto"/> */}
            <div className="project-content" />

            <p className="project-description mt-2"></p>

            <p className="project-features"></p>

            <p className="project-tech"></p>

            <p className="project-tech"></p>

        </PageBase>
    );
});

export default Page6;