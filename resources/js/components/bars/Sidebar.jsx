import React from 'react';
import ArrowIcon from '../icons/ArrowIcon';

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300
          ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={onClose}
      />

      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-gray-900 text-gray-100 transform transition-transform duration-300
          ${isOpen ? 'translate-x-0 z-20' : '-translate-x-full'}
        `}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button
            aria-label="Close sidebar"
            onClick={onClose}
            className="p-1 text-gray-100 hover:text-gray-400 focus:outline-none"
          >
            <ArrowIcon type={3} direction="left" />
          </button>
        </div>
        <nav className="px-4 py-6 space-y-4">
          <a href="#about" className="block hover:text-gray-400">Sobre</a>
          <a href="#projects" className="block hover:text-gray-400">Projetos</a>
          <a href="#contact" className="block hover:text-gray-400">Contato</a>
        </nav>
      </aside>
    </>
  );
}
