import React from 'react'
import { Link } from "react-router-dom";
import { ListadoTrabajos } from './ListadoTrabajos';

export const Inicio = () => {
    return (
        <div className="home">
            <h1>
                Soy Daniel Murillo, <strong>desarrollador Front-end</strong> en Madrid,
                y ofrezco mis servicios de desarrollo y programación en todo tipo de proyectos web.
            </h1>
            <h3 className='title'>
                Te ayudo a crear tu sitio o aplicación web
                para alcanzar <strong>mayor visibilidad y relevancia</strong> en Internet. <Link to="/Contacto">Contacta conmigo</Link>
            </h3>
            <section className='last-works'>
                <h2 className='heading'>Algunos de mis proyectos</h2>
                <p>Estos son algunos de mis ultimos proyectos de <strong>desarrollo web</strong></p>
                <ListadoTrabajos limite="2" />

            </section>
        </div>
    )
}
