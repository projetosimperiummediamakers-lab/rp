import React from 'react';
import { Annoyed, Wind, BatteryLow, Frown, Pill, Scale } from 'lucide-react';

const problems = [
    { icon: "annoyed", text: "Barriga sempre inchada e dolorida." },
    { icon: "wind", text: "Gases que causam constrangimento." },
    { icon: "battery-low", text: "Falta de energia e cansaço constante." },
    { icon: "frown", text: "Mau humor e irritabilidade." },
    { icon: "pill", text: "Dependência de laxantes e remédios." },
    { icon: "scale", text: "Dificuldade para emagrecer." },
];

const iconComponents: { [key: string]: React.ElementType } = {
    annoyed: Annoyed,
    wind: Wind,
    "battery-low": BatteryLow,
    frown: Frown,
    pill: Pill,
    scale: Scale,
};

const ProblemCard: React.FC<{ icon: string; text: string }> = ({ icon, text }) => {
    const IconComponent = iconComponents[icon];
    return (
        <div className="bg-white p-6 rounded-xl shadow-md flex items-center space-x-4 transition-transform duration-300 hover:-translate-y-1 cursor-default">
            <IconComponent className="w-10 h-10 text-brand-purple flex-shrink-0" />
            <p className="text-left font-semibold text-brand-gray-dark">{text}</p>
        </div>
    );
};

const Problem: React.FC = () => {
    return (
        <section className="py-16 md:py-24 bg-brand-gray-light">
            <div className="container mx-auto px-4 max-w-5xl text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-brand-purple-dark mb-4">Você se identifica com isso?</h2>
                <p className="text-lg text-brand-gray mb-12 max-w-3xl mx-auto">Se a prisão de ventre dita as regras do seu dia, saiba que você não está sozinha. Milhares de mulheres sentem o mesmo.</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {problems.map((problem, index) => (
                        <ProblemCard key={index} icon={problem.icon} text={problem.text} />
                    ))}
                </div>
                <p className="text-xl font-bold text-brand-purple-dark mt-12">Chega de sofrer com um problema que tem solução natural.</p>
            </div>
        </section>
    );
};

export default Problem;