import React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Curriculum } from '../components/Curriculum';
import { Inicio } from "../components/Inicio"
import { Portafolio } from '../components/Portafolio';
import { Servicios } from "../components/Servicios";
import { Contacto } from "../components/Contacto";
import { HeaderNav } from '../components/layout/HeaderNav';
import { Footer } from '../components/layout/Footer';
export const Misrutas = () => {
    return (
        <BrowserRouter>
            {/*     HEADER Y NAVEGACIÓN   */}
            <HeaderNav></HeaderNav>

            {/*     CONTENIDO CENTRAL   */}
            <section class="content">
                <Routes>
                    <Route path='/' element={<Navigate to="Inicio" />} />
                    <Route path='/inicio' element={<Inicio />} />
                    <Route path='/portafolio' element={<Portafolio />} />
                    <Route path='/servicios' element={<Servicios />} />
                    <Route path='/curriculum' element={<Curriculum />} />
                    <Route path='/contacto' element={<Contacto />} />
                </Routes>

            </section>

            {/*     FOOTER   */}
            <Footer></Footer>
        </BrowserRouter>
    )
}
