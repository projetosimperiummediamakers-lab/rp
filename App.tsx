import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Testimonials from './components/Testimonials';
import Offer from './components/Offer';
import Guarantee from './components/Guarantee';
import Faq from './components/Faq';
import Footer from './components/Footer';

declare global {
    interface Window {
        lucide: {
            createIcons: () => void;
        };
    }
}

const App: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        if(window.lucide) {
            window.lucide.createIcons();
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if(window.lucide) {
            window.lucide.createIcons();
        }
    });

    return (
        <div className="bg-gray-50">
            <Header isScrolled={isScrolled} />
            <main className="pt-20">
                <Hero />
                <Problem />
                <Solution />
                <Testimonials />
                <Offer />
                <Guarantee />
                <Faq />
            </main>
            <Footer />
        </div>
    );
};

export default App;