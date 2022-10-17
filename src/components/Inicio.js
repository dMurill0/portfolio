import React from 'react'
import { Link } from "react-router-dom";

export const Inicio = () => {
    return (
        <div className="home">
            <h1>
                Soy Daniel Murillo, <strong>desarrollador Front-end</strong> en Madrid,
                y ofrezco mis servicios de desarrollo y programación en todo tipo de proyectos web.
            </h1>
            <h3>
                Te ayudo a crear tu sitio o aplicación web
                para alcanzar <strong>mayor visibilidad y relevancia</strong> en Internet. <Link to="/Contacto">Contacta conmigo.</Link>
            </h3>
            <section className='last-works'>
                <h2 className='heading'>Algunos de mis proyectos</h2>
                <p>Estos son algunos de mis ultimos proyectos de <strong>desarrollo web</strong></p>
                <div class="works"></div>
            </section>
        </div>
    )
}
