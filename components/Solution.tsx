import React from 'react';

const Solution: React.FC = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <span className="font-semibold text-brand-purple">A SOLUÇÃO NATURAL E CIENTÍFICA</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-purple-dark my-4">O método que regula seu intestino em dias</h2>
                        <p className="text-brand-gray mb-4">Depois de anos ajudando mulheres em meu consultório, compilei a receita mais eficaz contra a constipação em um aplicativo simples e fácil de usar.</p>
                        <p className="text-brand-gray mb-6">O <strong>Ameixa App</strong> te guia em um passo a passo diário para preparar uma vitamina poderosa que combina ingredientes naturais para reativar seu intestino de forma saudável e definitiva. Sem química, sem efeitos colaterais.</p>
                        <div className="bg-brand-purple-extralight border-l-4 border-brand-purple p-4 rounded-r-lg">
                            <p className="font-semibold text-brand-purple-dark">"Não é sobre comer mais fibras, é sobre combinar os ingredientes certos na hora certa."</p>
                            <p className="text-sm mt-2 text-brand-gray">- Dra. Ana Costa, Nutricionista Funcional</p>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 text-center">
                        <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Dra. Ana Costa, Nutricionista" className="w-48 h-48 rounded-full mx-auto mb-4 shadow-xl object-cover"></img>
                        <h3 className="text-xl font-bold text-brand-purple-dark">Dra. Ana Costa</h3>
                        <p className="text-brand-gray">Nutricionista Funcional</p>
                        <p className="text-sm text-gray-500">CRN-SP 12345</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solution;
