import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
                <div className="text-2xl font-bold mb-4 md:mb-0">MovieApp</div>
                <ul className="flex space-x-4">
                    <li><a href="#" className="hover:text-blue-500">Home</a></li>
                    <li><a href="#" className="hover:text-blue-500">About</a></li>
                    <li><a href="#" className="hover:text-blue-500">Contact</a></li>
                </ul>
            </div>
            <div className="mt-4 border-t border-gray-600 text-center">
                <p className="py-2">&copy; {new Date().getFullYear()} MovieApp. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
