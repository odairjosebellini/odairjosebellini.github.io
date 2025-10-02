# Portfólio - Odair José Bellini

Site pessoal construído com Jekyll e Decap CMS.

## 🚀 Features

- **Menu Automático**: Adicione novas páginas e elas aparecem automaticamente no menu
- **CMS Visual**: Edite conteúdo através do painel admin em `/admin`
- **Tema Escuro Moderno**: Design inspirado em plataformas como GitHub e Vercel
- **Totalmente Responsivo**: Funciona perfeitamente em mobile e desktop

## 📝 Como Adicionar Novas Páginas

### Opção 1: Via CMS (Interface Visual)

1. Acesse `https://odairjosebellini.github.io/admin`
2. Faça login com sua conta do GitHub
3. Clique em "Nova Página"
4. Preencha os campos e publique
5. A página aparecerá automaticamente no menu!

### Opção 2: Via Arquivo (Desenvolvedores)

1. Crie um novo arquivo `.md` na raiz do projeto
2. Adicione o front matter:

```yaml
---
layout: default
title: Minha Nova Página
icon: 🎨
nav_order: 3
show_in_nav: true
description: Descrição da página
---

Seu conteúdo aqui em Markdown ou HTML
```

3. Faça commit e push - pronto!

## 🛠️ Desenvolvimento Local

```bash
# Instalar dependências
bundle install

# Rodar servidor local
bundle exec jekyll serve

# Acessar em http://localhost:4000
```

## 📦 Estrutura do Projeto

```
.
├── _layouts/          # Templates do site
├── _includes/         # Componentes reutilizáveis (nav, footer)
├── assets/
│   ├── css/          # Estilos
│   └── js/           # JavaScript
├── admin/            # Painel do Decap CMS
├── _config.yml       # Configuração do Jekyll
├── index.md          # Página inicial
└── *.md              # Outras páginas
```

## 🔧 Configurações

Edite `_config.yml` para:
- Alterar título e descrição do site
- Configurar plugins
- Ajustar comportamento do menu

## 📄 Licença

© 2025 Odair José Bellini. Todos os direitos reservados.
