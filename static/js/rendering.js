import { $technologiesList, $servicesList, $projectsList } from "./elements.js";
import { technologies, services, projects } from "../data/data.js";

const regex = new RegExp("[-]{2,}", "g");

function generateHTMLForProjects(projects) {
  let html = "";

  for (let i = 0; i < projects.length; i++) {
    let slug = projects[i].name.split(" ").join("-").toLowerCase();
    if (slug.includes("(" || ")")) {
      slug = slug.replaceAll("(", "-").replaceAll(")", "-");

      slug = slug.replaceAll(regex, "-");
    }

    html += `
      <li id="project-${slug}" class="project-card">
        <a href="${projects[i].url}" target="_blank">  
          <img src="${projects[i].thumbnailUrl}" alt="${projects[i].name}">
          <div class="project-info">
            <h3>${projects[i].name}</h3>
            <span class="project-subject">${projects[i].subject}</span>
            <p>${projects[i].description}</p>
          </div>
        </a>
      </li>
    `;
  }

  return html;
}

function generateHTMLForTechnologies(technologies) {
  technologies.sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0));

  let html = "";

  for (const technology of technologies) {
    html += `
      <li>
        <a href="${technology.url}" target="_blank">
          <h4>${technology.name}</h4>
        </a>
      </li>
    `;
  }

  return html;
}

function generateHTMLForServices(services) {
  let html = "";

  for (let i = 0; i < services.length; i++) {
    let slug = services[i].name.split(" ").join("-").toLowerCase();
    if (slug.includes("(" || ")")) {
      slug = slug.replaceAll("(", "-").replaceAll(")", "-");

      slug = slug.replaceAll(regex, "-");
    }
    if (i == 0) {
      html += `
      <li class="service-card open" id="service-${slug}">
        <h2 class="service-name">${services[i].name}</h2>
        <p class="service-description">${services[i].description}</p>
      </li>
    `;
    } else {
      html += `
      <li class="service-card" id="service-${slug}">
        <h2 class="service-name">${services[i].name}</h2>
        <p class="service-description">${services[i].description}</p>
      </li>
    `;
    }
  }

  return html;
}

function buildUI() {
  $technologiesList.innerHTML = generateHTMLForTechnologies(technologies);
  $servicesList.innerHTML = generateHTMLForServices(services);
  $projectsList.innerHTML = generateHTMLForProjects(projects);
}

export { buildUI };
