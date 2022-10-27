import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

export const Social = () => {
    return (

        <div className='social' >
            <a href='https://twitter.com/muriPKR'><FontAwesomeIcon icon={faTwitter} color="#445964" size='2x' fixedWidth /></a>
            <a href='https://github.com/dMurill0'><FontAwesomeIcon icon={faGithub} color="#445964" size='2x' fixedWidth /></a>
            <a href='https://www.linkedin.com/in/daniel-murillo-garz%C3%B3n-0bb8b014b/'><FontAwesomeIcon icon={faLinkedin} color="#445964" size='2x' fixedWidth />  </a>

        </div>

    )
}
