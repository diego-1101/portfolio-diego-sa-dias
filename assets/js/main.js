(function () {
  "use strict";

  const content = window.PORTFOLIO_CONTENT;

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function externalLink(label, url, className) {
    const link = element("a", className, label);
    link.href = url;
    link.target = "_blank";
    link.rel = "noreferrer";
    return link;
  }

  function dateRank(item) {
    const period = String(item.year || "");
    const years = (period.match(/\b(?:19|20)\d{2}\b/g) || []).map(Number);
    const start = years[0] || 0;
    const end = /atual|presente/i.test(period) ? 9999 : (years[years.length - 1] || 0);
    return end * 10000 + start;
  }

  function newestFirst(items) {
    return [...items].sort((a, b) => dateRank(b) - dateRank(a));
  }

  function projectGallery(project) {
    if (Array.isArray(project.gallery)) return project.gallery.filter((item) => item && item.src);
    if (project.image) {
      return [{ src: project.image, alt: project.imageAlt || "", caption: project.imageCaption || "" }];
    }
    return [];
  }

  function renderProjectGallery(project) {
    const images = projectGallery(project);
    if (!images.length) return null;

    const figure = element("figure", "project-media");
    figure.setAttribute("aria-label", `Imagens do projeto: ${project.title}`);
    figure.setAttribute("aria-roledescription", "galeria");
    const stage = element("div", "project-media-stage");
    const image = element("img");
    image.src = images[0].src;
    image.alt = images[0].alt || "";
    image.loading = "lazy";
    image.decoding = "async";
    image.draggable = false;
    stage.append(image);

    let caption;
    let counter;
    let position = 0;

    function showImage(nextPosition) {
      position = (nextPosition + images.length) % images.length;
      const current = images[position];
      image.src = current.src;
      image.alt = current.alt || "";
      if (caption) caption.textContent = current.caption || "";
      if (counter) counter.textContent = `${String(position + 1).padStart(2, "0")} / ${String(images.length).padStart(2, "0")}`;
    }

    if (images.length > 1) {
      const previous = element("button", "gallery-arrow gallery-arrow-previous", "‹");
      previous.type = "button";
      previous.setAttribute("aria-label", `Imagem anterior de ${project.title}`);
      previous.addEventListener("click", () => showImage(position - 1));

      const next = element("button", "gallery-arrow gallery-arrow-next", "›");
      next.type = "button";
      next.setAttribute("aria-label", `Próxima imagem de ${project.title}`);
      next.addEventListener("click", () => showImage(position + 1));

      stage.append(previous, next);
    }

    figure.append(stage);
    if (images.length > 1 || images[0].caption) {
      const meta = element("figcaption", "project-gallery-meta");
      if (images[0].caption) {
        caption = element("span", "project-media-caption", images[0].caption);
        meta.append(caption);
      }
      if (images.length > 1) {
        counter = element("span", "gallery-counter", `01 / ${String(images.length).padStart(2, "0")}`);
        counter.setAttribute("aria-live", "polite");
        counter.setAttribute("aria-atomic", "true");
        meta.append(counter);
      }
      figure.append(meta);
    }
    return figure;
  }

  function renderProjects() {
    const grid = document.querySelector("#projects-grid");
    if (!grid || !content) return;

    const fragment = document.createDocumentFragment();

    newestFirst(content.projects).forEach((project, index) => {
      const card = element("article", `project-card reveal${project.featured ? " project-card-featured" : ""}`);
      card.dataset.projectId = project.id;

      const gallery = renderProjectGallery(project);
      if (gallery) card.append(gallery);

      const top = element("div", "project-topline");
      top.append(element("span", "project-number", String(index + 1).padStart(2, "0")));
      const meta = element("div", "project-meta");
      meta.append(element("span", "project-year", project.year));
      meta.append(element("span", "project-status", project.status));
      top.append(meta);

      card.append(top);
      card.append(element("h3", "project-title", project.title));
      card.append(element("p", "project-summary", project.summary));

      if (project.contributions.length) {
        const detail = element("details", "project-detail");
        detail.append(element("summary", "", "Método e contribuição"));
        const contributions = element("ul", "project-contributions");
        project.contributions.forEach((item) => contributions.append(element("li", "", item)));
        detail.append(contributions);
        card.append(detail);
      }

      const footer = element("div", "project-footer");
      const tags = element("ul", "tag-list");
      tags.setAttribute("aria-label", "Áreas e ferramentas");
      project.areas.forEach((area) => tags.append(element("li", "", area)));
      footer.append(tags);

      if (project.links.length) {
        const links = element("div", "project-links");
        project.links.forEach((item) => links.append(externalLink(item.label, item.url, "text-link")));
        footer.append(links);
      }

      card.append(footer);
      fragment.append(card);
    });

    grid.append(fragment);
  }

  function renderOutputs() {
    const list = document.querySelector("#outputs-list");
    if (!list || !content) return;

    const fragment = document.createDocumentFragment();

    newestFirst(content.outputs).forEach((output, index) => {
      const item = element("article", "output-item reveal");
      item.append(element("p", "output-year", output.year));

      const body = element("div", "output-body");
      body.append(element("p", "output-type", output.type));
      body.append(element("h3", "output-title", output.title));
      body.append(element("p", "output-authors", output.authors));
      body.append(element("p", "output-venue", output.venue));
      if (output.doi) body.append(element("p", "output-doi", `DOI ${output.doi}`));
      item.append(body);

      const action = element("div", "output-action");
      action.append(element("span", "output-index", String(index + 1).padStart(2, "0")));
      if (output.url) action.append(externalLink("Abrir registro", output.url, "text-link"));
      item.append(action);
      fragment.append(item);
    });

    list.append(fragment);
  }

  renderProjects();
  renderOutputs();
})();
