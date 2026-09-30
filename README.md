# Portfólio de Diego de Sá Dias

Portfólio acadêmico estático, criado para apresentações, networking científico e divulgação de projetos em neuroengenharia.

## Visão geral

- modo acadêmico como página principal;
- modo profissional preparado para uma segunda etapa;
- contatos diretos no primeiro quadro;
- projetos com imagens, legendas de origem e produções renderizados a partir de um catálogo único;
- visual noturno responsivo e acessível;
- publicação simples no GitHub Pages, sem dependências ou etapa de build.

## Ver localmente

Abrir `index.html` diretamente permite consultar a estrutura, mas navegadores podem limitar alguns comportamentos locais. A forma recomendada é servir a pasta:

```powershell
python -m http.server 8000
```

Depois, acesse `http://localhost:8000`.

## Onde editar

| Necessidade | Arquivo |
| --- | --- |
| Adicionar projeto ou produção | `assets/js/content.js` |
| Alterar textos da página acadêmica | `index.html` |
| Desenvolver a página profissional | `profissional.html` |
| Ajustar cores, espaçamento e responsividade | `assets/css/styles.css` |
| Alterar comportamentos dos catálogos | `assets/js/main.js` |
| Consultar decisões do projeto | `docs/ARQUITETURA-E-DESIGN.md` |
| Publicar o site | `docs/DEPLOY-GITHUB-PAGES.md` |
| Manter o portfólio | `docs/MANUTENCAO.md` |

## Documentação

- [Arquitetura e design](docs/ARQUITETURA-E-DESIGN.md)
- [Deploy no GitHub Pages](docs/DEPLOY-GITHUB-PAGES.md)
- [Manutenção e novos trabalhos](docs/MANUTENCAO.md)
- [Fontes editoriais](docs/FONTES.md)

## Privacidade

O site publica somente informações profissionais e acadêmicas já disponibilizadas pelo autor. Antes de cada publicação, revise o histórico do Git para garantir que nenhum dado pessoal ou arquivo privado foi adicionado.
