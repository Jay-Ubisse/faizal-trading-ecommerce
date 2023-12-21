'use client'

import { Header } from "@/components/header";
import { Broadcast, SealCheck, Truck } from "@phosphor-icons/react";
import Link from "next/link";
import { Fade, Slide } from "react-awesome-reveal";
import Image from "next/image"
import { Footer } from "@/components/footer";

import { products } from "@/data/products-list";
import { cart } from "@/data/products-list";
import { useState } from "react";


export default function Home() {
  const [itemsNumber, setItemsNumber] = useState(0);

  function addToCart(item: object) {
    cart.push(item);
    setItemsNumber(cart.length);
  }

  return (
    <>
      <main>
        <section
          className="min-h-screen bg-cover"
          style={{
            backgroundImage: `url('/img/home-main-background.jpg')`
          }}
        >
          <div className="w-full h-full pb-20 bg-black/50">
            <Header cartNumber={itemsNumber} />
            <div className="w-fit mt-10 ml-20">
              <Fade cascade duration={2000}>
                <h1 className="text-6xl mb-6 font-bold text-app-orange">
                  Construa o Carro <br />Dos Seus Sonhos Hoje.
                </h1>
                <h2 className="text-3xl mb-10 font-bold text-white">Agora São 15% de Desconto Em Todos os Items.</h2>
              </Fade>
              <Slide direction="down" delay={700}>
                <div>
                  <Link
                    href={'/'}
                    className="text-white font-medium bg-app-orange px-6 py-3 border-2 border-app-orange rounded-3xl hover:bg-transparent"
                  >
                    Comprar agora
                  </Link>
                </div>
              </Slide>
              <Slide direction="left" delay={800}>
                <section className="mt-28 flex gap-10">
                  <div className="text-white flex items-center gap-6">
                    <Truck weight="fill" size={52} />
                    <div className="text-sm border-l border-app-orange pl-6 py-8">
                      <h4 className="font-semibold">Entregas grátis</h4>
                      <p className="font-normal">Para pedidos acima de 1.000,00 MT</p>
                    </div>
                  </div>
                  <div className="text-white flex items-center gap-6">
                    <SealCheck weight="fill" size={52} />
                    <div className="text-sm border-l border-app-orange pl-6 py-8">
                      <h4 className="font-semibold">Testado e Comprovado</h4>
                      <p className="font-normal">Os mais altos testes de qualidade</p>
                    </div>
                  </div>
                  <div className="text-white flex items-center gap-6">
                    <Broadcast weight="fill" size={52} />
                    <div className="text-sm border-l border-app-orange pl-6 py-8">
                      <h4 className="font-semibold">Atendimento ao Cliente</h4>
                      <p className="font-normal">Disponivel 24/7</p>
                    </div>
                  </div>
                </section>
              </Slide>
            </div>
          </div>
        </section>
        <section className="bg-gradient-to-tr from-slate-900 to-black min-h-screen pt-5 pb-10">
          <Slide direction='up' delay={200} duration={1000}>
            <h1 className='text-app-orange text-center font-bold text-3xl'>Compre por Categoria</h1>
            <hr className='bg-app-orange h-2 rounded-3xl w-[50px] mx-auto mt-2 mb-8 border-none' />
          </Slide>
          <div className="flex justify-evenly">
            <div className="card w-[24%] glass">
              <figure>
                <Image
                  src={'/img/wheels.jpeg'}
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}

                  alt='Image'
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-white text-2xl text-center font-bold">Pneus e Jantes</h2>
                <div className="card-actions justify-center mt-5">
                  <button className="btn btn-primary text-white bg-app-orange border-none hover:bg-amber-600">Comprar</button>
                </div>
              </div>
            </div>
            <div className="card w-[24%] glass">
              <figure>
                <Image
                  src={'/img/engine.jpeg'}
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}

                  alt='Image'
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-white text-2xl text-center font-bold">Motores</h2>
                <div className="card-actions justify-center mt-5">
                  <button className="btn btn-primary text-white bg-app-orange border-none hover:bg-amber-600">Comprar</button>
                </div>
              </div>
            </div>
            <div className="card w-[24%] glass">
              <figure>
                <Image
                  src={'/img/body-parts.jpeg'}
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}

                  alt='Image'
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-white text-2xl text-center font-bold">Carroceria</h2>
                <div className="card-actions justify-center mt-5">
                  <button className="btn btn-primary text-white bg-app-orange border-none hover:bg-amber-600">Comprar</button>
                </div>
              </div>
            </div>
            <div className="card w-[24%] glass">
              <figure>
                <Image
                  src={'/img/acessories.jpeg'}
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}

                  alt='Image'
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-white text-2xl text-center font-bold">Acessórios</h2>
                <div className="card-actions justify-center mt-5">
                  <button className="btn btn-primary text-white bg-app-orange border-none hover:bg-amber-600">Comprar</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="min-h-screen bg-cover"
          style={{
            backgroundImage: `url('/img/most-sellers-background.jpg')`
          }}
        >
          <div className="w-full h-full bg-black/60 pt-10 pb-16">
            <Slide direction='up' delay={200} duration={1000}>
              <h1 className='text-app-orange text-center font-bold text-3xl'>Mais Vendidos</h1>
              <hr className='bg-app-orange h-2 rounded-3xl w-[50px] mx-auto mt-2 mb-8 border-none' />
            </Slide>
            <div className="flex justify-evenly">
              <div className="card w-[24%] glass">
                <figure>
                  <Image
                    src={'/img/acessories.jpeg'}
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}

                    alt='Image'
                  />
                </figure>
                <div className="card-body text-white">
                  <h2 className="card-title text-app-orange">Leitor de Musica</h2>
                  <p>1200 MT</p>
                  <div className="border border-app-orange rounded-md w-fit mx-auto flex text-white my-4 overflow-hidden">
                    <span className="p-2 px-4 font-medium bg-app-orange cursor-pointer">-</span>
                    <span className="border-x font-medium border-app-orange px-8 py-2">3</span>
                    <span className="p-2 px-4 font-medium bg-app-orange cursor-pointer">+</span>
                  </div>
                  <div className="rating mb-5">
                    <input type="radio" name="rating-1" className="mask mask-star bg-white text-white" />
                    <input type="radio" name="rating-1" className="mask mask-star bg-white text-white" />
                    <input type="radio" name="rating-1" className="mask mask-star bg-white text-white" />
                    <input type="radio" name="rating-1" className="mask mask-star bg-white text-white" checked />
                    <input type="radio" name="rating-1" className="mask mask-star bg-white text-white" />
                  </div>
                  <div className="card-actions justify-center w-full">
                    <button
                      onClick={() => addToCart(products[0])} 
                      className="btn btn-outline hover:bg-app-orange outline-white text-white w-full">
                        Adicionar a carrinha
                      </button>
                  </div>
                </div>
              </div>
              <div className="card w-[24%] glass">
                <figure>
                  <Image
                    src={'/img/acessories.jpeg'}
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}

                    alt='Image'
                  />
                </figure>
                <div className="card-body text-white">
                  <h2 className="card-title text-app-orange">Leitor de Musica</h2>
                  <p>1200 MT</p>
                  <div className="border border-app-orange rounded-md w-fit mx-auto flex text-white my-4 overflow-hidden">
                    <span className="p-2 px-4 font-medium bg-app-orange cursor-pointer">-</span>
                    <span className="border-x font-medium border-app-orange px-8 py-2">1</span>
                    <span className="p-2 px-4 font-medium bg-app-orange cursor-pointer">+</span>
                  </div>
                  <div className="rating mb-5">
                    <input type="radio" name="rating-1" className="mask mask-star bg-white text-white" />
                    <input type="radio" name="rating-1" className="mask mask-star bg-white text-white" />
                    <input type="radio" name="rating-1" className="mask mask-star bg-white text-white" />
                    <input type="radio" name="rating-1" className="mask mask-star bg-white text-white" checked />
                    <input type="radio" name="rating-1" className="mask mask-star bg-white text-white" />
                  </div>
                  <div className="card-actions justify-center w-full">
                    <button className="btn btn-outline hover:bg-app-orange outline-white text-white w-full">Adicionar a carrinha</button>
                  </div>
                </div>
              </div>
              <div className="card w-[24%] glass">
                <figure>
                  <Image
                    src={'/img/acessories.jpeg'}
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}

                    alt='Image'
                  />
                </figure>
                <div className="card-body text-white">
                  <h2 className="card-title text-app-orange">Leitor de Musica</h2>
                  <p>1200 MT</p>
                  <div className="border border-app-orange rounded-md w-fit mx-auto flex text-white my-4 overflow-hidden">
                    <span className="p-2 px-4 font-medium bg-app-orange cursor-pointer">-</span>
                    <span className="border-x font-medium border-app-orange px-8 py-2">1</span>
                    <span className="p-2 px-4 font-medium bg-app-orange cursor-pointer">+</span>
                  </div>
                  <div className="rating mb-5">
                    <input type="radio" name="rating-1" className="mask mask-star bg-white text-white" />
                    <input type="radio" name="rating-1" className="mask mask-star bg-white text-white" />
                    <input type="radio" name="rating-1" className="mask mask-star bg-white text-white" />
                    <input type="radio" name="rating-1" className="mask mask-star bg-white text-white" checked />
                    <input type="radio" name="rating-1" className="mask mask-star bg-white text-white" />
                  </div>
                  <div className="card-actions justify-center w-full">
                    <button className="btn btn-outline hover:bg-app-orange outline-white text-white w-full">Adicionar a carrinha</button>
                  </div>
                </div>
              </div>
              <div className="card w-[24%] glass">
                <figure>
                  <Image
                    src={'/img/acessories.jpeg'}
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}

                    alt='Image'
                  />
                </figure>
                <div className="card-body text-white">
                  <h2 className="card-title text-app-orange">Leitor de Musica</h2>
                  <p>1200 MT</p>
                  <div className="border border-app-orange rounded-md w-fit mx-auto flex text-white my-4 overflow-hidden">
                    <span className="p-2 px-4 font-medium bg-app-orange cursor-pointer">-</span>
                    <span className="border-x font-medium border-app-orange px-8 py-2">1</span>
                    <span className="p-2 px-4 font-medium bg-app-orange cursor-pointer">+</span>
                  </div>
                  <div className="rating mb-5">
                    <input type="radio" name="rating-1" className="mask mask-star bg-white text-white" />
                    <input type="radio" name="rating-1" className="mask mask-star bg-white text-white" />
                    <input type="radio" name="rating-1" className="mask mask-star bg-white text-white" />
                    <input type="radio" name="rating-1" className="mask mask-star bg-white text-white" checked />
                    <input type="radio" name="rating-1" className="mask mask-star bg-white text-white" />
                  </div>
                  <div className="card-actions justify-center w-full">
                    <button className="btn btn-outline hover:bg-app-orange outline-white text-white w-full">Adicionar a carrinha</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="h-screen bg-cover"
          style={{
            backgroundImage: `url('/img/premium-background.jpg')`
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-amber-950/70 to-black/70 p-1">
            <div className="w-1/2 mt-16 ml-10">
              <h1 className="text-white text-5xl font-semibold mb-3 pl-3">
                Junte-se ao nosso
              </h1>
              <h1 className="text-white text-5xl font-semibold border-b border-b-white pb-5 mb-5 pl-3">
                Clube Premium
              </h1>
              <p className="text-white text-lg font-medium pl-3 mb-10">
                Nossa assinatura premium lhe dará acesso exclusivo às nossas
                vendas antecipadas, recém-chegados e outras ofertas especiais.
              </p>
              <div>
                <Link
                  href={'/'}
                  className="text-white font-medium bg-app-orange ml-3 px-6 py-3 border-2 border-app-orange rounded-3xl hover:bg-transparent"
                >
                  Juntar-se agora
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gradient-to-r from-slate-800 to-black h-[calc(100vh-150px)] pt-7">
          <Slide direction='up' delay={200} duration={1000}>
            <h1 className='text-app-orange text-center font-bold text-3xl'>Marcas Que Nós Confiamos</h1>
            <hr className='bg-app-orange h-2 rounded-3xl w-[50px] mx-auto mt-2 mb-8 border-none' />
          </Slide>
          <div className="flex justify-center">
            <div className="border-y border-l border-white text-lg font-medium text-white w-[200px] h-[200px] flex justify-center items-center">
              MARCA 1
            </div>
            <div className="border-y border-l border-white text-lg font-medium text-white w-[200px] h-[200px] flex justify-center items-center">
              MARCA 2
            </div>
            <div className="border-y border-l border-white text-lg font-medium text-white w-[200px] h-[200px] flex justify-center items-center">
              MARCA 3
            </div>
            <div className="border-y border-l border-white text-lg font-medium text-white w-[200px] h-[200px] flex justify-center items-center">
              MARCA 4
            </div>
            <div className="border-y border-x border-white text-lg font-medium text-white w-[200px] h-[200px] flex justify-center items-center">
              MARCA 5
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
