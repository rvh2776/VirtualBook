import { useRef, useEffect, useState } from 'react';

// eslint-disable-next-line react/prop-types
const ProjectVideo = ({ src }) => {
  const videoRef = useRef(null); // Referencia al elemento video
  const [isVisible, setIsVisible] = useState(false); // Estado para controlar visibilidad

  useEffect(() => {
    const currentVideoRef = videoRef.current;

    if (!currentVideoRef) {
      console.log('El video no está listo aún');
      return;
    }

    // IntersectionObserver para detectar cuando el video es visible
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // console.log('El video es visible');
      } else {
        setIsVisible(false);
      }
    }, { threshold: 0.5 });

    observer.observe(currentVideoRef); // Comienza a observar el video

    return () => {
      if (currentVideoRef) {
        observer.unobserve(currentVideoRef); // Limpia la observación
      }
    };
  }, []);

  useEffect(() => {
    const currentVideoRef = videoRef.current;

    if (isVisible && currentVideoRef) {
      // Forzar reproducción si es visible
      currentVideoRef.play().catch(error => {
        console.log('Error al reproducir el video:', error);
      });
    } else if (!isVisible && currentVideoRef) {
      // Pausa el video cuando no es visible
      currentVideoRef.pause();
    }
  }, [isVisible]);

  return (
    <div>
      <video
        ref={videoRef}
        className="project-video"
        src={src}
        width="100%"
        height="140"
        // loop
        muted
        controls
        playsInline
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default ProjectVideo;
