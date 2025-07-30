import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const logoUrl =
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1753883414121_0.png';

  const navLinks = [
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Capacidades', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <motion.footer
      className="bg-brand-dark text-brand-light"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <a href="#home">
              <img
                src={logoUrl}
                alt="NTC Brasil Logo"
                className="h-12 mb-4 bg-white p-2 rounded-md"
              />
            </a>
            <p className="max-w-xs text-gray-400">
              Construindo o futuro com inovação, qualidade e compromisso.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg text-white mb-4">Navegação</h3>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-brand-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg text-white mb-4">Fale Conosco</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Padre Lebret, 801 G05 Bloco 03</li>
              <li>
                <a
                  href="mailto:ffbrunoff@yahoo.com.br"
                  className="hover:text-brand-primary transition-colors"
                >
                  ffbrunoff@yahoo.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} NTC Brasil. Todos os direitos
            reservados.
          </p>
          <a
            href="#home"
            className="bg-brand-primary p-3 rounded-full text-white hover:bg-brand-secondary transition-colors"
          >
            <ArrowUp className="h-5 w-5" />
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
