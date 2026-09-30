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

  function renderProjects() {
    const grid = document.querySelector("#projects-grid");
    if (!grid || !content) return;

    const fragment = document.createDocumentFragment();

    content.projects.forEach((project, index) => {
      const card = element("article", `project-card reveal${project.featured ? " project-card-featured" : ""}`);
      card.dataset.projectId = project.id;

      const top = element("div", "project-topline");
      top.append(element("span", "project-number", String(index + 1).padStart(2, "0")));
      const meta = element("div", "project-meta");
      meta.append(element("span", "project-year", project.year));
      meta.append(element("span", "project-status", project.status));
      top.append(meta);

      card.append(top);
      card.append(element("h3", "project-title", project.title));
      card.append(element("p", "project-summary", project.summary));

      const contributions = element("ul", "project-contributions");
      project.contributions.forEach((item) => contributions.append(element("li", "", item)));
      card.append(contributions);

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

    content.outputs.forEach((output, index) => {
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

  function setupReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -24px" }
    );

    items.forEach((item) => observer.observe(item));
  }

  renderProjects();
  renderOutputs();
  setupReveal();
})();
