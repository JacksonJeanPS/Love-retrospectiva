# Nossa História 💫

Este é um projeto web interativo e pessoal, criado para ser uma retrospectiva digital de uma **história de amor**. Utilizando HTML, CSS e JavaScript, a página combina design elegante com diversas animações e elementos visuais que remetem ao cosmos e à nostalgia, como estrelas, a lua, um sistema solar e fotos no estilo Polaroid.

-----

## 🚀 Tecnologias e Estilização

O projeto é construído sobre três pilares principais, com foco em efeitos visuais e interatividade:

| Tecnologia | Função Principal |
| :--- | :--- |
| **HTML5** | Estrutura de conteúdo, incluindo seções temáticas e embeds de mídia. |
| **CSS3** | Estilização, layout, gradientes, sombras e a maioria das animações (`@keyframes`). |
| **JavaScript** | Lógica de interatividade (navegação, corações, contador) e animação do céu estrelado (`<canvas>`). |

### 🎨 Recursos Visuais em Destaque

  - **Céu Estrelado:** Fundo animado gerado por `<canvas>` para criar uma atmosfera cósmica.
  - **Sistema Solar:** Animação 3D de planetas em órbita, dando profundidade visual.
  - **Lua Crescente:** Elemento de design com *glow* sutil.
  - **Efeitos de Coração:** Animações interativas disparadas por botões.
  - **Tipografia:** Uso das fontes **Montserrat** (títulos, negrito) e **Playfair Display** (corpo de texto) para uma estética elegante.

-----

## 📂 Estrutura do Projeto

```
/projeto-nossa-historia
│
├─ index.html          # Estrutura principal da página
├─ style.css           # Estilos globais, de componentes e animações
├─ stars.css           # (Estilos de fundo) - *Nota: No código fornecido, foram unificados no style.css*
├─ script.js           # Lógica (corações, fade-in, contador, navegação)
└─ README.md           # Este arquivo
```

-----

## ✨ Funcionalidades Interativas

| Funcionalidade | Descrição |
| :--- | :--- |
| **Corações Animados** | O botão **“💖 Te amo\!”** dispara grandes e pequenos corações flutuantes. |
| **Contador de Dias** | Exibe o tempo de relacionamento em dias de forma dinâmica. |
| **Navegação Lateral** | Pontos (bolinhas) fixos na lateral para saltos rápidos entre as seções. |
| **`Fade-in` ao Scroll** | Conteúdo das seções aparece suavemente ao entrar na tela. |
| **Música de Fundo** | Player do YouTube embutido para uma trilha sonora personalizada. |

-----

## 🖼️ Personalização e Conteúdo

Os elementos do projeto foram pensados para serem facilmente adaptáveis ao seu conteúdo:

### Polaroids (Fotos)

O componente `.photo-card` exibe as lembranças com um estilo Polaroid, incluindo borda, sombra e legenda, ajustando-se à tela.

  - **Para Personalizar as Fotos:** Substitua as imagens dentro dos containers `.photo-card` e atualize as legendas em **HTML**.

### Música

A música de fundo é incorporada através de um **`<iframe>`** do YouTube.

  - **Para Personalizar a Música:** Altere o atributo `src` do `<iframe>` no **HTML** com o link de incorporação do seu vídeo/música preferida.

-----

## 💻 Como Executar

1.  **Clone o Repositório:**
    ```bash
    git clone https://github.com/seu-usuario/nossa-historia.git
    ```
2.  **Abra o Arquivo:**
    Abra o arquivo `index.html` diretamente em seu navegador (Chrome, Firefox, Edge, etc.).
3.  **Interaja:**
      - Clique no botão **💖** para ver as animações.
      - Role a página para explorar todas as seções animadas.

-----

## 📱 Responsividade

O projeto utiliza técnicas de CSS flexíveis e media queries (`@media`) para garantir que o layout seja adaptável:

  - **Mobile First:** Layout ajustado para telas de celulares e tablets.
  - **Ajuste de Componentes:** Elementos como o sistema solar, a lua e as Polaroids se reescalam para se encaixarem em diferentes tamanhos de tela.

-----

## ✨ Autor

**Jackson Jean P Sousa** – Criador e designer do projeto.

[Seu GitHub](https://www.google.com/search?q=https://github.com/JacksonJeanPS)

-----

> 📌 **Observação:** Este projeto pode ser expandido com mais seções, efeitos e lógicas. Se houver interesse em aprofundar a personalização, explore o `script.js` e o `style.css`\!
