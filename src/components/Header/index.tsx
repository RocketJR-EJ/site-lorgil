"use client"
import Image from 'next/image';
import { Instagram, Menu, X } from 'lucide-react';
import { useState } from 'react';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
        <header className=" w-screen sticky top-0 z-50 font-poppins font-[500] flex bg-gradient-to-r from-red-600 to-red-800 text-white items-center justify-around p-4 relative">
            <Image 
              className="w-32" 
              src="/img/Logos/Logo_Lorgil.svg" 
              width={128} 
              height={40} 
              alt="Logo Lorgil" 
            />

            <nav className="hidden md:block">
                <ul className="flex gap-6 items-center">
                    <li><a href="#" className="hover:text-red-900 transition-colors">ÓCULOS DE GRAU</a></li>
                    <li><a href="#" className="hover:text-red-900 transition-colors">ÓCULOS DE SOL</a></li>
                    <li><a href="#" className="hover:text-red-900 transition-colors">LENTES DE CONTATO</a></li>
                    <li><a href="#" className="hover:text-red-900 transition-colors">MARCAS</a></li>
                </ul>
            </nav>

            <div className="hidden md:flex">
               <a href="https://www.instagram.com/lorgilotica/"><Instagram className="w-6 h-6 hover:text-red-900 cursor-pointer" /></a> 
            </div>

            <button
                className="md:hidden text-white"
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {isMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-red-700 z-50 md:hidden">
                    <nav className="p-4">
                        <ul className="flex flex-col gap-4">
                            <li><a href="#" className="block py-2 hover:text-red-300 transition-colors">ÓCULOS DE GRAU</a></li>
                            <li><a href="#" className="block py-2 hover:text-red-300 transition-colors">ÓCULOS DE SOL</a></li>
                            <li><a href="#" className="block py-2 hover:text-red-300 transition-colors">LENTES DE CONTATO</a></li>
                            <li><a href="#" className="block py-2 hover:text-red-300 transition-colors">MARCAS</a></li>
                        </ul>
                        <div className="mt-4 pt-4 border-t border-red-600">
                           <a href="https://www.instagram.com/lorgilotica/"><Instagram className="w-6 h-6 hover:text-red-300 cursor-pointer" /></a>
                        </div>
                    </nav>
                </div>
            )}
        </header>

        <article className='p-9 flex bg-zinc-900 text-white items-center justify-around relative w-screen'>
            <h1>Jotta #222222</h1>
        </article>
       </>
    );
}

export default Header;