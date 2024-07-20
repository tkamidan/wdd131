function discTemplate(imgURL, imgAlt, discName, speed, glide, turn, fade, stability, description) {
    return `<div class="disc-section">
                <img src="${imgURL}" alt="${imgAlt}">
                <div class="text-section">
                    <h2>${discName}</h2>
                    <h3>Disc Type: 
                    <h3>Speed: ${speed}</h3>
                    <h3>Glide: ${glide}</h3>
                    <h3>Turn: ${turn}</h3>
                    <h3>Fade: ${fade}</h3>
                    <p>${description}</p>
                </div>
            </div>`;
}