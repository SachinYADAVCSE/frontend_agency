import React from 'react'
import HeroOne from './sections/HeroOne'
import StatsOne from "../components/sections/StatsOne";
import ServicesOne from "./sections/ServicesOne";
import CTAOne from "./sections/CTAOne";
import ProjectOne from "./sections/ProjectOne";
import Testimonials from "./sections/Testimonials";
import ProjectsPage from './sections/ProjectsPage';

const Home = () => {
    return (
            <main>
                <HeroOne />
                {/* <ProjectOne /> */}
                <ProjectsPage />
                <Testimonials />
                <ServicesOne />
                <StatsOne />
                <CTAOne />
            </main>
    )
}

export default Home