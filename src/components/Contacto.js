import React from 'react'
import { Social } from "./Social"

export const Contacto = () => {
    return (
        <div className='pageContact'>

            <form className='contact' action='mailto:sittingbout@gmail.com'>
                <h1>Contacto</h1>
                <input type="text" placeholder='Nombre'></input>
                <input type="text" placeholder='Apellidos'></input>
                <input type="text" placeholder='E-Mail'></input>
                <textarea placeholder='Motivo de contacto'></textarea>
                <input type="submit" value="Enviar"></input>
            </form>
            <img src='/images/contact.jpg' alt=''></img>

        </div>
    )
}
