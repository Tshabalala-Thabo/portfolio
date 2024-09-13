import React, { useState } from 'react'

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-end">
        <button
          className="text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {isOpen && (
          <div className="absolute top-14 right-4 sm:right-6 lg:right-8 bg-white shadow-lg rounded-lg py-2 w-48">
            <a href="/" className="block px-4 py-2 text-primary-200 hover:bg-primary-100">Home</a>
            <a href="/" className="block px-4 py-2 text-primary-200 hover:bg-primary-100">About</a>
            <a href="/" className="block px-4 py-2 text-primary-200 hover:bg-primary-100">Projects</a>
            <a href="/" className="block px-4 py-2 text-primary-200 hover:bg-primary-100">Contact</a>
          </div>
        )}
      </div>
    </div>
  )
}

export default BurgerMenu