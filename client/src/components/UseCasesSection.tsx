/**
 * Use Cases Section - RealAR
 * Design: Background azul claro, 2 colunas, tabs e cards laranja
 * Fidelidade 100% ao protótipo
 */

import { useState } from "react";

import Back from "../img/back/sec2_back.jpg";

import D3D from "../img/mini/3D.png";
import Immersion from "../img/mini/immersion.png";
import Cloud from "../img/mini/cloud.png";
import Talk from "../img/mini/talk.png";
import PlantCAD from "../img/mini/plant.png";
import Wall from "../img/mini/wall.png";

export default function UseCasesSection() {
  const [activeTab, setActiveTab] = useState("validacao");

  return (
    <section
      id="problema"
      className="py-12 md:py-16 bg-gradient-to-b from-blue-300 to-blue-200 object-cover pt-5"
      style={{
        backgroundImage: `url('${Back}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
      }}
    >
      <div className="max-w-7xl mx-auto px-0 mt-0 md:mt-0">
        <h1 className="text-right text-lg font-bold mb-2 text-white pt-0">
          O canteiro de obras não aceita "Ctrl+Z"
        </h1>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16 items-start">
          {/* Left - Tabs (75%) */}
          <div className="flex flex-col gap-12 md:gap-16 md:col-span-3">
              <div className="flex gap-6 flex-col md:flex-row mt-12">
                <div className="flex gap-3 flex-col w-full sm:w-72">
                <h3 className="text-xl font-bold text-gray-800 mb-0 text-center">
                  PROBLEMAS ATUAIS
                </h3>

                {/* Tab 1 */}
                <div className="bg-white rounded-[1vw] p-3 border border-gray-200 w-full h-16 shadow-xl/15 flex items-center justify-center">
                  <div className="flex  items-center justify-center gap-3 w-4/5">
                    <div className="text-xs flex flex-col justify-center gap-1 w-4/5">
                      <p className="font-normal text-gray-900 align-middle">
                        Plantas 2D abstratas e difícil visualização.
                      </p>
                    </div>
                    <div className="text-2xl align-middle">
                      <img
                        src={PlantCAD}
                        alt="PlantCAD"
                        className="w-12 h-10"
                      />
                    </div>
                  </div>
                </div>

                {/* Tab 2 */}
                <div className="bg-white rounded-[1vw] p-3 border border-gray-200 w-full h-16 shadow-xl/15 flex items-center justify-center">
                  <div className="flex  items-center justify-center gap-3 w-4/5">
                    <div className="text-xs flex flex-col justify-center gap-1 w-4/5">
                      <p className="font-normal text-gray-900 align-middle">
                        Gaps de comunicação entre projeto e execução.
                      </p>
                    </div>
                    <div className="text-2xl align-middle">
                      <img
                        src={Talk}
                        alt="Talk"
                        className="w-12 h-10 align-right"
                      />
                    </div>
                  </div>
                </div>

                {/* Tab 3 */}
                <div className="bg-white rounded-[1vw] p-3 border border-gray-200 w-full h-16 shadow-xl/15 flex items-center justify-center">
                  <div className="flex  items-center justify-center gap-3 w-4/5">
                    <div className="text-xs flex flex-col justify-center gap-1 w-4/5">
                      <p className="text-pretty font-normal text-gray-900 align-middle">
                        Apps pesados e modelos BIM inacessíveis em campo.
                      </p>
                    </div>
                    <div className="text-2xl align-middle">
                      <img
                        src={D3D}
                        alt="D3D"
                        className="w-12 h-10 align-right"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 flex-col w-full sm:w-72">
                <h3 className="text-xl font-bold text-white mb-0 w-full text-center">
                  SOLUÇÃO COM RA
                </h3>

                {/* Card 1 */}
                <div className="bg-[#FF6600] rounded-[1vw] p-3 text-white w-full h-16 shadow-xl/15 flex items-center justify-center">
                  <div className="flex  items-center justify-center gap-3 w-4/5">
                    <div className="text-xs flex flex-col justify-center gap-1 w-4/5">
                      <p className="text-white font-normal text-gray-900 align-middle">
                        Imersão 3D 1:1 que elimina erros de interpretação
                        espacial.
                      </p>
                    </div>
                    <div className="text-2xl align-middle">
                      <img
                        src={Immersion}
                        alt="Immersion"
                        className="w-12 h-10 align-right"
                      />
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-[#FF6600] rounded-[1vw] p-3 text-white w-full h-16 shadow-xl/15 flex items-center justify-center">
                  <div className="flex  items-center justify-center gap-3 w-4/5">
                    <div className="text-xs flex flex-col justify-center gap-1 w-4/5">
                      <p className="text-white font-normal text-gray-900 align-middle">
                        Validação de estruturas direto no canteiro.
                      </p>
                    </div>
                    <div className="text-2xl align-middle">
                      <img
                        src={Wall}
                        alt="Wall"
                        className="w-12 h-10 align-right"
                      />
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-[#FF6600] rounded-[1vw] p-3 text-white w-full h-16 shadow-xl/15 flex items-center justify-center">
                  <div className="flex  items-center justify-center gap-3 w-4/5">
                    <div className="text-xs flex flex-col justify-center gap-1 w-4/5">
                      <p className="text-white font-normal text-gray-900 align-middle">
                        Modelos otimizados via SaaS com acesso
                        centralizado.{" "}
                      </p>
                    </div>
                    <div className="text-2xl align-middle">
                      <img
                        src={Cloud}
                        alt="Cloud"
                        className="w-12 h-10 align-right"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Active Content (25%) */}
          <div className="space-y-2 md:col-span-1 flex flex-col items-end"></div>
        </div>
      </div>
    </section>
  );
}
