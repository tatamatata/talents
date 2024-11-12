import React from 'react';
import { Compass } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <Compass className="w-8 h-8 text-indigo-600" />
            <span className="font-bold text-xl text-gray-900">VisaGuide</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">How It Works</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Find Coaches</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Success Stories</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Resources</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-gray-600 hover:text-gray-900">Login</button>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}