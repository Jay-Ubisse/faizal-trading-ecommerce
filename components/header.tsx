'use client'

import { BagSimple, MagnifyingGlass, UserCircle } from "@phosphor-icons/react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from 'next/navigation';

export const Header = ({ cartNumber }: { cartNumber: number }) => {
    const currentPath = usePathname();

    return (
        <>
            <header className="flex justify-between items-center px-5 py-5 w-[99%] mx-auto">
                <h2 className="text-sm text-white font-medium">
                    Entregas grátis para pedidos acima de 1.000,00 MT
                </h2>
                <section className="flex gap-5">
                    <form
                        className="flex gap-2 border border-white hover:border-app-orange rounded-lg px-2"
                    >
                        <button type="submit">
                            <MagnifyingGlass size={24} color="#ffffff" />
                        </button>
                        <input
                            type="search"
                            placeholder="Pesquisar..."
                            className="focus:outline-none py-2 bg-transparent text-white placeholder:text-white placeholder:text-sm"
                        />
                    </form>
                    <div className="flex gap-2 text-white">
                        <div className="flex gap-1 items-center hover:cursor-pointer hover:text-app-orange">
                            <UserCircle size={40} weight="fill" />
                            <p className="text-sm">Entrar</p>
                        </div>
                        <div>
                            <Link
                                href={'/cart'}
                                className="flex items-center hover:cursor-pointer hover:text-app-orange"
                            >
                                <BagSimple size={40} />
                                <p className="relative -left-6 mt-1">
                                    {cartNumber}
                                </p>
                            </Link>
                        </div>
                    </div>
                </section>
            </header>
            <section className="flex justify-between items-center px-5 pr-20 text-white bg-gradient-to-r from-orange-200 to-orange-600">
                <div>
                    <Image
                        src={'/img/logo-white.png'}
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{ width: '200px', height: 'auto' }}

                        alt='Image'
                    />
                </div>
                <nav className="flex gap-5">
                    <Link
                        href={'/'}
                        className={currentPath == "/" ? "text-orange-900 border-b border-orange-900 pb-1" : "text-white hover:border-b hover:text-orange-900 hover:border-orange-900 hover:pb-1"}
                    >
                        Início
                    </Link>
                    <Link
                        href={'/store'}
                        className={currentPath == "/store" ? "text-orange-900 border-b border-orange-900 pb-1" : "text-white hover:border-b hover:text-orange-900 hover:border-orange-900 hover:pb-1"}
                    >
                        Loja
                    </Link>
                    <Link
                        href={'/'}
                        className={currentPath == "/premium-area" ? "text-orange-900 border-b border-orange-900 pb-1" : "text-white hover:border-b hover:text-orange-900 hover:border-orange-900 hover:pb-1"}
                    >
                        Área Premium
                    </Link>
                    <Link
                        href={'/'}
                        className={currentPath == "/contact" ? "text-orange-900 border-b border-orange-900 pb-1" : "text-white hover:border-b hover:text-orange-900 hover:border-orange-900 hover:pb-1"}
                    >
                        Contacto
                    </Link>
                    <Link
                        href={'/'}
                        className={currentPath == "/faq" ? "text-orange-900 border-b border-orange-900 pb-1" : "text-white hover:border-b hover:text-orange-900 hover:border-orange-900 hover:pb-1"}
                    >
                        FAQ
                    </Link>
                </nav>
            </section>
        </>
    )
}