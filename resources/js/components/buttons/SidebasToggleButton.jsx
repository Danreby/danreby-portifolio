import React from 'react';
import ListIcon from '../icons/ListIcon';

export default function SidebarToggleButton({ onClick }) {
  return (
    <button
      aria-label="Toggle sidebar"
      onClick={onClick}
      className="p-2 ml-4 text-gray-100 hover:text-gray-400 focus:outline-none"
    >
      {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
      </svg> */}
      <ListIcon/>
    </button>
  );
}
