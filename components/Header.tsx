
import React from 'react';

interface HeaderProps {
    isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
    const headerClasses = `bg-white/80 backdrop-blur-lg shadow-sm py-3 fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/80'}`;

    return (
        <header id="header" className={headerClasses}>
            <div className="container mx-auto px-4 flex justify-between items-center max-w-6xl">
                <h1 className="text-2xl font-bold text-brand-purple">Ameixa App</h1>
                <a href="https://payment.ticto.app/O0439CCBC?src=yt-rmkt" className="cta-button bg-brand-yellow hover:bg-brand-yellow-dark text-brand-purple-dark font-bold py-3 px-6 rounded-lg text-sm hidden sm:inline-block">
                    QUERO MEU DESCONTO
                </a>
            </div>
        </header>
    );
};

export default Header;