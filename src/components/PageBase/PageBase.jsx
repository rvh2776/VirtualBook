/* eslint-disable react/prop-types */
import React from 'react';
import './PageBase.css'; // Estilos comunes para todas las páginas

// eslint-disable-next-line react/display-name
const PageBase = React.forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        <h2 className="page-header">{props.title}</h2>
        <div className="page-body">{props.children}</div>
      </div>
      <div className="page-footer">{props.number}</div>
    </div>
  );
});

export default PageBase;
