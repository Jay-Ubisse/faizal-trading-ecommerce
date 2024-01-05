'use client'

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { products } from "@/data/products-list";
import { Lock } from "@phosphor-icons/react";
import Image from "next/image"
import Link from "next/link";


const Cart = () => {
    return (
        <div className="bg-black">
            <main className="bg-gradient-to-tr from-black to-amber-900/70 min-h-screen">
                <Header cartNumber={1} />
                <section className="w-[85%] mx-auto mt-10 flex justify-between">
                    <article className="w-[69%]">
                        <h1 className="text-white text-xl font-semibold">Minha Carrinha</h1>
                        <div className="border-y border-slate-300 py-5 mt-5">
                            {
                                products.map((product) => {
                                    return (
                                        <section
                                            key={product.id}
                                            className="flex text-white gap-4 px-5"
                                        >
                                            <div className="w-[20%]">
                                                <Image
                                                    src={'/img/acessories.jpeg'}
                                                    width="0"
                                                    height="0"
                                                    sizes="100vw"
                                                    style={{ width: '100%', height: 'auto' }}

                                                    alt='Image'
                                                />
                                            </div>
                                            <div className="w-[50%]">
                                                <h2 className="font-semibold text-lg">{product.name}</h2>
                                                <p>{product.price} MT</p>
                                            </div>
                                            <div className="w-[30%] flex justify-evenly text-center">
                                                <div>
                                                    <h2 className="font-semibold">Quantidade</h2>
                                                    <p>{product.quantity}</p>
                                                </div>
                                                <div>
                                                    <h2 className="font-semibold">Subtotal</h2>
                                                    <p>{product.total}</p>
                                                </div>
                                            </div>
                                        </section>
                                    );
                                })
                            }
                        </div>
                    </article>
                    <aside className="w-[29%]">
                        <h1 className="text-white text-xl font-semibold">Resumo do Pedido</h1>
                        <section className="border-y border-slate-300 py-5 mt-5 text-white">
                            <div className="flex justify-between font-medium">
                                <p>Subtotal</p>
                                <p>3000 MT</p>
                            </div>
                        </section>
                        <div className="flex justify-between font-semibold text-lg text-white my-7">
                            <h2>Total</h2>
                            <h2>3000 MT</h2>
                        </div>
                        <div className="w-fit mx-auto">
                            <Link
                                href={'/'}
                                className="text-white font-medium bg-app-orange px-24 py-3 border-2 border-app-orange rounded-3xl hover:bg-transparent"
                            >
                                Checkout
                            </Link>
                        </div>
                        <div className="mt-5 justify-center items-center text-white text-sm flex gap-2">
                            <Lock weight="fill" />
                            <p>Pagamento seguro</p>
                        </div>
                    </aside>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Cart;