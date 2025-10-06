import React from 'react';
import { BookOpenCheck, GlassWater, ShoppingCart, Lock, ShieldCheck, Smartphone } from 'lucide-react';

const bonuses = [
    { icon: "book-open-check", title: "Bônus #1: Guia de Alimentos Anti-Inflamatórios", description: "Uma lista completa para desinflamar seu corpo e potencializar os resultados. (Valor R$ 97)" },
    { icon: "glass-water", title: "Bônus #2: Protocolo de Hidratação Inteligente", description: "Aprenda a beber água da forma correta para um intestino perfeito. (Valor R$ 97)" },
    { icon: "shopping-cart", title: "Bônus #3: Lista de Compras Inteligente", description: "Economize tempo e dinheiro com a lista exata do que comprar. (Valor R$ 97)" },
]

const Offer: React.FC = () => {
    return (
        <section id="oferta" className="py-16 md:py-24 bg-brand-purple-dark text-white">
            <div className="container mx-auto px-4 max-w-4xl text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-shadow-lg">Tenha Acesso Imediato à Sua Liberdade Intestinal</h2>
                <p className="text-lg text-purple-200 mb-10">O preço normal do Acesso Vitalício ao Ameixa App e todos os bônus é de R$197.</p>

                <div className="bg-white text-brand-gray-dark p-8 md:p-12 rounded-2xl shadow-2xl">
                    <p className="text-xl font-semibold">Mas para você que chegou aqui, preparamos uma oferta especial:</p>
                    <div className="my-6">
                        <span className="text-2xl text-gray-500 line-through">De R$ 197,00</span>
                        <p className="text-lg">por apenas 12x de</p>
                        <p className="text-7xl font-extrabold text-brand-purple my-1">R$ 9,74</p>
                        <p className="font-semibold">ou R$ 97,00 à vista</p>
                    </div>
                    <p className="text-sm text-gray-500 mb-8">(Menos de R$0,33 por dia para ter seu intestino funcionando como um relógio)</p>

                    <a href="https://payment.ticto.app/O0439CCBC?src=yt-rmkt" className="cta-button w-full inline-block bg-brand-yellow hover:bg-brand-yellow-dark text-brand-purple-dark text-2xl font-bold py-5 px-12 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                        SIM, QUERO APROVEITAR A OFERTA!
                    </a>
                    
                    <div className="flex flex-wrap justify-center items-center gap-4 mt-6 text-sm">
                        <div className="flex items-center gap-2"><Lock className="w-4 h-4 text-green-600" /><span>Pagamento Seguro</span></div>
                        <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-green-600" /><span>Garantia de 7 Dias</span></div>
                        <div className="flex items-center gap-2"><Smartphone className="w-4 h-4 text-green-600" /><span>Acesso Vitalício</span></div>
                    </div>
                </div>

                <div className="mt-16 text-left">
                    <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">Ao garantir seu acesso hoje, você também recebe 3 bônus exclusivos (no valor de R$291):</h3>
                    <div className="space-y-4 max-w-2xl mx-auto">
                        <div className="bg-brand-purple/50 p-5 rounded-lg flex items-start gap-4 border border-brand-purple/70">
                            <div className="bg-brand-yellow text-brand-purple-dark font-bold rounded-md p-3 flex-shrink-0"><BookOpenCheck /></div>
                            <div>
                                <h4 className="font-bold">{bonuses[0].title}</h4>
                                <p className="text-sm text-purple-200">{bonuses[0].description}</p>
                            </div>
                        </div>
                        <div className="bg-brand-purple/50 p-5 rounded-lg flex items-start gap-4 border border-brand-purple/70">
                            <div className="bg-brand-yellow text-brand-purple-dark font-bold rounded-md p-3 flex-shrink-0"><GlassWater /></div>
                            <div>
                                <h4 className="font-bold">{bonuses[1].title}</h4>
                                <p className="text-sm text-purple-200">{bonuses[1].description}</p>
                            </div>
                        </div>
                        <div className="bg-brand-purple/50 p-5 rounded-lg flex items-start gap-4 border border-brand-purple/70">
                            <div className="bg-brand-yellow text-brand-purple-dark font-bold rounded-md p-3 flex-shrink-0"><ShoppingCart /></div>
                            <div>
                                <h4 className="font-bold">{bonuses[2].title}</h4>
                                <p className="text-sm text-purple-200">{bonuses[2].description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Offer;