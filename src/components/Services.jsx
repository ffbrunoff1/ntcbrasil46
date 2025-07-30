import React from 'react';
import { motion } from 'framer-motion';
import {
  ClipboardList,
  HardHat,
  CheckCircle,
  DraftingCompass,
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: (
        <DraftingCompass className="h-12 w-12 mx-auto mb-4 text-brand-primary" />
      ),
      title: 'Planejamento e Projeto',
      description:
        'Desenvolvemos projetos detalhados e estratégicos, otimizando recursos e garantindo a viabilidade e sucesso da sua obra desde o início.',
    },
    {
      icon: (
        <ClipboardList className="h-12 w-12 mx-auto mb-4 text-brand-primary" />
      ),
      title: 'Gestão de Obras',
      description:
        'Coordenamos cada etapa do processo construtivo com rigor e transparência, assegurando o cumprimento de prazos e orçamentos.',
    },
    {
      icon: <HardHat className="h-12 w-12 mx-auto mb-4 text-brand-primary" />,
      title: 'Construção e Execução',
      description:
        'Nossa equipe qualificada executa cada fase da construção com maestria técnica, utilizando materiais de alta qualidade e as melhores práticas do setor.',
    },
    {
      icon: (
        <CheckCircle className="h-12 w-12 mx-auto mb-4 text-brand-primary" />
      ),
      title: 'Acabamento e Entrega',
      description:
        'Cuidamos dos mínimos detalhes na fase de acabamento para entregar um resultado impecável que reflete a excelência e o padrão NTC Brasil.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  return (
    <section id="services" className="section-padding bg-brand-light">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Nossas <span className="gradient-text">Capacidades</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
            Oferecemos um serviço completo e integrado que abrange todas as
            fases do seu projeto de construção, garantindo qualidade e
            eficiência do início ao fim.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-soft flex flex-col text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
              variants={cardVariants}
            >
              {service.icon}
              <h3 className="text-xl font-bold text-brand-dark mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 flex-grow">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
