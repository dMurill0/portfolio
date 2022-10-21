import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { trabajos } from '../data/trabajos';
export const Proyecto = () => {

    const [proyecto, setProyecto] = useState({});
    const params = useParams();

    useEffect(() => {
        let proyecto = trabajos.filter(trabajo => trabajo.id === params.id);
        setProyecto(proyecto[0]);
    }, []);
    return (
        <div className='page'>
            <div className='mask'>

            </div>
            <h1 className='heading'>{proyecto.nombre}</h1>

            <img src={"/images/" + proyecto.id + ".jpg"} alt="" />

            <p>{proyecto.tecnologias}</p>
            <p>{proyecto.descripcion}</p>
            <a href={'https://' + proyecto.url}>Ir al proyecto</a>
        </div>
    )
}
