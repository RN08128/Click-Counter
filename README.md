# 🌟 Click Counter & Dark Mode Toggle (DOM Practice)

## 🚀 Funcionalidades

* **Contador Dinâmico:** Um botão principal ("Click me") que incrementa e exibe a quantidade de cliques na tela em tempo real.
* **Persistência com LocalStorage:** O número de cliques fica salvo no navegador do usuário. Mesmo se a página for fechada ou atualizada, o contador não zera.
* **Alternador de Tema (Dark/Light Mode):** Um botão dedicado que altera as cores de fundo da página e do texto dinamicamente, além de atualizar o próprio texto do botão para indicar o modo atual.

---

## 🧠 O que eu utilizei neste código?

Com base na estrutura que desenvolvi, apliquei conceitos essenciais de JavaScript Intermediário:

1. **Manipulação de Estado e Tipagem:** Uso do `localStorage.getItem` combinado com `Number()` para garantir que o dado recuperado do navegador seja tratado como número desde o carregamento da página.
2. **Manipulação Direta de Estilos via JS:** Alteração dinâmica de propriedades CSS (`style.backgroundColor` e `style.color`) direto no objeto global `document.body` e em elementos específicos.
3. **Escutadores de Eventos (`addEventListener`):** Vinculação de funções JavaScript a eventos de clique (`click`) nos botões de forma limpa.
4. **Condicionais Dinâmicas:** Verificação do texto interno do botão (`innerText`) para decidir se o tema deve mudar para claro ou escuro.

---

## 🛠️ Tecnologias e Estrutura do Projeto

O projeto foi dividido de forma organizada em três arquivos principais:

* **`index.html`:** Estruturação semântica contendo os botões de ação e a área de exibição do contador.
* **`style.css`:** Estilização geral da página, incluindo centralização do conteúdo com margens e efeitos visuais como `:hover` e `transition` no botão principal.
* **`script.js`:** Lógica do contador, manipulação do armazenamento local (`localStorage`) e controle de estados do tema.

---

## 🔧 Como rodar o projeto localmente

Como o projeto utiliza JavaScript puro e tecnologias nativas do navegador, basta executar os seguintes passos:

1. Clone o repositório ou baixe os três arquivos (`index.html`, `style.css`, `script.js`) na mesma pasta.
2. Abra o arquivo `index.html` em qualquer navegador web.
