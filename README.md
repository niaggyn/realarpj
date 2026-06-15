🏗️ RealArch: Plataforma B2B de Realidade Aumentada

RealArch é uma plataforma de Software as a Service (SaaS) baseada em Realidade Aumentada (AR) voltada para o setor de construção civil e mercado imobiliário. O aplicativo transforma projetos arquitetônicos e estruturais complexos em experiências imersivas de maquetes virtuais 3D em escala 1:1.
🎯 Propósito do Projeto

A plataforma foi desenhada para resolver duas das maiores dores do mercado de edificações:

    No Canteiro de Obras (Engenharia): Reduzir retrabalhos através da validação espacial de interferências antes da execução, ancorando o modelo 3D diretamente sobre a planta baixa física.

    No Estande de Vendas (Comercial): Reduzir a fricção na venda de imóveis na planta, permitindo que corretores ofereçam ao cliente final uma visualização interativa, clara e em escala real dos ambientes.

✨ Funcionalidades Principais (App Mobile)

    Modo QR Code (Validação de Precisão): O modelo é ancorado e travado ao mundo real através de um marcador físico (planta impressa). A manipulação de escala e posição via toque é bloqueada para garantir precisão técnica (1:1), permitindo apenas controles finos via UI (Rotação e Elevação de Pavimentos).

    Modo Renderização Livre (Apresentação Comercial): Detecção de superfícies planas para posicionamento livre do modelo 3D no ambiente, ideal para demonstrações rápidas para clientes finais.

    Gestão de Camadas (Layers): Alternância em tempo real entre diferentes visualizações do projeto (Estrutural, Alvenaria, Elétrica, Mobília) e transição rápida para planta baixa 2D.

    Sistema de Tooltips Inteligentes: Tutoriais contextuais baseados em inatividade do usuário, garantindo uma curva de aprendizado suave do leigo ao mestre de obras.

    Modo Offline: Funcionalidade essencial para uso em subsolos ou canteiros remotos sem cobertura de internet móvel.

🛠️ Stack Tecnológico

O ecossistema do RealArch é dividido em duas frentes: o motor de visualização espacial (Mobile) e a infraestrutura de distribuição de licenças (Backend).
Frontend Mobile (AR)

    Engine: Unity

    Framework AR: AR Foundation (Compatibilidade cruzada via ARCore e ARKit)

    Linguagem: C#

    Arquitetura de UI: Interfaces otimizadas para performance mobile, com divisão contextual entre uso Portrait (Navegação/Biblioteca) e Landscape (Modos Interativos com controles na Safe Area).

Backend e Gestão de Acessos (SaaS B2B)

    Framework: Python / FastAPI

    Autenticação: JWT (JSON Web Tokens)

    Objetivo: Uma API REST desenvolvida para centralizar a gestão de licenças corporativas, permitindo que construtoras administrem acessos e pacotes de "assentos" para suas equipes de campo e corretores.

💼 Modelo de Negócios (B2B SaaS)

A sustentabilidade do projeto baseia-se em um faturamento em duas etapas, eliminando gargalos operacionais:

    Taxa de Setup: Cobrança única pela otimização e processamento do projeto 3D (arquivos FBX) para garantir fluidez mobile.

    Assinatura Recorrente: Mensalidade/Anuidade para manutenção do projeto na nuvem e acesso à API de licenciamento.

        Plano Autônomo: Focado em arquitetos independentes (Limite de projetos e licença única).

        Plano Construtora: Focado no nível corporativo (Projetos escaláveis, modo offline e licenças em massa).

🚀 Status do Projeto

    🟩 UI/UX: Wireframes e navegação estabelecidos (Fades, Canvas Scaler, Responsividade).

    🟩 Core AR: Modos QR e Livre mapeados.

    🟨 Integração de Backend: Modelagem de ORMs e segurança via JWT em desenvolvimento.

    🟨 Go-to-Market: Planejamento da Fase Beta em andamento com parceiros do setor para validação de usabilidade no canteiro de obras.

👨‍💻 Contato e Demonstração
Para investidores, parceiros de negócio ou construtoras interessadas em participar do programa Beta entre em contato diretamente via niagygn@gmail.com.
