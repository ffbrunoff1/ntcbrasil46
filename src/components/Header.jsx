import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logoUrl =
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1753883414121_0.png';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Nossas Capacidades', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
      initial={false}
      animate={{
        backgroundColor:
          isScrolled || isMenuOpen
            ? 'rgba(255, 255, 255, 0.95)'
            : 'rgba(240, 248, 255, 0)',
        boxShadow:
          isScrolled || isMenuOpen
            ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            : 'none',
      }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="flex-shrink-0">
          <img
            src={logoUrl}
            alt="NTC Brasil Logo"
            className="h-10 md:h-12 w-auto transition-transform duration-300 hover:scale-105"
          />
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-brand-dark font-medium hover:text-brand-primary transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-block bg-brand-primary text-white font-bold py-2 px-6 rounded-full hover:bg-brand-secondary transition-all duration-300 transform hover:scale-105 shadow-soft"
        >
          Fale Conosco
        </a>

        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Abrir menu">
            <Menu className="h-8 w-8 text-brand-dark" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden absolute top-0 left-0 w-full h-screen bg-white"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <div className="flex justify-end p-6">
              <button onClick={toggleMenu} aria-label="Fechar menu">
                <X className="h-8 w-8 text-brand-dark" />
              </button>
            </div>
            <motion.nav
              className="flex flex-col items-center justify-center h-full space-y-8 -mt-20"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
            >
              {navLinks.map(link => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={toggleMenu}
                  className="text-2xl font-semibold text-brand-dark hover:text-brand-primary"
                  variants={menuItemVariants}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={toggleMenu}
                className="mt-8 bg-brand-primary text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-brand-secondary transition-all duration-300 transform hover:scale-105 shadow-soft"
                variants={menuItemVariants}
              >
                Fale Conosco
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
