/**
 * Plans Section - RealAR
 * Design: Background branco, 2 planos, um destacado com bordas laranja
 * Fidelidade 100% ao protótipo
 */

export default function PlansSection() {
  return (
    <section id="planos" className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Planos e <span className="text-orange-500">Investimentos</span>
          </h2>
          <p className="text-gray-600 text-xs md:text-sm max-w-2xl mx-auto">
            Modelos sustentáveis e acessíveis para todos os tipos de projetos. Escolha o plano que melhor se adequa às suas necessidades.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Plan 1 - Autônomo */}
          <div className="border-2 border-gray-300 rounded-lg p-8 bg-white">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Plano Autônomo
            </h3>
            <p className="text-xs text-gray-600 mb-6">
              Ideal para profissionais e pequenas equipes
            </p>

            <ul className="space-y-2 mb-8 text-xs">
              <li className="flex items-center gap-2 text-gray-700">
                <span className="text-green-500">✓</span> Até 5 projetos simultâneos
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <span className="text-green-500">✓</span> Licença individual
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <span className="text-green-500">✓</span> Suporte por email
              </li>
              <li className="flex items-center gap-2 text-gray-500">
                <span className="text-red-500">✗</span> Sem Análise Avançada
              </li>
              <li className="flex items-center gap-2 text-gray-500">
                <span className="text-red-500">✗</span> Sem Dashboard
              </li>
              <li className="flex items-center gap-2 text-gray-500">
                <span className="text-red-500">✗</span> Apenas Modo Online
              </li>
            </ul>

            <button className="w-full bg-gray-700 hover:bg-gray-800 text-white py-2 rounded-lg font-semibold text-xs transition-colors">
              Começar com Plano
            </button>
          </div>

          {/* Plan 2 - Construtora (DESTACADO) */}
          <div className="border-2 border-orange-500 rounded-lg p-8 bg-white shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Plano Construtora
            </h3>
            <p className="text-xs text-gray-600 mb-6">
              Ideal para empresas e grandes equipes
            </p>

            <ul className="space-y-2 mb-8 text-xs">
              <li className="flex items-center gap-2 text-gray-700">
                <span className="text-orange-500">✓</span> Projetos ilimitados
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <span className="text-orange-500">✓</span> Licenças para múltiplos usuários
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <span className="text-orange-500">✓</span> Modo Offline para canteiro de obras
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <span className="text-orange-500">✓</span> Suporte prioritário
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <span className="text-orange-500">✓</span> Análise avançada
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <span className="text-orange-500">✓</span> Dashboards customizados
              </li>
            </ul>

            <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-lg font-semibold text-xs transition-colors">
              Solicitar Demonstração
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
