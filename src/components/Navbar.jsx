// src/components/Navbar.jsx
import React from 'react'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Seu Nome</h1>
      <ul className="flex gap-4">
        <li><a href="#home"    className="hover:underline">Home</a></li>
        <li><a href="#projects"className="hover:underline">Projetos</a></li>
        <li><a href="#contact" className="hover:underline">Contato</a></li>
      </ul>
    </nav>
  )
}
