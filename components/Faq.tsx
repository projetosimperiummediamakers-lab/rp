import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const faqData = [
    {
        question: "Em quanto tempo vejo os resultados?",
        answer: "A maioria das nossas alunas relata uma melhora significativa nos primeiros 3 a 5 dias de uso contínuo da receita do aplicativo."
    },
    {
        question: "Preciso comprar ingredientes caros ou difíceis de achar?",
        answer: "Não! Todos os ingredientes da receita são simples, acessíveis e fáceis de encontrar em qualquer supermercado ou feira."
    },
    {
        question: "O acesso é mensal ou pagamento único?",
        answer: "O pagamento é único! Você paga uma vez e tem acesso vitalício (para sempre) ao aplicativo e a todas as futuras atualizações."
    },
    {
        question: "Como vou receber o acesso?",
        answer: "Imediatamente após a confirmação da sua compra, você receberá um e-mail com todas as instruções e seu link de acesso exclusivo ao Ameixa App."
    }
];

interface FaqItemProps {
    item: {
        question: string;
        answer: string;
    };
    isOpen: boolean;
    onClick: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ item, isOpen, onClick }) => {
    const answerRef = React.useRef<HTMLDivElement>(null);

    return (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <button
                className={`w-full text-left p-5 font-semibold text-lg flex justify-between items-center text-brand-purple-dark transition-colors duration-300 ${isOpen ? 'bg-brand-purple-extralight' : 'hover:bg-gray-50'}`}
                onClick={onClick}
                aria-expanded={isOpen}
            >
                <span>{item.question}</span>
                <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>
            <div
                ref={answerRef}
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{ maxHeight: isOpen ? `${answerRef.current?.scrollHeight}px` : '0' }}
            >
                <p className="p-5 pt-0 text-brand-gray">{item.answer}</p>
            </div>
        </div>
    );
};


const Faq: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 md:py-24 bg-brand-gray-light">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-extrabold text-brand-purple-dark text-center mb-12">Perguntas Frequentes</h2>
                <div className="space-y-4">
                    {faqData.map((faq, index) => (
                        <FaqItem
                            key={index}
                            item={faq}
                            isOpen={openIndex === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;