# Deploy no GitHub Pages

Este projeto não precisa de compilação. O GitHub Pages pode publicar os arquivos diretamente do branch `main` e da raiz do repositório.

## 1. Teste antes de publicar

No terminal, dentro da pasta do projeto:

```powershell
python -m http.server 8000
```

Abra `http://localhost:8000` e confira:

- página acadêmica e página profissional;
- foto e estilos;
- projetos e produções;
- links de e-mail, LinkedIn, GitHub, Lattes e publicação;
- visual no celular e no computador.

Encerre o servidor com `Ctrl+C`.

## 2. Crie o repositório remoto

1. Entre em `github.com/diego-1101`.
2. Clique em **New repository**.
3. Use o nome `portfolio-diego-sa-dias`.
4. Se estiver no plano GitHub Free, escolha **Public** para usar o GitHub Pages.
5. Não marque a criação de README, `.gitignore` ou licença: esses arquivos já existem localmente.
6. Clique em **Create repository**.

> Alternativa: se quiser que o endereço seja somente `https://diego-1101.github.io`, use o nome exato `diego-1101.github.io`. Essa conta só pode ter um repositório de site pessoal com esse nome.

## 3. Conecte e envie este projeto

Use a URL exibida pelo GitHub. Para o nome recomendado, os comandos são:

```powershell
git remote add origin https://github.com/diego-1101/portfolio-diego-sa-dias.git
git push -u origin main
```

Se o GitHub solicitar autenticação, conclua pelo navegador ou use o método de autenticação já configurado na sua máquina.

## 4. Ative o GitHub Pages

1. Abra o repositório no GitHub.
2. Acesse **Settings**.
3. Na barra lateral, abra **Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**.
5. Em **Branch**, selecione `main`.
6. Em pasta, selecione `/(root)`.
7. Clique em **Save**.

O primeiro deploy costuma levar alguns minutos. O endereço esperado será:

```text
https://diego-1101.github.io/portfolio-diego-sa-dias/
```

O próprio painel **Settings → Pages** mostrará o endereço definitivo. A página **Actions** permite acompanhar o deploy e diagnosticar uma eventual falha.

## 5. Atualizações futuras

Depois que o Pages estiver ativo, cada `push` para `main` publica a nova versão automaticamente:

```powershell
git add .
git commit -m "content: adiciona novo projeto"
git push
```

Espere o workflow **pages build and deployment** finalizar antes de conferir a versão pública.

## 6. Domínio próprio — opcional

Se comprar um domínio no futuro:

1. abra **Settings → Pages**;
2. preencha **Custom domain**;
3. configure no provedor de domínio os registros indicados pelo GitHub;
4. aguarde a verificação de DNS;
5. ative **Enforce HTTPS** quando a opção estiver disponível.

Não crie um arquivo `CNAME` manualmente antes de decidir o domínio definitivo.

## 7. Solução rápida de problemas

### O site abre sem estilo

- confirme que `assets/css/styles.css` foi enviado;
- preserve os caminhos relativos dos arquivos;
- não mova `index.html` para outra pasta sem atualizar os caminhos.

### Projetos e produções não aparecem

- abra o console do navegador e procure erro em `content.js`;
- confira vírgulas, aspas e colchetes do último item alterado;
- compare o objeto novo com o modelo em `MANUTENCAO.md`.

### O Pages mostra 404

- confirme `main` e `/(root)` em **Settings → Pages**;
- verifique se `index.html` está na raiz;
- aguarde a conclusão do deploy na aba **Actions**;
- confirme que o endereço inclui `/portfolio-diego-sa-dias/` se esse for o nome do repositório.

### O deploy não inicia

- faça um novo `push` a partir de uma conta com permissão administrativa e e-mail verificado;
- confirme que o repositório é público no plano GitHub Free;
- reabra **Settings → Pages** e salve a fonte de publicação.

## Referência oficial

- [Configurar uma fonte de publicação do GitHub Pages](https://docs.github.com/pt/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Criar um site no GitHub Pages](https://docs.github.com/pt/pages/getting-started-with-github-pages/creating-a-github-pages-site)
