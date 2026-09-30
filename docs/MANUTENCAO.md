# Manutenção do portfólio

O conteúdo que mais cresce — projetos e produções — está separado do HTML em `assets/js/content.js`. Assim, a manutenção normal consiste em copiar um objeto, alterar seus campos e testar.

## Rotina recomendada

Faça uma revisão breve sempre que ocorrer um destes eventos:

- início ou conclusão de projeto;
- publicação, congresso ou defesa;
- mudança de formação, vínculo ou bolsa;
- criação de repositório público, DOI, vídeo ou página de evento;
- alteração de e-mail, LinkedIn, GitHub ou Lattes.

Além disso, revise o portfólio a cada três meses para remover links quebrados e atualizar projetos em andamento.

## Adicionar um projeto

1. Abra `assets/js/content.js`.
2. Localize o array `projects`.
3. Copie o modelo abaixo antes do fechamento do array.
4. Coloque uma vírgula entre o objeto anterior e o novo.
5. Preencha apenas fatos confirmados.

```js
{
  id: "nome-curto-sem-espacos",
  year: "2026—atual",
  status: "em andamento",
  title: "Título público do projeto",
  image: "assets/images/projects/nome-do-projeto.webp",
  imageAlt: "O que aparece na imagem, sem interpretar resultados.",
  imageCaption: "Registro do projeto · ano",
  summary: "Explique o problema, a abordagem e o objetivo em duas ou três frases.",
  areas: ["Área 1", "Área 2", "Ferramenta"],
  contributions: [
    "Uma contribuição concreta.",
    "Outra responsabilidade ou método.",
    "Um resultado ou entrega verificável."
  ],
  links: [
    { label: "Ver repositório", url: "https://github.com/..." },
    { label: "Ver publicação", url: "https://doi.org/..." }
  ],
  featured: false
}
```

### Regras editoriais para projetos

- use `featured: true` em no máximo um ou dois projetos;
- prefira resumo com problema e contribuição, não uma lista de tecnologias;
- mantenha de duas a cinco áreas;
- use no máximo três contribuições curtas;
- coloque uma imagem em `assets/images/projects/` e preencha `image`, `imageAlt` e `imageCaption`;
- prefira uma captura, figura ou fotografia do próprio trabalho; se usar uma imagem conceitual, deixe isso claro na legenda;
- para fotografias e capturas, exporte em WebP com cerca de 1600 px de largura; para esquemas vetoriais, use SVG;
- só inclua links públicos e testados;
- não publique dados de participantes, pacientes, credenciais ou resultados sob embargo;
- se um projeto não tiver link público, use `links: []`.

## Adicionar uma produção

No mesmo arquivo, localize o array `outputs` e use:

```js
{
  type: "Artigo",
  year: "2027",
  title: "Título completo da produção",
  authors: "Autor 1; Autor 2; Autor 3",
  venue: "Nome do periódico ou evento",
  doi: "10.xxxx/xxxxx",
  url: "https://doi.org/10.xxxx/xxxxx"
}
```

Tipos sugeridos: `Artigo`, `Resumo em anais`, `Apresentação em congresso`, `Pôster`, `Capítulo` e `Software acadêmico`.

Se não houver DOI ou URL, use uma string vazia (`""`). Não use `#` nem crie links provisórios.

## Alterar o texto de apresentação

Os textos institucionais ficam em `index.html`. Pesquise pelo começo da frase que deseja alterar. Depois, confira:

- se a informação coincide com o Lattes;
- se a frase continua compreensível para alguém fora do laboratório;
- se não há afirmação clínica maior que a evidência disponível;
- se títulos e siglas aparecem explicados no primeiro uso.

## Atualizar a foto

1. exporte uma imagem vertical em PNG ou JPEG;
2. prefira pelo menos 600 × 800 px;
3. substitua `assets/images/diego-profile.png` mantendo o nome;
4. confira o recorte no desktop e no celular;
5. altere o texto `alt` em `index.html` se a nova imagem exigir outra descrição.

## Desenvolver a página profissional

Edite `profissional.html` sem retirar a navegação entre os modos. Reutilize os tokens e componentes de `styles.css`, mas construa uma narrativa própria:

1. proposta profissional em uma frase;
2. experiências selecionadas;
3. estudos de caso com problema, ação e resultado;
4. ferramentas apenas quando apoiam uma entrega;
5. contato final.

Mantenha projetos acadêmicos em `index.html`; use links cruzados quando um trabalho pertencer aos dois contextos.

## Teste antes de enviar

1. inicie `python -m http.server 8000`;
2. abra `http://localhost:8000`;
3. teste `index.html`, `profissional.html` e um endereço inexistente;
4. redimensione o navegador para 320 px, 768 px e tela ampla;
5. percorra a página com a tecla `Tab`;
6. abra todos os links novos;
7. verifique o console do navegador;
8. confirme que nenhum dado privado entrou no commit.

## Publicar a atualização

Use mensagens de commit que expliquem o que mudou:

```powershell
git add .
git commit -m "content: adiciona apresentação no Congresso X"
git push
```

Outros exemplos:

- `content: atualiza status do projeto de mestrado`
- `content: adiciona DOI do artigo`
- `design: melhora leitura dos cards no celular`
- `fix: corrige link do Currículo Lattes`

## Checklist anual

- [ ] formação e vínculo atualizados;
- [ ] projetos concluídos marcados corretamente;
- [ ] produções do Lattes conferidas;
- [ ] DOI e repositórios públicos adicionados;
- [ ] e-mail e LinkedIn testados;
- [ ] links institucionais ativos;
- [ ] foto ainda representativa;
- [ ] textos revisados em português;
- [ ] página profissional revisada;
- [ ] data do rodapé atualizada.
