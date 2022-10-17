import React from 'react'

export const Contacto = () => {
    return (
        <div className='page'>
            <h1 className='heading'>Contacto</h1>
            <form className='contact' action='mailto:sittingbout@gmail.com'>
                <input type="text" placeholder='Nombre'></input>
                <input type="text" placeholder='Apellidos'></input>
                <input type="text" placeholder='E-Mail'></input>
                <textarea placeholder='Motivo de contacto'></textarea>
                <input type="submit" value="Enviar"></input>

            </form>
            <div className="social">
                <h2> Enlaces</h2>
                <ul>
                    <li><img src='../images/gmail.png' alt='gmail' />Correo electrónico: </li>
                    <li><img src='../images/github.png' alt='github' />Git-Hub: </li>
                    <li><img src='../images/linkedin.png' alt="linkedin" />LinkedIn: </li>
                    <li>Portafolio: </li>
                </ul>
            </div>
        </div>
    )
}
