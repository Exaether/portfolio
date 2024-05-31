const prjt1 = document.querySelector('#projet1');
const openBtn = document.querySelector('#btnTest');

openBtn.addEventListener('click', function (e) {
    prjt1.classList.add('show');
});