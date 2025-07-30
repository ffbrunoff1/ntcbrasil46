import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section
      id="home"
      className="section-padding min-h-screen flex items-center bg-brand-light"
    >
      <div className="container mx-auto">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center md:text-left">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark leading-tight mb-4"
              variants={itemVariants}
            >
              Construindo o futuro com{' '}
              <span className="gradient-text">inovação e qualidade</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-600 mb-8"
              variants={itemVariants}
            >
              NTC Brasil transforma sua visão em realidade com projetos de
              construção de alta performance, do planejamento à entrega.
            </motion.p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 bg-brand-primary text-white font-bold py-3 px-8 rounded-full hover:bg-brand-secondary transition-all duration-300 transform hover:scale-105 shadow-soft text-lg"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Solicite um Orçamento
              <ArrowRight className="h-5 w-5" />
            </motion.a>
          </div>
          <motion.div
            className="relative h-80 md:h-full"
            variants={itemVariants}
          >
            <motion.div
              className="absolute top-0 left-1/4 w-3/4 h-3/4 bg-brand-primary rounded-3xl opacity-30"
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 2, 0],
              }}
              transition={{
                duration: 10,
                ease: 'easeInOut',
                repeat: Infinity,
              }}
            />
            <motion.div
              className="absolute bottom-0 right-1/4 w-2/3 h-2/3 bg-brand-secondary rounded-3xl opacity-20"
              animate={{
                scale: [1, 0.95, 1],
                rotate: [0, -2, 0],
              }}
              transition={{
                duration: 12,
                ease: 'easeInOut',
                repeat: Infinity,
                delay: 1,
              }}
            />
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, type: 'spring', stiffness: 120 }}
            >
              <img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/construction-concept.svg"
                alt="Ilustração de construção moderna"
                className="w-full h-auto max-w-md animate-float"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
