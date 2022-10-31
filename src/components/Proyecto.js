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
                <h1 className='heading'>{proyecto.nombre}</h1>
                <img src={"/images/" + proyecto.id + ".jpg"} alt="" />
                <h3>{proyecto.tecnologias}</h3>
                <p>{proyecto.descripcion}</p>
                {proyecto.url !== "" ? (
                    <a href={proyecto.url}>Ir al proyecto</a>
                ) : (
                    <a hidden="true" href={proyecto.url}>Ir al proyecto</a>
                )}

            </div>
        </div>
    )
}
