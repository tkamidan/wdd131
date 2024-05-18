function toggleMenu() {
    var links = document.getElementsByClassName('links');
    for (var i = 0; i < links.length; i++) {
        if (links[i].style.display === 'none') {
            links[i].style.display = 'grid';
        } else {
            links[i].style.display = 'none';
        }
    }
}

function showMenu() {
    var menuText = document.querySelector('#menu-title');
    menuText.style.display = 'none';
    var links = document.querySelector('.links');
    links.style.display = 'grid';
}

function hideMenu() {
    var menuText = document.querySelector('#menu-title');
    menuText.style.display = 'block';
    var links = document.querySelector('.links');
    links.style.display = 'none';
}

window.addEventListener('resize', function () {
    if (this.window.innerWidth >= 700) {
        showMenu();
    } else {
        hideMenu();
    }
})

var imgList = document.querySelector('.gallery');
var viewer = document.querySelector('#viewer');
var imgViewer = document.querySelector('.img-viewer img');

// imgList.forEach(function(img) {
//     img.addEventListener('click', function() {
//         console.log('Image clicked: ', img.src);
//         openViewer(img.src);
//     });
// });


// function changeImage(imageURL) {
//     imgViewer.src = imageURL;
// }

// function openViewer(imageURL) {
//     viewer.style.display = 'grid';
//     changeImage(imageURL);
// }

function closeViewer() {
    viewer.style.display = 'none';
}
