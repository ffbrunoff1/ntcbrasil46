import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader, Check, AlertTriangle, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(null);

    try {
      const response = await fetch('/.netlify/functions/send-contact-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          userEmail: 'ffbrunoff@yahoo.com.br',
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || 'Ocorreu uma falha ao enviar a mensagem.'
        );
      }

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setSubmitError(error.message);
      setTimeout(() => setSubmitError(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Vamos <span className="gradient-text">Construir Juntos</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Tem uma ideia ou projeto em mente? Entre em contato conosco. Nossa
            equipe está pronta para transformar sua visão em realidade.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-brand-dark mb-6">
              Informações de Contato
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-brand-light p-3 rounded-full">
                  <Mail className="h-6 w-6 text-brand-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">E-mail</h4>
                  <a
                    href="mailto:ffbrunoff@yahoo.com.br"
                    className="text-gray-600 hover:text-brand-primary"
                  >
                    ffbrunoff@yahoo.com.br
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-brand-light p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-brand-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Endereço</h4>
                  <p className="text-gray-600">
                    Padre Lebret, 801 G05 Bloco 03
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="lg:col-span-3 space-y-6"
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nome Completo
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-brand-light rounded-lg border-transparent focus:ring-2 focus:ring-brand-primary focus:border-transparent transition"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Seu E-mail
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-brand-light rounded-lg border-transparent focus:ring-2 focus:ring-brand-primary focus:border-transparent transition"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Sua Mensagem
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-brand-light rounded-lg border-transparent focus:ring-2 focus:ring-brand-primary focus:border-transparent transition"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-3 bg-brand-primary text-white font-bold py-3 px-8 rounded-full hover:bg-brand-secondary transition-all duration-300 transform hover:scale-105 shadow-soft disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader className="animate-spin h-5 w-5" /> Enviando...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" /> Enviar Mensagem
                  </>
                )}
              </button>
            </div>
            {submitSuccess && (
              <div className="flex items-center gap-2 text-green-600 bg-green-100 p-3 rounded-lg">
                <Check /> Mensagem enviada com sucesso!
              </div>
            )}
            {submitError && (
              <div className="flex items-center gap-2 text-red-600 bg-red-100 p-3 rounded-lg">
                <AlertTriangle /> Erro: {submitError}
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
