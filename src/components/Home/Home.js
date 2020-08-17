import React from 'react'
import Navbar from './NavBar/Navbar'
import Hero from './Hero/Hero'
import Domain from './Domain/Domain'
import Advantages from './Advantages/Advantages'
import AboutUs from './AboutUs/AboutUs'
import Footer from './Footer/Footer'

function Home() {
    return (
        <div>
     <h1>This is home Page</h1>
            <Navbar/>
            <Hero/>
            <Domain/>
            <Advantages/>
            <AboutUs/>
            <Footer/>
        


            
        </div>
    )
}

export default Home
