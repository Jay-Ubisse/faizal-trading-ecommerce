'use client'

import { cart } from "@/data/products-list";
import { useState } from "react";
import Image from "next/image"
import { products } from "@/data/products-list";

const Store = () => {
    const [itemsNumber, setItemsNumber] = useState(0);

    function addToCart(item: object) {
      cart.push(item);
      setItemsNumber(cart.length);
    }

    return (
        <main>
            <h1 className="text-white font-semibold text-4xl">Todos os produtos</h1>
            <div className="grid grid-cols-3 gap-3 mt-10">
                <div className="card glass">
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
                <div className="card glass">
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
              <div className="card glass">
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
              <div className="card glass">
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
              <div className="card glass">
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
              <div className="card glass">
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
              <div className="card glass">
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
            </div>
        </main>
    );
}

export default Store;