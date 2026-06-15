/**
 * Features Section - RealAR
 * Design: Background branco, 3 cards com bordas laranja
 * Fidelidade 100% ao protótipo
 */

import QRCODEIMG from "../img/mini/qrcode.png";
import RENDERIMG from "../img/mini/livre.png";
import LAYERSFEATURE from "../img/mini/layers.png";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Features Técnicas
        </h2>

        {/* Features Grid (vertical, cada feature com 70% da largura) */}
        <div className="flex flex-col items-center gap-6">
          {/* Feature 1 - QRMODE */}
          <div className="w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 border-2 border-orange-500 rounded-lg p-6 flex shadow-lg">
            <div className="flex-1 justify-between items-start mb-4 gap-4">
              <h3 className="text-lg pb-2 font-bold text-gray-900">QRMODE</h3>
              <p className="text-xs text-gray-700 leading-relaxed">
                Tecnologia de QR Code integrada para acesso rápido e seguro aos
                projetos em AR. Escaneie e visualize instantaneamente. Trave a
                maquete no mundo real. O escaneamento de marcadores físicos
                garante a ancoragem exata do modelo, permitindo que profissionais
                visualizem estruturas e protótipos exatamente onde serão
                construídos ou alocados.
              </p>
              <button className="mt-4 bg-white hover:bg-gray-200 text-black py-2 px-4 rounded-lg font-semibold text-xs transition-colors border-1 border-orange-500">
                Ver Demonstração
                <span className="ml-2 text-orange-500">→</span>
              </button>
            </div>
            <div className="flex-none w-20 sm:w-24 md:w-28 lg:w-32 text-3xl flex items-center justify-center">
              <img
                src={QRCODEIMG}
                alt="QR Code"
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
              />
            </div>
            
          </div>

          {/* Feature 2 - Renderização Livre */}
          <div className="w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 border-2 border-orange-500 rounded-lg p-6 flex shadow-lg">
            <div className="flex-none w-20 sm:w-24 md:w-28 lg:w-32 text-3xl flex items-center justify-center">
              <img
                src={RENDERIMG}
                alt="Renderização Livre"
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
              />
            </div>
            <div className="flex-1 justify-between items-start mb-4 gap-4">
              <h3 className="text-lg font-bold text-gray-900">
                Renderização Livre
              </h3>
              <p className="text-xs text-gray-700 leading-relaxed">
                Visualize seus projetos com a máxima qualidade e realismo em
                tempo real. Renderização otimizada para performance. Venda em
                qualquer lugar. Posicione modelos 3D em superfícies planas sem
                necessidade de marcadores para apresentações comerciais rápidas.
              </p>
              <button className="mt-4 bg-white hover:bg-gray-200 text-black py-2 px-4 rounded-lg font-semibold text-xs transition-colors border-1 border-orange-500">
                Ver Demonstração
                <span className="ml-2 text-orange-500">→</span>
              </button>
            </div>
          </div>

          {/* Feature 3 - Controle */}
          <div className="w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 border-2 border-orange-500 rounded-lg p-6 flex shadow-lg">
            <div className="flex-1 justify-between items-start mb-4 gap-4">
              <h3 className="text-lg pb-2 font-bold text-gray-900">
                Mecanismo de Controle Avançado
              </h3>
              <p className="text-xs text-gray-700 leading-relaxed">
                Gerencie múltiplas camadas e elevações do seu projeto com
                precisão. Controle granular de cada elemento. Navegue pelo
                projeto. Alterne entre estrutura, alvenaria e planta baixa com
                um toque, e use nossos controles de elevação seguros para isolar
                pavimentos.
              </p>
              <button className="mt-4 bg-white hover:bg-gray-200 text-black py-2 px-4 rounded-lg font-semibold text-xs transition-colors border-1 border-orange-500">
                Ver Demonstração
                <span className="ml-2 text-orange-500">→</span>
              </button>
            </div>
            <div className="flex-none w-20 sm:w-24 md:w-28 lg:w-32 text-3xl flex items-center justify-center">
              <img
                src={LAYERSFEATURE}
                alt="Controle de Camadas"
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
