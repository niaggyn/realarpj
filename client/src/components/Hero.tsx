/**
 * Hero Section - RealAR
 * Design: Gradiente azul escuro, 2 colunas, tabs dinâmicos
 * Fidelidade 100% ao protótipo com conteúdo dinâmico
 */

import { useState } from "react";

import Back1 from "../img/back/back1.jpg";
import Back2 from "../img/back/back2.jpg";
import Back3 from "../img/back/back3.jpg";

const tabsData = {
  vendas: {
    backgroundColor: "#000",
    background: Back1,
    subtitle: "Plataforma AR\npara Engenharias e Vendas",
    heading: "Venda projetos na planta com a confiança de uma obra pronta.",
    description:
      "Utilize a Realidade Aumentada para revolucionar o seu processo de vendas e permitir que o cliente veja o projeto como se estivesse pronto. Imersivo, inovador e intuitivo.",
    primaryButton: "Começar Agora",
    secondaryButton: "Ver Demo",
    image: "📱",
    imageLabel: "Smartphone com AR",
    isRealImage: false,
  },
  validacao: {
    backgroundColor: "#000",
    background: Back2,
    subtitle: "Plataforma AR\npara Engenharias e Vendas",
    heading: "Venda projetos na planta com a confiança de uma obra pronta.",
    description:
      "A precisão técnica que a edificação exige. Bloqueie manipulações acidentais e ancore estruturais ou tubulações diretamente sobre a planta impressa com estabilidade absoluta.",
    primaryButton: "Agendar Demonstração Técnica",
    secondaryButton: "",
    image: "/manus-storage/tab3_a0b1f90a.webp",
    imageLabel: "Validação no Canteiro",
    isRealImage: true,
  },
  gestao: {
    backgroundColor: "#fff",
    background: Back3,
    subtitle: "Plataforma AR\npara Engenharias e Vendas",
    heading: "Venda projetos na planta com a confiança de uma obra pronta.",
    description:
      "Infraestrutura SaaS criada para o mercado corporativo. Escale a distribuição de maquetes para sua equipe comercial com autenticação segura de acessos via sistema de tokens.",
    primaryButton: "Falar com Comercial",
    secondaryButton: "Documentação da API",
    image: "/manus-storage/tab2_c4f2beb3.webp",
    imageLabel: "Gestão de Licenças",
    isRealImage: true,
  },
};

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"vendas" | "validacao" | "gestao">(
    "vendas"
  );
  const data = tabsData[activeTab];
  const isGestao = activeTab === "gestao";

  return (
    <section
      id="home"
      className="pt-0 pb-5 md:pt-25 md:pb-20 bg-linear-to-r from-black to-zinc-900 text-white relative"
      style={{
        backgroundColor: data.backgroundColor,
      }}
    >
      <div
        className="mb-0 w-full h-auto relative"
        style={{
          backgroundColor: data.backgroundColor,
        }}
      >
        <div
          className="max-w-7xl mx-auto px-4 min-h-[420px] md:min-h-[520px] relative bg-cover"
          style={{
            backgroundColor: data.backgroundColor,
            backgroundImage: `url(${data.background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-stretch">
            {/* Left Content */}
            <div className="space-y-5 h-full min-h-[420px] md:min-h-[520px] flex flex-col justify-center">
              {/* Subtitle */}
              <p
                className={`text-xs ${isGestao ? "text-black" : "text-gray-300"} whitespace-pre-line`}
              >
                {data.subtitle}
              </p>

              {/* Main Heading */}
              <h1
                className={`text-2xl md:text-7xl lg:text-4xl font-normal leading-tight ${isGestao ? "text-black" : "text-white"}`}
              >
                {data.heading.split("planta").map((part, idx) => (
                  <span key={idx}>
                    {part}
                    {idx === 0 && (
                      <span className="font-bold text-purple-400">planta</span>
                    )}
                  </span>
                ))}
              </h1>

              {/* Description */}
              <p
                className={`text-xs leading-relaxed max-w-md ${isGestao ? "text-black" : "text-gray-300"}`}
              >
                {data.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex gap-3 pt-4 flex-wrap">
                <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-[0.5vw] font-bold text-xs transition-colors">
                  {data.primaryButton}
                </button>
                {data.secondaryButton && (
                  <button
                    className={`border ${isGestao ? "border-black text-black" : "border-gray-400 text-white"} px-6 py-2 rounded-[0.5vw] font-bold text-xs hover:border-white transition-colors`}
                  >
                    {data.secondaryButton}
                  </button>
                )}
              </div>

              {/* Right Image */}
              {/*
          <div className="hidden md:flex justify-center h-full">
            {data.isRealImage ? (
              <div className="rounded-2xl w-full max-w-sm h-full overflow-hidden border border-blue-400/30 shadow-lg">
                <img
                  src={data.image}
                  alt={data.imageLabel}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="bg-gradient-to-br from-blue-400/30 to-purple-400/20 rounded-2xl w-full max-w-sm h-full flex items-center justify-center border border-blue-400/30 backdrop-blur-sm">
                <div className="text-center p-6">
                  <div className="text-6xl mb-3">{data.image}</div>
                  <p className="text-gray-300 text-xs">{data.imageLabel}</p>
                </div>
              </div>
            )}
          </div>
          */}
            </div>
          </div>
        </div>
        {/* Tabs Navigation (bottom-center) */}
      </div>
      {/* Tabs Navigation (outside background container) */}
      <div
        className={`flex justify-center mt-6 z-20 text-xs ${isGestao ? "text-gray-400" : "text-gray-400"}`}
      >
        {(["vendas", "validacao", "gestao"] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`mx-3 transition-colors duration-200 ${
              activeTab === tab
                ? "text-white font-bold underline decoration-orange-500 decoration-2 underline-offset-4"
                : "hover:text-gray-300"
            }`}
          >
            {tab === "vendas" && "Vendas e Imobiliário"}
            {tab === "validacao" && "Validação no Canteiro"}
            {tab === "gestao" && "Gestão de Licenças"}
          </button>
        ))}
      </div>
    </section>
  );
}
