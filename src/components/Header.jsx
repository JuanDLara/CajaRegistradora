import React from 'react'
import logo from '../img/logo.png'

const Header = () => {
    return (

        <header className="text-gray-600 body-font w-screen">
            <div className="bg-emerald-950 flex md:flex-row justify-center">
                <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center justify-center mb-4 md:mb-0">
                    <img
                        src={logo}
                        alt="logo de la App"
                        style={{ width: "90px", height: "auto" }}
                    />
                    <span className="ml-3 text-2xl text-white font-mono">Fruver's Engineering</span>
                </a>
                
            </div>
        </header>

    )
}

export default Header