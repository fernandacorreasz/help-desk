# AidPoint Help Desk

AidPoint é um sistema desenvolvido de forma educacional de Help Desk desenvolvido para suportar usuários finais, analistas e gestores.
A aplicação permite a criação, acompanhamento e gerenciamento de tickets de suporte, além de fornecer métricas,
aprovações de mudanças e configurações de SLAs, com base nos princípios do ITIL.

## Tecnologias Utilizadas

- **React**: Biblioteca para construção de interfaces de usuário.
- **Ant Design (AntD)**: Biblioteca de componentes para construção de UI.
- **React Router**: Gerenciamento de rotas no frontend.
- **Chart.js**: Biblioteca para geração de gráficos e visualização de dados.
- **Vite**: Ferramenta de build rápida para desenvolvimento em React.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.

## Funcionalidades

- **Usuário Final**:
  - Criação de tickets
  - Acompanhamento de tickets
  - Notificações de status

- **Analista**:
  - Dashboard para gerenciar tickets
  - Monitoramento de tickets em andamento
  - Histórico de tickets fechados
  - Configuração de perfil
  
- **Gestor**:
  - Acompanhamento de métricas de performance (SLA, tempo de resposta)
  - Aprovação de mudanças
  - Configurações de SLAs
  - Gerenciamento de usuários e relatórios

## Requisitos do Sistema

- Node.js versão 16 ou superior.
- Gerenciador de pacotes npm.

## Configuração e Instalação

1. **Clone o repositório**:
    ```sh
    git clone https://github.com/seu-usuario/help-desk.git
    cd help-desk
    ```

---
2. **Instale as dependências**:
    ```sh
   npm install
    ```

---
3. **Configuração da Porta**:
   
    ```sh
   PORT=5173 npm run dev
    ```

---
4. **Build para Produção**:

Para gerar os arquivos otimizados para produção, utilize:
    ```sh
    npm run build
    ```

---
5. **Pré-visualização do Build**:

Para pré-visualizar a build gerada, utilize
    ```sh
  npm run preview
    ```

---

## Credenciais para Teste

Como essa aplicação é educacional, incluímos usuários pré-definidos para teste. Utilize as seguintes credenciais para acessar o sistema:

### Usuário Final
- **Login**: `juliana`
- **Senha**: `123`

### Analista
- **Login**: `pablo`
- **Senha**: `123`

### Gestor
- **Login**: `pedro`
- **Senha**: `123`

## Estrutura do Projeto

A aplicação está organizada em componentes modulares para cada tipo de usuário e funcionalidade:

- **`components/`**: Contém os componentes principais do sistema, incluindo as sidebars, telas de login e páginas de criação de tickets.
- **`pages/`**: Contém as páginas principais para cada usuário (Usuário, Analista, Gestor).
- **`assets/`**: Contém os arquivos de dados simulados e imagens.
- **`App.tsx`**: Define as rotas principais da aplicação.
- **`index.tsx`**: Arquivo de entrada para a aplicação React.

## Contribuição

Se você deseja contribuir para o projeto, siga estas etapas:

1. **Fork** este repositório.
2. Crie uma nova branch para sua funcionalidade (`git checkout -b minha-nova-funcionalidade`).
3. Commit suas mudanças (`git commit -am 'Adicionei uma nova funcionalidade'`).
4. Push para a branch (`git push origin minha-nova-funcionalidade`).
5. Abra um **Pull Request**.
