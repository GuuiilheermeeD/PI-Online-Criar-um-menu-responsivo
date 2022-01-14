const bntMenu = document.getElementById('bntMenu')

function toggleMenu(){
    const nav = document.getElementById('nav')
    nav.classList.toggle('active');

}

bntMenu.addEventListener('click', toggleMenu);