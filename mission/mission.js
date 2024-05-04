document.addEventListener('DOMContentLoaded', function() {
    const selectElement = document.getElementById('theme');
    var image =  document.getElementById("img")

    selectElement.addEventListener('change', function () {
        const selectedValue = this.value;
        if (selectedValue === 'dark') {
            document.body.classList.add('dark')
            image.src = "byui-logo_white.png";
            image.alt = "Dark BYU I logo"
            
        } else {
            document.body.classList.remove('dark')
            image.src = "byui-logo_blue.webp";
            image.alt = "White BYU I logo"
        }
    })
})