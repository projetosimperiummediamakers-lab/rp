import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-center md:text-left">
                        <span className="inline-block bg-brand-purple-extralight text-brand-purple font-semibold px-4 py-1 rounded-full text-sm mb-4">
                            Para mulheres com mais de 40 anos
                        </span>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-brand-purple-dark mb-4 leading-tight">
                            A rotina matinal que liberta seu intestino da prisão de ventre.
                        </h1>
                        <p className="text-lg text-brand-gray mb-8">
                            Com uma receita natural, simples e deliciosa, você vai ao banheiro todos os dias, sem esforço e sem depender de laxantes.
                        </p>
                        <a href="https://payment.ticto.app/O0439CCBC?src=yt-rmkt" className="cta-button w-full md:w-auto inline-block bg-brand-yellow hover:bg-brand-yellow-dark text-brand-purple-dark text-xl font-bold py-5 px-12 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                            QUERO MEU INTESTINO REGULADO
                        </a>
                        <p className="text-sm text-gray-500 mt-4">Compra segura e acesso imediato.</p>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1746559845100-0f5a36bfdbe6?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Mulher saudável e feliz com mais de 40 anos" className="rounded-2xl shadow-2xl mx-auto object-cover w-full h-full"></img>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;