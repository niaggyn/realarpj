/**
 * Early Access Section - RealAR
 * Design: Background escuro, formulário com inputs cinzas
 * Fidelidade 100% ao protótipo
 */

import { useState } from "react";

export default function EarlyAccessSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section id="contato" className="py-12 md:py-16 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left - Content */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold leading-tight">
              Pronto para <span className="text-orange-500">tecnologia</span> de ponta?
            </h2>

            <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
              Participe do Early Access e realize uma consultoria gratuita de implementação da Realidade Aumentada em seu negócio. Somente empresas selecionadas.
            </p>

            <ul className="space-y-2 text-gray-300 text-xs">
              <li className="flex items-center gap-2">
                <span className="text-orange-500">✓</span>
                Consultoria gratuita
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-500">✓</span>
                Suporte dedicado
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-500">✓</span>
                Acesso antecipado
              </li>
            </ul>
          </div>

          {/* Right - Form */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-700/50 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 text-xs focus:outline-none focus:border-orange-500"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Seu email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-700/50 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 text-xs focus:outline-none focus:border-orange-500"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  name="company"
                  placeholder="Sua empresa"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-gray-700/50 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 text-xs focus:outline-none focus:border-orange-500"
                  required
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Conte-nos sobre seu projeto"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full bg-gray-700/50 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 text-xs focus:outline-none focus:border-orange-500 resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 rounded text-xs transition-colors"
              >
                Solicitar Acesso
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
