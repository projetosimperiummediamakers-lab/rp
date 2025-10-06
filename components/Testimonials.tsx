import React from 'react';

const testimonials = [
    {
        photo: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&dpr=1",
        name: "Marisa S.",
        details: "52 anos, São Paulo/SP",
        quote: "Eu não acreditava que algo tão simples pudesse funcionar. Em 3 dias meu intestino já era outro. Acordar e ir ao banheiro sem sofrimento mudou meu humor e minha vida. Obrigada!"
    },
    {
        photo: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&dpr=1",
        name: "Carla R.",
        details: "47 anos, Belo Horizonte/MG",
        quote: "Minha barriga vivia inchada, parecia grávida. Com a receita do app, desinchei e me sinto muito mais leve e disposta. Até as roupas estão vestindo melhor. Super recomendo!"
    },
    {
        photo: "https://images.pexels.com/photos/2050994/pexels-photo-2050994.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&dpr=1",
        name: "Lúcia F.",
        details: "61 anos, Rio de Janeiro/RJ",
        quote: "Eu era escrava dos laxantes. Tinha medo de sair de casa. O Ameixa App me devolveu a liberdade e a saúde do meu intestino. É um alívio que não tem preço."
    }
];

const TestimonialCard: React.FC<typeof testimonials[0]> = ({ photo, name, details, quote }) => (
    <div className="bg-white p-8 rounded-xl shadow-lg text-left h-full flex flex-col relative overflow-hidden">
        <i data-lucide="quote" className="w-16 h-16 text-brand-purple-light/30 absolute -top-4 -right-4"></i>
        <div className="flex items-center mb-4 z-10">
            <img src={photo} className="w-12 h-12 rounded-full mr-4 object-cover" alt={`Foto de ${name}`}></img>
            <div>
                <p className="font-bold text-brand-purple-dark">{name}</p>
                <p className="text-sm text-gray-500">{details}</p>
            </div>
        </div>
        <p className="text-brand-gray flex-grow z-10">{quote}</p>
    </div>
);


const Testimonials: React.FC = () => {
    return (
        <section className="py-16 md:py-24 bg-brand-gray-light">
            <div className="container mx-auto px-4 max-w-6xl text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-brand-purple-dark mb-12">Elas se livraram da prisão de ventre. Veja o que dizem:</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;