import { WhatsappButton } from "@/components/WhatsappButton";
import { Header } from "@/components/header";
import Link from "next/link";


export default function StoreLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-black">
            <div className="bg-gradient-to-tr from-black to-amber-900/70 min-h-screen">
                <Header cartNumber={0} />
                <div className="flex justify-between w-[95%] mx-auto mt-10">
                    <aside className="text-white w-[20%]">
                        <h1 className="text-2xl font-semibold border-b border-slate-500 p-1 pb-4">Procurar por</h1>
                        <ul className="text-sm flex flex-col mt-5 gap-2">
                            <li className="text-app-orange border-b border-app-orange pb-1 w-fit">Todos Produtos</li>
                            <li>Mais Vendidos</li>
                            <li>Acessórios</li>
                            <li>Motores</li>
                            <li>Peças da carroçaria de veículos</li>
                            <li>Pneus & Jantes</li>
                            <li>Venda por grosso</li>
                        </ul>
                    </aside>
                    <main className="w-[74%]">
                        {children}
                    </main>
                </div>
                <WhatsappButton />
            </div>
        </div>
    );
}