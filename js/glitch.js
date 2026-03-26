const title = document.getElementById("title");
const titleText = title.textContent.trim();

title.innerHTML = [...titleText]
	.map((c, i) => createLetter(c, i, 0.3, 0.3, 2, 2, 0.1))
	.join("");

document.querySelectorAll(".subtitle").forEach((subtitle) => {
	const text = subtitle.textContent.trim();

	subtitle.innerHTML = [...text]
		.map((c, i) => createLetter(c, i, 0.1, 0.1, 2, 1, 0.1))
		.join("");
});

document.querySelectorAll("nav a").forEach((link) => {
	const text = link.textContent.trim();

	link.innerHTML = [...text]
		.map((c, i) => createLetter(c, i, 0.2, 0.2, 2, 0, 0.1))
		.join("");
});

function createLetter(c, i, minDur, varDur, minIt, varIt, multDel) {
	if (c === " ") return " ";
	if (c === " ") return " ";

	const dur = (minDur + Math.random() * varDur).toFixed(2);
	const it = Math.floor(minIt + Math.random() * varIt);
	const del = i * multDel + (Math.random() - 0.5) * 0.8;

	return `<span class="letter" style="--i:${i};--dur:${dur}s;--it:${it};--del:${del}s">${c}</span>`;
}
