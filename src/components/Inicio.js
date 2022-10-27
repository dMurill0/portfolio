import React from 'react'
import { Link } from "react-router-dom";
import { ListadoTrabajos } from './ListadoTrabajos';


export const Inicio = () => {
    return (
        <>
            <div className="home">
                <div className='intro'>
                    <h1>
                        Soy Daniel Murillo, <strong>desarrollador Front-end</strong>
                    </h1>
                    <h3>Puedo ayudarte a crear tu sitio web y alcanzar mayor visibilidad y relevancia en Internet</h3>
                    <Link to="/Contacto"> Contacta conmigo</Link>

                </div>
                <div className='codImg'>
                    <img src='/images/coding.jpg' alt='coding' />
                </div>

            </div>

            <section className='last-works'>
                <h2 className='heading'>Algunos de mis proyectos</h2>
                <p>Estos son algunos de mis ultimos proyectos de <strong>desarrollo web</strong></p>
                <ListadoTrabajos limite="2" />

            </section>
        </>
    )
}
