// src/pages/Projects.jsx
import React from 'react'

export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto grid gap-8 sm:grid-cols-2">
      {/* Aqui você pode mapear seus projetos */}
      <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
        <h3 className="font-semibold text-xl mb-2">Projeto 1</h3>
        <p>Descrição rápida do projeto.</p>
      </div>
    </div>
  )
}
