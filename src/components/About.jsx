import React from 'react';
import { motion } from 'framer-motion';
import { Building, Target, ShieldCheck } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, when: 'beforeChildren' },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const stats = [
    {
      icon: <Building className="h-10 w-10 text-brand-primary" />,
      value: '10+',
      label: 'Anos de Experiência',
      description:
        'Uma década de excelência e solidez no mercado da construção.',
    },
    {
      icon: <Target className="h-10 w-10 text-brand-primary" />,
      value: '50+',
      label: 'Projetos Entregues',
      description:
        'Diversos projetos concluídos com sucesso, superando expectativas.',
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-brand-primary" />,
      value: '100%',
      label: 'Satisfação Garantida',
      description:
        'Compromisso total com a qualidade e a satisfação de nossos clientes.',
    },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              Sua Visão, <span className="gradient-text">Nossa Construção</span>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Na NTC Brasil, acreditamos que cada projeto é a materialização de
              um sonho. Com uma equipe de especialistas dedicados e um
              compromisso inabalável com a qualidade, transformamos ideias em
              estruturas sólidas e duradouras. Nossa missão é ir além da
              construção civil, criando espaços que inspiram e melhoram a vida
              das pessoas.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Utilizamos as mais modernas tecnologias e práticas sustentáveis
              para garantir que cada obra não apenas atenda, mas supere as
              expectativas, com eficiência, segurança e respeito ao meio
              ambiente.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-brand-light p-6 rounded-xl shadow-soft transition-transform duration-300 hover:-translate-y-2"
                variants={itemVariants}
              >
                <div className="flex items-center gap-4 mb-3">
                  {stat.icon}
                  <span className="text-4xl font-bold text-brand-secondary">
                    {stat.value}
                  </span>
                </div>
                <h3 className="font-semibold text-lg text-brand-dark mb-1">
                  {stat.label}
                </h3>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
