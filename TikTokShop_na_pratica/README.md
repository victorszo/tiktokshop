# Landing Page — Template de Vendas

Clone estático e organizado da página de vendas, pronto para ser reaproveitado
para um novo produto. Feito com **HTML + CSS + JavaScript puro** (sem build,
sem dependências) para facilitar a edição.

## Como visualizar

Basta abrir o arquivo `index.html` no navegador.
Para uma pré-visualização mais fiel (com servidor local):

```bash
# Python 3
python -m http.server 8000
# depois acesse http://localhost:8000
```

## Estrutura do projeto

```
clonagem/
├── index.html            # Toda a estrutura/conteúdo da página, dividido por seções
├── assets/
│   ├── css/styles.css    # Estilos, organizados por seções e com variáveis no topo
│   ├── js/main.js        # FAQ (accordion), link de checkout e ano do rodapé
│   └── img/              # Todas as imagens da página
└── README.md
```

## Como personalizar

### 1. Cores e fonte
Abra `assets/css/styles.css` e edite o bloco `:root` (topo do arquivo).
Todas as cores da página derivam dessas variáveis:

```css
--color-accent:   #2dcccd;  /* cor principal (ciano) */
--color-accent-2: #ff6d99;  /* cor secundária (rosa) */
--color-bg:       #0a0a0a;  /* fundo */
```

### 2. Link de compra (checkout)
Abra `assets/js/main.js` e altere `CONFIG.checkoutUrl`.
Todos os botões de compra usam esse link automaticamente.
(O botão principal na seção de oferta também está com o link direto no `index.html`.)

### 3. Textos
Todo o conteúdo está em `index.html`, comentado por seção
(`HERO`, `RESULTADOS REAIS`, `OFERTA / PREÇO`, `FAQ`, etc.).

### 4. Imagens
Substitua os arquivos dentro de `assets/img/` mantendo o mesmo nome, ou
troque o caminho no `src` da imagem correspondente no `index.html`.
Recomenda-se manter proporções semelhantes às originais.

## Seções da página (na ordem)

1. Cabeçalho fixo com logo e CTA
2. Hero (chamada principal + provas em vídeo)
3. Resultados reais (grid de prints)
4. História / autoridade + imprensa
5. Depoimentos e destaque "Nº 1"
6. A ciência por trás dos vídeos (etapas 01/02/03)
7. Como funciona (cards)
8. O que você vai aprender (lista com imagens)
9. Você não precisa ser especialista
10. O que você recebe + Bônus
11. Oferta / preço + garantia
12. FAQ (accordion)
13. CTA final + rodapé

## Observações

- A página original foi construída em WordPress/Elementor. Este clone reproduz
  o **conteúdo, o visual e a estrutura** em código limpo e leve, sem o excesso
  de código gerado automaticamente — muito mais fácil de manter.
- O mapeamento de cada imagem para cada seção é o melhor possível a partir do
  original; ajuste livremente conforme o novo produto.
- A página original tinha 2 vídeos (YouTube Shorts). Se quiser incluí-los,
  basta adicionar um `<iframe>` na seção desejada.
