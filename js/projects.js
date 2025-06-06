async function getAllProjects() {
    const response = await fetch("./assets/projects.json");
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }
    const projects = await response.json();

    return projects;
}

function createProject(project) {

    let preview = document.createElement("article");
	preview.classList.add("project");
    let img = document.createElement("img");
    img.src = `assets/images/projects/${project.id}.png`;
	img.alt = project.id;
	let openButton = document.createElement("button");
	openButton.classList.add("button");
	openButton.classList.add("openButton");
	openButton.innerText = "Plus";
	preview.appendChild(img);
	preview.innerHTML += `
		<h3>${project.name}</h3>
		<hr>
		<p>${project.preview.join("<br>")}</p>`;
	preview.appendChild(openButton);

	let details = document.createElement("div");
	details.classList.add("detailsProjet");
	details.innerHTML = `
		<article class="popupContent">
			<section class="project-head">
				<div class="language-logos">
					<hr>
				</div>
				<h2>${project.name}</h2>
				<svg class="closeButton" width="70" height="70" xmlns="http://www.w3.org/2000/svg" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor">
					<line y2="35" x2="35" y1="6" x1="6"/>
					<line y2="64" x2="6" y1="6" x1="64"/>
					<line y2="64" x2="64" y1="42" x1="42"/>
				</svg>
			</section>
			<hr>
			<section class="project-content">
				<p>
					${project.desc.join("<br>")}
				</p>
				<div class="btn-container">
				</div>
			</section>
		</article>` ;

	let languages = details.querySelector(".language-logos");
	project.techs.forEach(element => {
		languages.innerHTML = `<img src="assets/images/languages/${element}.png" alt="${element}">` + languages.innerHTML;
	});
	
	let links = details.querySelector(".btn-container");
	project.source.forEach(element => {
		links.innerHTML += `<a href="${element.link}" class="button" >${element.name}</a>`;
	});

	let closeButton = details.querySelector(".closeButton");
	closeButton.addEventListener("click", () => {
		details.classList.remove("show");
	});
	openButton.addEventListener("click", () => {
		details.classList.add("show");
	});

	let projectsDiv = document.querySelector("section#projects");
	projectsDiv.appendChild(preview);
	projectsDiv.appendChild(details);
}

let projects = getAllProjects();
getAllProjects().then(
	function(projects) {
		projects.forEach(project => {
			createProject(project);
		});
	}
);

