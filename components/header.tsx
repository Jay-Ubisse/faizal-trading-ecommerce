'use client'

import { BagSimple, MagnifyingGlass, UserCircle } from "@phosphor-icons/react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from 'next/navigation';

export const Header = () => {
    const currentPath = usePathname();

    return (
        <>
            <header className="flex justify-between items-center px-5 py-5 border-b-2 border-white w-[90%] mx-auto">
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
                        <div className="flex items-center hover:cursor-pointer hover:text-app-orange">
                            <BagSimple size={40} />
                            <p className="relative -left-6 mt-1">0</p>
                        </div>
                    </div>
                </section>
            </header>
            <section className="flex justify-between items-center px-5 pr-20 text-white">
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
                        className={currentPath == "/" ? "text-app-orange border-b border-app-orange pb-1" : "text-white hover:text-app-orange hover:border-b hover:border-app-orange"}
                    >
                        Início
                    </Link>
                    <Link
                        href={'/'}
                        className={currentPath == "/acessorios" ? "text-app-orange border-b border-app-orange pb-1" : "text-white hover:text-app-orange hover:border-b hover:border-app-orange"}
                    >
                        Loja
                    </Link>
                    <Link
                        href={'/'}
                        className={currentPath == "/premium" ? "text-app-orange border-b border-app-orange pb-1" : "text-white hover:text-app-orange hover:border-b hover:border-app-orange"}
                    >
                        Área Premium
                    </Link>
                    <Link
                        href={'/'}
                        className={currentPath == "/contacto" ? "text-app-orange border-b border-app-orange pb-1" : "text-white hover:text-app-orange hover:border-b hover:border-app-orange"}
                    >
                        Contacto
                    </Link>
                    <Link
                        href={'/'}
                        className={currentPath == "/faq" ? "text-app-orange border-b border-app-orange pb-1" : "text-white hover:text-app-orange hover:border-b hover:border-app-orange"}
                    >
                        FAQ
                    </Link>
                </nav>
            </section>
        </>
    )
}