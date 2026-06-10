/**
 * Construction Section - RealAR
 * Design: 2 colunas, esquerda azul com texto, direita com imagem
 * Fidelidade 100% ao protótipo
 */

export default function ConstructionSection() {
  return (
    <section id="infraestrutura" className="py-0 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-0 items-stretch">
        {/* Left - Content */}
        <div className="bg-gradient-to-r from-blue-400 to-blue-300 p-8 md:p-12 flex flex-col justify-center min-h-[300px] md:min-h-[400px]">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
              O canteiro de obras não escala <span className="text-orange-500">o(s)?</span>
            </h2>

            <p className="text-white text-xs md:text-sm leading-relaxed">
              Descubra como a Realidade Aumentada pode transformar a forma como você gerencia projetos em canteiros de obras, melhorando a comunicação, reduzindo erros e acelerando o cronograma.
            </p>

            <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full font-semibold text-xs transition-colors w-fit">
              Saiba Mais
            </button>
          </div>
        </div>

        {/* Right - Image */}
        <div className="bg-gradient-to-br from-orange-100 to-orange-50 p-8 md:p-12 flex items-center justify-center min-h-[300px] md:min-h-[400px]">
          <div className="text-center">
            <div className="text-7xl md:text-8xl mb-3">🏗️</div>
            <p className="text-gray-600 font-medium text-xs md:text-sm">
              Canteiro de Obras
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
