function addMenuText() {
    var menuText = document.querySelector('#menu-title');
    menuText.style.display = 'none';
}

function removeMenuText() {
    var menuText = document.querySelector('#menu-title');
    menuText.style.display = 'block';
}

window.addEventListener('resize', function () {
    if (this.window.innerWidth >= 700) {
        addMenuText();
    } else {
        removeMenuText();
    }
})