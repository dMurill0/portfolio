import React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Inicio } from "../components/Inicio"
import { Portafolio } from '../components/Portafolio';
import { Servicios } from "../components/Servicios";
import { Contacto } from "../components/Contacto";
import { HeaderNav } from '../components/layout/HeaderNav';
import { Footer } from '../components/layout/Footer';
import { Proyecto } from '../components/Proyecto';
import { About } from '../components/About';
export const Misrutas = () => {
    return (
        <BrowserRouter>
            {/*     HEADER Y NAVEGACIÓN   */}
            <HeaderNav></HeaderNav>

            {/*     CONTENIDO CENTRAL   */}
            <section className="content">
                <Routes>
                    <Route path='/' element={<Navigate to="Inicio" />} />
                    <Route path='/inicio' element={<Inicio />} />
                    <Route path='/portafolio' element={<Portafolio />} />
                    <Route path='/servicios' element={<Servicios />} />
                    <Route path='/contacto' element={<Contacto />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/proyecto/:id' element={<Proyecto />} />
                    <Route path='*' element={
                        <div className='page'>
                            <h1 className='heading'>Error 404</h1>
                            <p>Página no encontrada</p>
                        </div>
                    } />

                </Routes>

            </section>

            {/*     FOOTER   */}
            <Footer></Footer>
        </BrowserRouter>
    )
}
