/**
 * Corporate Section - RealAR
 * Design: Background escuro com imagem, logos de parceiros
 * Fidelidade 100% ao protótipo
 */

import BACK from "../img/back/bg2_cut.jpg";
import Logo from "../img/logos/logo_small.png";

import UnityLogo from "../img/logos/unity.png";
import ARCoreLogo from "../img/logos/ar.png";
import RealARLogo from "../img/logos/realar.png";
import AndroidLogo from "../img/logos/android.png";

export default function CorporateSection() {
  return (
    <section className="pt-0 pb-12 md:pb-12 bg-gradient-to-b from-gray-800 to-gray-900 text-white" id="tecnologia">
      <div className="mb-0 w-full h-auto relative">
        {/* TOP IMAGEM */}
        <img
          src={BACK}
          alt="Imagem de Fundo"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="mt-12 max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-1 mb-4">
            <img src={Logo} alt="Logo" className="h-8" />
          </div>

          <h2 className="text-2xl md:text-3xl font-normal mb-4">
            Arquitetura feita para o nível{" "}
            <span className="text-orange-500 font-bold">corporativo.</span>
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto text-xs md:text-sm leading-relaxed">
            Nós acreditamos que a distribuição de projetos é crucial para
            empresas de todos os tamanhos. A plataforma RealAR foi construída
            com escalabilidade, segurança e performance em mente. Confiada por
            empresas líderes em todo o mundo.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Partner 1 */}
          <div className="bg-white rounded-lg p-6 flex items-center justify-center">
            <div className="text-center">
                <div className="text-4xl mb-2">
                <img src={UnityLogo} alt="Unity" className="w-20 sm:w-24 md:w-28 h-auto" />
              </div>
            </div>
          </div>

          {/* Partner 2 */}
          <div className="bg-white rounded-lg p-6 flex items-center justify-center">
            <div className="text-center">
                <div className="text-4xl mb-2">
                <img
                  src={ARCoreLogo}
                  alt="ARCore"
                  className="w-20 sm:w-24 md:w-28 h-auto"
                />
              </div>
            </div>
          </div>

          {/* Partner 3 */}
          <div className="bg-white rounded-lg p-6 flex items-center justify-center">
            <div className="text-center">
                <div className="text-4xl mb-2">
                <img
                  src={RealARLogo}
                  alt="RealAR"
                  className="w-20 sm:w-24 md:w-28 h-auto"
                />
              </div>
            </div>
          </div>

          {/* Partner 4 */}
          <div className="bg-white rounded-lg p-6 flex items-center justify-center">
            <div className="text-center">
                <div className="text-4xl mb-2">
                <img
                  src={AndroidLogo}
                  alt="Android"
                  className="w-20 sm:w-24 md:w-28 h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
