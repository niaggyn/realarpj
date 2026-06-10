/**
 * Footer Component - RealAR
 * Design: Background preto, links em colunas
 * Fidelidade 100% ao protótipo
 */

import LogoFooter from "../img/logos/realar.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {/* Logo and Description */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-1 mb-3">
              <img src={LogoFooter} alt="Logo" className="w-14 h-auto" />
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
              Plataforma de Realidade Aumentada para engenharias e vendas.
            </p>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-semibold text-white text-xs mb-3">Empresa</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#" className="hover:text-orange-500">
                  Sobre nós
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Carreiras
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h4 className="font-semibold text-white text-xs mb-3">Suporte</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#" className="hover:text-orange-500">
                  Contato
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Documentação
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-white text-xs mb-3">Social</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#" className="hover:text-orange-500">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-6">
          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>© {currentYear} RealAR. Todos os direitos reservados.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-orange-500">
                Privacidade
              </a>
              <a href="#" className="hover:text-orange-500">
                Termos
              </a>
              <a href="#" className="hover:text-orange-500">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
