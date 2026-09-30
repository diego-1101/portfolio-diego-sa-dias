# Arquitetura e design do portfólio

> Documento de decisão criado antes da implementação. Ele define o que será construído, como o conteúdo será organizado e quais regras visuais devem permanecer nas próximas versões.

## 1. Objetivo do produto

O portfólio deve apresentar Diego de Sá Dias como pesquisador e engenheiro biomédico de forma clara, autoral e verificável. A primeira versão prioriza a trajetória acadêmica e precisa permitir que uma pessoa:

1. entenda a área de atuação nos primeiros segundos;
2. encontre e abra projetos, produções e apresentações;
3. reconheça a relação com a UNIFESP e com o Laboratório de Neuroengenharia e Neurocognição;
4. entre em contato por e-mail ou LinkedIn sem procurar pelo rodapé;
5. consulte fontes externas, como Lattes, GitHub e páginas das publicações.

O público principal é formado por bancas, pesquisadores, possíveis colaboradores, recrutadores técnicos e pessoas presentes em apresentações acadêmicas.

## 2. Escopo da primeira versão

### Entregue agora

- página acadêmica como rota principal;
- página profissional preparada, com uma mensagem curta de “em desenvolvimento” e o mesmo sistema visual;
- apresentação pessoal com foto, área de pesquisa e contatos diretos;
- seção sobre a linha de pesquisa e o laboratório;
- estante de projetos renderizada a partir de dados estruturados;
- lista de produção acadêmica e apresentações;
- linha de formação;
- versão responsiva, acessível e navegável por teclado;
- documentação de publicação no GitHub Pages e de manutenção do conteúdo.

### Adiado conscientemente

- conteúdo detalhado da página profissional;
- formulário de contato com backend;
- painel administrativo/CMS;
- blog e sistema de busca;
- alternância claro/escuro: a identidade desta versão é deliberadamente noturna;
- métricas automáticas do GitHub ou do Lattes.

## 3. Arquitetura de informação

### Página acadêmica (`index.html`)

1. **Cabeçalho fixo e compacto** — nome, navegação entre “Acadêmico” e “Profissional” e contatos principais.
2. **Abertura** — nome, formação, campo de atuação, uma síntese pessoal e links de e-mail/LinkedIn visíveis no primeiro quadro.
3. **Foco de pesquisa** — explicação breve da investigação atual e mapa das tecnologias que conectam EEG, EMG, análise, machine learning e realidade virtual.
4. **Laboratório** — contexto do Laboratório de Neuroengenharia e Neurocognição da UNIFESP, sem atribuir estrutura ou resultados não confirmados.
5. **Projetos** — estante visual gerada por JavaScript a partir de um catálogo padronizado.
6. **Produções** — resumo publicado em anais e apresentações de trabalho, com links externos quando confirmados.
7. **Formação** — trajetória da Mecatrônica ao mestrado.
8. **Contato final** — repetição intencional dos canais diretos para encerrar a narrativa com uma ação clara.

### Página profissional (`profissional.html`)

- mantém navegação e identidade;
- sinaliza com honestidade que a curadoria profissional será desenvolvida depois;
- aponta de volta para a página acadêmica e para os contatos.

## 4. Arquitetura técnica

O projeto será um site estático sem etapa de build. Essa escolha reduz manutenção, elimina dependências e funciona diretamente no GitHub Pages.

```text
portfolio-diego-sa-dias/
├── index.html
├── profissional.html
├── 404.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── images/
│   │   └── diego-profile.png
│   └── js/
│       ├── content.js
│       └── main.js
├── docs/
│   ├── ARQUITETURA-E-DESIGN.md
│   ├── DEPLOY-GITHUB-PAGES.md
│   └── MANUTENCAO.md
├── .nojekyll
├── .gitignore
├── LICENSE
└── README.md
```

### Responsabilidades

- `index.html` e `profissional.html`: estrutura semântica e conteúdo editorial estável;
- `styles.css`: tokens visuais, layout, responsividade, estados e animação;
- `content.js`: catálogo editável de projetos e produções;
- `main.js`: renderização dos catálogos, filtros leves e melhorias progressivas;
- `docs/`: decisões, publicação e rotina de manutenção.

Se o JavaScript falhar, a apresentação, a formação, o laboratório e os contatos continuam disponíveis. Apenas os catálogos dinâmicos deixam de ser preenchidos.

## 5. Modelo de conteúdo iterável

Cada projeto será um objeto no array `projects` de `assets/js/content.js`:

