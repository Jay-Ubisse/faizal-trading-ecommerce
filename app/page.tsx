'use client'

import { Header } from "@/components/header";
import { Broadcast, SealCheck, Truck } from "@phosphor-icons/react";
import Link from "next/link";
import { Fade, Slide } from "react-awesome-reveal";
import Image from "next/image"

export default function Home() {
  return (
    <main>
      <section
        className="min-h-screen bg-cover"
        style={{
          backgroundImage: `url('/img/home-main-background.jpg')`
        }}
      >
        <div className="w-full h-full pb-20 bg-black/50">
          <Header />
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
                  className="text-white font-medium bg-app-orange px-6 py-3 border-2 border-app-orange rounded-3xl hover:bg-trasparent"
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
      <section className="bg-gradient-to-tr from-slate-900 to-black h-screen pt-5">
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
        <div className="w-full h-full bg-black/60 pt-10">
          <Slide direction='up' delay={200} duration={1000}>
            <h1 className='text-app-orange text-center font-bold text-3xl'>Compre por Categoria</h1>
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
    </main>
  )
}
