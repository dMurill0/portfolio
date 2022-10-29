import React from 'react'
import { Link } from "react-router-dom";
import { ListadoTrabajos } from './ListadoTrabajos';


export const Inicio = () => {
    return (
        <>
            <div className="home">
                <div className='intro'>
                    <h1>
                        Soy Daniel Murillo, <strong>desarrollador</strong>
                    </h1>
                    <div className="anim">
                        <span>F</span>
                        <span>r</span>
                        <span>o</span>
                        <span>n</span>
                        <span>t</span>
                        <span>-</span>
                        <span>t</span>
                        <span>e</span>
                        <span>n</span>
                        <span>d</span>
                        <span>.</span>
                    </div>
                    <h3>Puedo ayudarte a crear tu sitio web y alcanzar mayor visibilidad y relevancia en Internet</h3>
                    <Link to="/Contacto"> Contacta</Link>

                </div>
                <div className='codImg'>
                    <img src='/images/coding.jpg' alt='coding' />
                </div>

            </div>

            <section className='last-works'>
                <h1>Algunos de mis proyectos</h1>
                <p>Estos son algunos de mis ultimos proyectos de <strong>desarrollo web</strong> que he realizado en los últimos meses.</p>
                <ListadoTrabajos limite="2" />
            </section>
        </>
    )
}
