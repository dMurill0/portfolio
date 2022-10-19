import React from 'react'
import { trabajos } from '../data/trabajos';
export const Portafolio = () => {
    return (
        <div className='page'>
            <h1 className='heading'>Portafolio</h1>
            <div className='works'>
                {
                    trabajos.map(trabajo => {
                        console.log(trabajo)
                        return (
                            <article article key={trabajo.id} className="work-item" >
                                <div className='mask' >
                                    <img src={'/portfolio/public/images/' + trabajo.id + '.jpg'} alt="" />
                                </div>
                                <span>{trabajo.categorias}</span>
                                <h2>{trabajo.nombre}</h2>
                                <h3>{trabajo.tecnologias}</h3>
                            </article >
                        );
                    })
                }
            </div>
        </div >
    )
}
