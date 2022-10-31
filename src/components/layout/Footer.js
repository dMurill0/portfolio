import React from 'react'
import { Social } from '../Social';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
    return (

        <footer className="footer"><Social />
            <h5>Portafolio Daniel Murillo &copy; 2022.<FontAwesomeIcon icon={faReact} color="#445964" size='2x' /></h5>
        </footer>

    )
}
