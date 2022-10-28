import React from 'react'

export const About = () => {
    return (

        <div className='pageAbout'>
            <section className='flex-container'>
                <div className='aboutP'>
                    <h1>Daniel Murillo</h1>
                    <img src={"/images/face.jpg"} alt="profile" />
                    <p>
                        Hola, soy <strong>Daniel Murillo Garzón</strong>, un desarrollador front-end que ha realizado numerosos proyectos tanto en la universidad como proyectos propios de manera autodidacta. También tengo experiencia como desarrollador Full-Stack.
                    </p>
                </div>
            </section>
            <section className='specialities'>
                <h1>Mis especialidades</h1><br />
                <div className='speciality'>
                    <img src={'/images/web.png'} alt="web"></img>
                    <h2>Desarrollo web</h2>
                    <p>Creo webs con una buena experiencia de usuario. Para ello busco que sean visualmente agradables y responsive</p>
                </div>
                <div className='speciality'>
                    <img src={'/images/ui.png'} alt="ui"></img>
                    <h2>Interfaces </h2>
                    <p>También me gusta crear interfaces de usuario apropiadas a los gustos de los usuarios</p>
                </div>
            </section>
            <div className='skills'>
                <h1>Skills</h1>
                <img src={'/images/html.png'} alt="html"></img>
                <img src={'/images/css.png'} alt="css"></img>
                <img src={'/images/javascript.png'} alt="js"></img>
                <img src={'/images/react2.png'} alt="react"></img>
                <img src={'/images/angular.png'} alt="angular"></img>
                <img src={'/images/bootstrap.png'} alt="bootstrap"></img>
                <img src={'/images/node.png'} alt="node"></img>
                <img src={'/images/ts.png'} alt="ts"></img>
            </div>


        </div>
    )
}
