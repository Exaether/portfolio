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
		<p>${project.preview}</p>`;
	preview.appendChild(openButton);

	let details = document.createElement("div");
	details.classList.add("detailsProjet");
	details.innerHTML = `
		<article class="popupContent">
			<section class="project-head">
					<Button class="button closeButton">Fermer</Button>
				<h2>${project.name}</h2>
				
				<div class="language-logos">
					<hr>
				</div>
			</section>
			<hr>
			<section class="project-content">
				<p>
					${project.desc}
				</p>
				<a href="${project.source}" class="button" >Code source</a>
			</section>
		</article>` ;

	let links = details.querySelector(".language-logos");
	project.techs.forEach(element => {
		links.innerHTML += `<img src="assets/images/languages/${element}.png" alt="${element}">`;
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

