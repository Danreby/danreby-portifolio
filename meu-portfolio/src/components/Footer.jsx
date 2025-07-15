// src/components/Footer.jsx
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-200 text-center py-4">
      <p className="text-sm">&copy; {new Date().getFullYear()} Bernardo Rolim. Todos os direitos reservados.</p>
    </footer>
  )
}
