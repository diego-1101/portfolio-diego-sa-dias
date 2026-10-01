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

  function renderProjects() {
    const grid = document.querySelector("#projects-grid");
    if (!grid || !content) return;

    const fragment = document.createDocumentFragment();

    newestFirst(content.projects).forEach((project, index) => {
      const card = element("article", `project-card reveal${project.featured ? " project-card-featured" : ""}`);
      card.dataset.projectId = project.id;

      if (project.image) {
        const media = element("figure", "project-media");
        const picture = element("img");
        picture.src = project.image;
        picture.alt = project.imageAlt || "";
        picture.loading = "lazy";
        picture.decoding = "async";
        media.append(picture);
        if (project.imageCaption) media.append(element("figcaption", "project-media-caption", project.imageCaption));
        card.append(media);
      }

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
