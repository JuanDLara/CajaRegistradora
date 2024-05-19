import React from 'react'
import logo from '../img/logo.png'

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="mx-auto flex items-center sm:flex-row flex-col bg-emerald-950 justify-center w-full">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <img
            src={logo}
            alt="logo de la App"
            style={{ width: "60px", height: "auto" }}
          />
          <span className="ml-3 text-sm text-white font-mono">FRUVER</span>
        </a>
        <p className="text-sm text-neutral-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-1 sm:mt-0 mt-4 font-mono">© 2024 Engineering —
          <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1 text-neutral-400" rel="noopener noreferrer" target="_blank">@Fruver</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer