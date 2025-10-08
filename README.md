# Blog Pessoal - Odair José Bellini

Este é o repositório do meu blog pessoal, construído com Jekyll e hospedado no GitHub Pages. O site é projetado para ser minimalista, rápido e focado no conteúdo.

## 📝 Como Adicionar um Novo Post

Para adicionar um novo artigo ao blog, siga estes passos:

1.  **Crie um novo arquivo** no diretório `_posts`.
2.  **Nomeie o arquivo** seguindo o formato padrão do Jekyll: `YYYY-MM-DD-titulo-do-post.md`.
    *   Exemplo: `2025-10-08-como-usar-o-vscode.md`
3.  **Adicione o front matter** necessário no topo do arquivo. Este é o cabeçalho que o Jekyll usa para processar o post:

    ```yaml
    ---
    layout: post
    title: "O Título do Seu Post"
    description: "Uma breve descrição do post, que aparecerá na página inicial e nas meta tags de SEO."
    ---

    O conteúdo do seu post em Markdown ou HTML começa aqui...
    ```

4.  **Faça o commit e push** das suas alterações. O GitHub Pages irá automaticamente construir e publicar o novo post.

## 🛠️ Desenvolvimento Local

Para rodar o site localmente e visualizar as alterações antes de publicá-las:

1.  **Instale as dependências:**
    ```bash
    bundle install
    ```
2.  **Inicie o servidor Jekyll:**
    ```bash
    bundle exec jekyll serve
    ```
3.  **Acesse o site** no seu navegador em `http://localhost:4000`.

## 📦 Estrutura do Projeto

A estrutura do projeto foi simplificada para focar no blog:

```
.
├── _layouts/          # Contém os layouts `default.html` e `post.html`
├── _posts/            # Onde todos os posts do blog vivem
├── assets/
│   ├── css/           # Folhas de estilo
│   └── js/            # Scripts (se houver)
├── _config.yml        # Arquivo de configuração principal do Jekyll
└── index.md           # A página inicial, que lista todos os posts
```

## 🔧 Configuração

As configurações principais do site, como o título (`title`) e a descrição (`description`), podem ser editadas no arquivo `_config.yml`.

## 📄 Licença

© 2025 Odair José Bellini. Todos os direitos reservados.