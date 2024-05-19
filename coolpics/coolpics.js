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
    if (this.window.innerWidth >= 800) {
        showMenu();
    } else {
        hideMenu();
    }
});

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
      <button class="close-viewer" onclick="closeViewer()">X</button>
      <img src="${pic}" alt="${alt}" class="img-viewer">     
      </div>`;
  };
  

function viewHandler(event) {
	// create a variable to hold the element that was clicked on from event.target
    var src = event.src;
    src = src.split('-');
    src = src[0] + '-full.jpeg';
    var alt = event.alt;
    var htmltoinsert = viewerTemplate(src, alt);
    document.body.insertAdjacentHTML("beforebegin", htmltoinsert);

    

	// get the src attribute from that element and 'split' it on the "-"

	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step

	// insert the viewerTemplate into the top of the body element
	// (element.insertAdjacentHTML("afterbegin", htmltoinsert))

	// add a listener to the close button (X) that calls a function called closeViewer when clicked
    
}

// 
// var viewer = document.querySelector('#viewer');
// var imgViewer = document.querySelector('.img-viewer img');



// function changeImage(imageURL) {
//     imgViewer.src = imageURL;
// }

// function openViewer(imageURL) {
//     viewer.style.display = 'grid';
//     changeImage(imageURL);
// }

function closeViewer() {
    var viewer = document.querySelector(".viewer");
    if (viewer) {
        viewer.remove()
    }
}