```js
{
  id: "identificador-curto",
  year: "2024—atual",
  status: "em andamento",
  title: "Título público do projeto",
  summary: "Resumo de duas ou três frases.",
  areas: ["EEG", "EMG", "Machine Learning"],
  contributions: ["Contribuição 1", "Contribuição 2"],
  links: [
    { label: "Ver publicação", url: "https://..." }
  ],
  featured: true
}
```

Regras:

- `id` não se repete e não contém espaços;
- `year` é texto para aceitar intervalos e “atual”;
- `summary` descreve o problema e a contribuição, não uma lista de ferramentas;
- `areas` tem de duas a cinco entradas curtas;
- `links` aceita zero ou mais referências verificadas;
- `featured: true` dá destaque editorial sem alterar o componente.

Produções seguem uma estrutura semelhante, com `type`, `year`, `title`, `authors`, `venue`, `doi` e `url`. O visual é criado pelo mesmo renderizador, portanto novos itens entram na grade sem duplicar HTML.

## 6. Direção visual

### Tese

**Caderno de laboratório noturno com precisão de instrumentação.** A página combina superfícies azul-grafite, tipografia sóbria, linhas finas e um traço de sinal elétrico. O resultado deve parecer desenhado para um pesquisador de neuroengenharia, não um template genérico de portfólio.

### Decisão memorável

O primeiro quadro usa uma coluna de “sinal” que conecta EEG → EMG → modelo → prótese virtual. Na estante, os projetos recebem numeração grande e uma linha de base contínua, como módulos organizados em uma bancada. O recurso é abstrato e informativo, não uma ilustração decorativa.

### Tokens

- fundo principal: `#071116`;
- superfícies: `#0c1a21` e `#10252d`;
- texto principal: `#f2f7f5`;
- texto secundário: `#9fb1b5`;
- acento: ciano elétrico `#5eead4`;
- acento secundário: azul `#67a7ff`;
- linhas: branco com 12% de opacidade;
- cantos: discretos, entre 2 e 16 px conforme a função;
- sombra: rara e difusa; hierarquia deve vir principalmente de contraste, espaço e bordas.

### Tipografia

- interface e texto: `Aptos`, `Segoe UI Variable`, `Segoe UI`, `system-ui`;
- destaques editoriais: `Georgia` apenas em frases curtas e itálicas;
- corpo mínimo de 1 rem, metadados nunca abaixo de 0,75 rem;
- títulos com largura controlada e entrelinha compacta.

### Movimento

- entrada sutil de seções quando entram na área visível;
- deslocamento máximo de 12 px e duração curta;
- cartões respondem ao foco/hover sem saltos de layout;
- `prefers-reduced-motion` desliga todas as transições não essenciais.

## 7. Comportamento responsivo

- **desktop (≥ 1024 px):** abertura em duas colunas, projetos em duas colunas e navegação completa;
- **tablet (720–1023 px):** abertura equilibrada e cartões empilhados quando necessário;
- **mobile (< 720 px):** cabeçalho rolável horizontalmente, contatos em largura total, foto reduzida e todos os catálogos em uma coluna;
- nenhum conteúdo depende de hover;
- links e botões têm área mínima de toque próxima de 44 px;
- o site não deve gerar rolagem horizontal em 320 px.

## 8. Acessibilidade e qualidade

- HTML semântico com `header`, `nav`, `main`, `section`, `article` e `footer`;
- link “pular para o conteúdo”;
- foco visível e contraste alto;
- foto com texto alternativo informativo;
- ícones decorativos ocultos de leitores de tela;
- links externos identificados pelo texto, sem depender de ícones;
- títulos em ordem hierárquica;
- JavaScript sem dependências e com melhoria progressiva;
- metadados de título e descrição por página;
- favicon próprio, simples e legível em 16 px.

## 9. Fontes e política editorial

Fontes primárias da primeira versão:

- Currículo Lattes atualizado em 03/09/2026;
- perfil do LinkedIn exportado em 30/09/2026;
- página pública da produção nos anais do 4º Science & Business Connection;
- página institucional da UNIFESP sobre o Laboratório de Neuroengenharia e Neurocognição.

Quando houver divergência, o Lattes mais recente prevalece para titulação e produção. O LinkedIn complementa contatos, experiência e competências. Informações futuras só entram após confirmação e com link quando existir.

## 10. Critérios de aceite

- contatos visíveis sem rolagem em desktop e acessíveis rapidamente no celular;
- os dois modos têm páginas distintas e navegação consistente;
- todos os projetos e produções iniciais aparecem a partir de `content.js`;
- novo item pode ser adicionado copiando um único objeto;
- todos os links têm destino válido ou foram omitidos;
- visual consistente em 320 px, 768 px e 1440 px;
- sem erros no console, referências quebradas ou dependências externas obrigatórias;
- documentação permite publicar e manter o site sem conhecer a arquitetura interna.
