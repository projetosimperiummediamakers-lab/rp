import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Guarantee: React.FC = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="flex flex-col md:flex-row items-center gap-8 bg-brand-gray-light p-8 rounded-2xl border-2 border-dashed border-brand-purple-light">
                    <div className="flex-shrink-0 w-36 h-36 bg-brand-purple-extralight rounded-full flex items-center justify-center shadow-inner">
                        <ShieldCheck className="w-24 h-24 text-brand-purple" />
                    </div>
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-extrabold text-brand-purple-dark mb-2">Seu Risco é ZERO!</h2>
                        <p className="text-brand-gray">Você tem 7 dias para testar o Ameixa App. Se por qualquer motivo você não sentir seu intestino mais regulado e sua barriga mais leve, basta enviar um e-mail e nós devolveremos 100% do seu dinheiro. Sem perguntas, sem burocracia.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Guarantee;