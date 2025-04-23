"use client"
import Image from 'next/image';
import { Instagram, Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link'; 

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMarcasOpen, setIsMarcasOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleMarcas = () => {
        setIsMarcasOpen(!isMarcasOpen);
    };

    return (
        <>
            <header className="w-full fixed top-0 z-50 font-poppins font-[500] flex bg-gradient-to-r from-red-600 to-red-800 text-white items-center justify-around p-4">
                <Link href="/" aria-label="Página Inicial">
                    <Image
                        className="w-32"
                        src="/img/Logos/Logo_Lorgil.svg"
                        width={128}
                        height={40}
                        alt="Logo Lorgil"
                    />
                </Link>

                <nav className="hidden md:block">
                    <ul className="flex gap-6 items-center">
                        <li><a href="#" className="hover:text-red-900 transition-colors">ÓCULOS DE GRAU</a></li>
                        <li><a href="#" className="hover:text-red-900 transition-colors">ÓCULOS DE SOL</a></li>
                        <li><a href="#" className="hover:text-red-900 transition-colors">LENTES DE CONTATO</a></li>
                        <li className="relative">
                            <button
                                onClick={toggleMarcas}
                                className="flex items-center gap-1 hover:text-red-900 transition-colors focus:outline-none"
                            >
                                MARCAS
                                {isMarcasOpen ?
                                    <ChevronUp className="w-4 h-4" /> :
                                    <ChevronDown className="w-4 h-4" />
                                }
                            </button>
                            {isMarcasOpen && (
                                <div className="absolute top-full left-0 mt-2 w-48 bg-white text-red-800 rounded shadow-lg z-50">
                                    <ul className="py-2">
                                        <li>
                                            <a
                                                href="#Mormaii"
                                                className="block px-4 py-2 hover:bg-red-100 transition-colors"
                                                onClick={() => setIsMarcasOpen(false)}
                                            >
                                                Mormaii
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#JeanPierre"
                                                className="block px-4 py-2 hover:bg-red-100 transition-colors"
                                                onClick={() => setIsMarcasOpen(false)}
                                            >
                                                Jean Pierre
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#Colcci"
                                                className="block px-4 py-2 hover:bg-red-100 transition-colors"
                                                onClick={() => setIsMarcasOpen(false)}
                                            >
                                                Colcci
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#Lavorato"
                                                className="block px-4 py-2 hover:bg-red-100 transition-colors"
                                                onClick={() => setIsMarcasOpen(false)}
                                            >
                                                Lavorato
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                href="#Fiamma"
                                                className="block px-4 py-2 hover:bg-red-100 transition-colors"
                                                onClick={() => setIsMarcasOpen(false)}
                                            >
                                                Fiamma
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                href="#DusterConcept"
                                                className="block px-4 py-2 hover:bg-red-100 transition-colors"
                                                onClick={() => setIsMarcasOpen(false)}
                                            >
                                                Duster Concept
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#CarolCazassa"
                                                className="block px-4 py-2 hover:bg-red-100 transition-colors"
                                                onClick={() => setIsMarcasOpen(false)}
                                            >
                                                Carol Cazassa
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                href="#Vilenev"
                                                className="block px-4 py-2 hover:bg-red-100 transition-colors"
                                                onClick={() => setIsMarcasOpen(false)}
                                            >
                                                Vileney
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                href="#Nanff"
                                                className="block px-4 py-2 hover:bg-red-100 transition-colors"
                                                onClick={() => setIsMarcasOpen(false)}
                                            >
                                                Nanff
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
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
                    <div className="absolute top-full left-0 w-full bg-red-700 z-50 md:hidden">
                        <nav className="p-4">
                            <ul className="flex flex-col gap-4">
                                <li><a href="#" className="block py-2 hover:text-red-300 transition-colors">ÓCULOS DE GRAU</a></li>
                                <li><a href="#" className="block py-2 hover:text-red-300 transition-colors">ÓCULOS DE SOL</a></li>
                                <li><a href="#" className="block py-2 hover:text-red-300 transition-colors">LENTES DE CONTATO</a></li>
                                <li>
                                    <button
                                        onClick={toggleMarcas}
                                        className="flex items-center gap-1 py-2 w-full text-left hover:text-red-300 transition-colors focus:outline-none"
                                    >
                                        MARCAS
                                        {isMarcasOpen ?
                                            <ChevronUp className="w-4 h-4" /> :
                                            <ChevronDown className="w-4 h-4" />
                                        }
                                    </button>
                                    {isMarcasOpen && (
                                        <ul className="pl-4 mt-2 border-l border-red-600">
                                            <li>
                                                <a
                                                    href="#Mormaii"
                                                    className="block px-4 py-2 hover:bg-red-100 transition-colors"
                                                    onClick={() => setIsMarcasOpen(false)}
                                                >
                                                    Mormaii
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#JeanPierre"
                                                    className="block px-4 py-2 hover:bg-red-100 transition-colors"
                                                    onClick={() => setIsMarcasOpen(false)}
                                                >
                                                    Jean Pierre
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#Colcci"
                                                    className="block px-4 py-2 hover:bg-red-100 transition-colors"
                                                    onClick={() => setIsMarcasOpen(false)}
                                                >
                                                    Colcci
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#Lavorato"
                                                    className="block px-4 py-2 hover:bg-red-100 transition-colors"
                                                    onClick={() => setIsMarcasOpen(false)}
                                                >
                                                    Lavorato
                                                </a>
                                            </li>

                                            <li>
                                                <a
                                                    href="#Fiamma"
                                                    className="block px-4 py-2 hover:bg-red-100 transition-colors"
                                                    onClick={() => setIsMarcasOpen(false)}
                                                >
                                                    Fiamma
                                                </a>
                                            </li>



                                            <li>
                                                <a
                                                    href="#DusterConcept"
                                                    className="block px-4 py-2 hover:bg-red-100 transition-colors"
                                                    onClick={() => setIsMarcasOpen(false)}
                                                >
                                                    Duster Concept
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#CarolCazassa"
                                                    className="block px-4 py-2 hover:bg-red-100 transition-colors"
                                                    onClick={() => setIsMarcasOpen(false)}
                                                >
                                                    Carol Cazassa
                                                </a>
                                            </li>

                                            <li>
                                                <a
                                                    href="#Vilenev"
                                                    className="block px-4 py-2 hover:bg-red-100 transition-colors"
                                                    onClick={() => setIsMarcasOpen(false)}
                                                >
                                                    Vileney
                                                </a>
                                            </li>

                                            <li>
                                                <a
                                                    href="#Nanff"
                                                    className="block px-4 py-2 hover:bg-red-100 transition-colors"
                                                    onClick={() => setIsMarcasOpen(false)}
                                                >
                                                    Nanff
                                                </a>
                                            </li>



                                        </ul>
                                    )}
                                </li>
                            </ul>
                            <div className="mt-4 pt-4 border-t border-red-600">
                                <a href="https://www.instagram.com/lorgilotica/"><Instagram className="w-6 h-6 hover:text-red-300 cursor-pointer" /></a>
                            </div>
                        </nav>
                    </div>
                )}

            </header>
            {/* Espaçador para compensar o header fixo */}
            <div className="pt-24"></div> {/* Ajuste o valor conforme necessário */}

            <article className='p-9 flex bg-zinc-900 text-white items-center justify-around w-full'>
                <h1>Jotta #222222</h1>
            </article>

        </>
    );
}

export default Header;