Pigz Comando — Aplicativo Mobile

Aplicativo mobile para Pigz Comanda — sistema de gerenciamento de caixas (versão mobile).

✨ Visão geral

Aplicativo multiplataforma (iOS / Android) desenvolvido com React Native + Expo e TypeScript. Projetado para permitir login administrativo, seleção de caixa, registro de valores, validação por senha e confirmação de operação com foco em usabilidade e acessibilidade.

📦 Funcionalidades principais

Fluxo linear: Login → Seleção de Caixa → Valor → Senha → Confirmação

Feedback visual em tempo real (senha ocultada, estados de carregamento)

Estados de caixa (ex.: EM USO) com destaque visual

Modais com botão de fechar (X)

Acessibilidade: contraste adequado, tamanhos de fonte e áreas de toque mínimos

Compatibilidade: iOS, Android e tablets com layout adaptável

🚀 Como rodar o projeto (local)

Clone o repositório

git clone https://github.com/DaniloMoser/pigz-comanda-mobile.git
cd pigz-comanda-mobile


Instale dependências

npm install
# ou
yarn


Inicie o Expo

npm start
# ou
yarn start


Abra no dispositivo

Abra o app Expo Go no celular e escaneie o QR code exibido no terminal / Metro Bundler.

Ou use emulador (Android Studio / Xcode) com Run on Android / iOS.

🛠️ Pré-requisitos

Node.js 16+

npm (ou yarn)

(Opcional) Expo CLI instalado globalmente

npm install -g expo-cli


Dispositivo com Expo Go ou emulador configurado

🔐 Credenciais de teste

Senha administrativa: 123456

Caixas disponíveis (nomes fictícios):

Lecoração

Geoafeeda

Gelachanel son toura

Observação: troque credenciais de teste por um sistema real de autenticação antes de produção.

🎨 Decisões de UX / UI (resumo)

Feedback visual imediato: campos de senha com pontos (••••••) em tempo real.

Estados “EM USO”: cor vermelha e opacidade ajustada para indicar indisponibilidade.

Botões: suporte a estado de carregamento (spinner) e feedback de toque.

Navegação: fluxo intuitivo e linear para reduzir erro do usuário.

Acessibilidade: contraste suficiente, fontes legíveis e áreas de toque ≥ 48px.

Modal: inclui botão claro para fechar (X).

🧩 Tecnologias e ferramentas

React Native + Expo

TypeScript

Componentes estilizados (ex.: StyleSheet, styled-components ou solução escolhida)

Testes unitários recomendados (Jest + React Native Testing Library)

Controle de versão: Git / GitHub

📱 Compatibilidade

iOS: 12.0+

Android: 8.0+

Tablets: layout adaptável

Orientação: suporta retrato e paisagem (priorizar retrato para fluxo principal)

🧪 Testes

Adicione testes unitários para componentes críticos (login, validação de senha, seleção de caixa).

Sugestão: jest + @testing-library/react-native.

Exemplo de script npm:

"scripts": {
  "start": "expo start",
  "android": "expo start --android",
  "ios": "expo start --ios",
  "web": "expo start --web",
  "test": "jest"
}

🗂 Estrutura sugerida (exemplo)
/src
  /components
  /screens
    LoginScreen.tsx
    CashSelectionScreen.tsx
    ...
  /services
  /utils
  /assets
App.tsx

⚙️ Boas práticas e recomendações

Centralizar strings em arquivo de i18n para futura internacionalização.

Manter temas (claro/escuro) via useColorScheme ou Context API.

Proteger rotas sensíveis com autenticação e renovar credenciais com backend seguro.

Usar variáveis de ambiente para endpoints e chaves (não commitar .env).

Exemplo .env (NUNCA comitar em repositório público):

API_URL=https://api.exemplo.com

❗ Dicas para produção

Remover credenciais hard-coded antes de publicar.

Habilitar builds nativos com eas build (Expo Application Services) para distribuição.

Monitoramento (Sentry ou similar) para erros em produção.

Testes em dispositivos reais e diferentes versões Android/iOS.

🧑‍🤝‍🧑 Contribuição

Contribuições são bem-vindas! Abra issues para bugs ou features e envie PRs com descrição clara das mudanças.

📬 Contato

Desenvolvedor: Danilo Rodrigues
Repositório: https://github.com/DaniloMoser/pigz-comanda-mobile
