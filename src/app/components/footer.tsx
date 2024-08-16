import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-4 text-center text-white">
      <div className="container mx-auto">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Developed by{' '}
          <a
            href="https://github.com/Vi7ality"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300"
          >
            vi7ality
          </a>
        </p>
      </div>
    </footer>
  );
}
