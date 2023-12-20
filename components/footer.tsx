import Image from "next/image"

export const Footer = () => {
    return (
        <footer className="bg-black py-2">
            <section className="flex justify-evenly py-8">
                <div className="w-fit">
                    <Image
                        src={'/img/logo-white.png'}
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{ width: '200px', height: 'auto' }}

                        alt='Image'
                    />
                </div>
                <div className="w-fit">
                    <h3 className="text-white text-sm font-semibold mb-5">
                        Loja
                    </h3>
                    <ul className="text-slate-400 text-xs flex flex-col gap-2">
                        <li>Pneus e Jantes</li>
                        <li>Motores</li>
                        <li>Carroceria</li>
                        <li>Acessórios</li>
                    </ul>
                </div>
                <div className="w-fit">
                    <h3 className="text-white text-sm font-semibold mb-5">
                        A Empresa
                    </h3>
                    <ul className="text-slate-400 text-xs  flex flex-col gap-2">
                        <li>Sobre Nós</li>
                        <li>Área Premium</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className="w-fit">
                    <h3 className="text-white text-sm font-semibold mb-5">
                        Contacte-nos
                    </h3>
                    <ul className="text-slate-400 text-xs  flex flex-col gap-2">
                        <li>vendas@faizaltrading.co.mz</li>
                        <li>Av. Guerra Popular, 345</li>
                        <li>Maputo, Moçambique</li>
                        <li>Tel: +258 84 883 9501</li>
                    </ul>
                </div>
                <div className="w-fit">
                    <h3 className="text-white text-sm font-semibold mb-5">
                        Siga-nos
                    </h3>
                    <ul className="text-slate-400 text-xs  flex flex-col gap-2">
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Youtube</li>
                        <li>Twitter</li>
                    </ul>
                </div>
            </section>
            <section className="py-5 m-5 text-xs border-y border-slate-400 text-slate-400 flex justify-evenly">
                <p>Termos & Condições</p>
                <p>Política de Privacidade</p>
                <p>Política de Compra</p>
                <p>Política de Reembolso</p>
            </section>
            <section>
                <h2 className="text-white font-semibold text-center">Métodos de Pagamento</h2>
                <div className="flex justify-center gap-5 mt-6">
                    <Image
                        src={'/img/visa.svg'}
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{ width: '100px', height: 'auto' }}

                        alt='Image'
                    />
                    <Image
                        src={'/img/mastercard.svg'}
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{ width: '100px', height: 'auto' }}

                        alt='Image'
                    />
                    <Image
                        src={'/img/m-pesa.png'}
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{ width: '100px', height: 'auto' }}

                        alt='Image'
                    />
                    <Image
                        src={'/img/e-mola.png'}
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{ width: '100px', height: 'auto' }}

                        alt='Image'
                    />
                </div>
            </section>
            <section className="m-5 border-t border-slate-400 text-white text-center py-4 text-sm">
                &copy; 2023 Faizal Trading. Todos os direitos reservados
            </section>
        </footer>
    );
}