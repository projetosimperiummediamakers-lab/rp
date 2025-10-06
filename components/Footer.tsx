
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-brand-gray-dark text-white py-12">
            <div className="container mx-auto px-4 text-center text-sm text-gray-400 max-w-5xl">
                <h2 className="text-lg font-bold text-white mb-4">Ameixa App</h2>
                <p className="mb-6">Todos os direitos reservados &copy; 2025.</p>
                <p className="mb-8">
                    <a href="#" className="hover:text-white underline">Política de Privacidade</a> | <a href="#" className="hover:text-white underline">Termos de Uso</a>
                </p>
                <p className="text-xs">Este produto não substitui o parecer médico profissional. Sempre consulte um médico para tratar de assuntos relativos à saúde. Os resultados podem variar de pessoa para pessoa.</p>
            </div>
        </footer>
    );
};

export default Footer;
