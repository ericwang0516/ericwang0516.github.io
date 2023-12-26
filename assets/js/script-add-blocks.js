document.addEventListener("DOMContentLoaded", function () {
    // Get the container where you want to display the images
    const container = document.getElementById("display-block-student");

    // Replace 'path/to/your/images/' with the actual path to your image folder
    const imagePath = "assets/test-imgs/";

    // Fetch the images from the specified folder
    fetch(imagePath)
        .then(response => response.text())
        .then(data => {
            // Create a temporary HTML element to hold the response text
            const tempElement = document.createElement("div");
            tempElement.innerHTML = data;

            // Extract image source URLs from the temporary element
            const imageSrcList = Array.from(tempElement.querySelectorAll("a"))
                .map(link => link.getAttribute("href"))
                .filter(src => src.endsWith(".jpg") || src.endsWith(".jpeg") || src.endsWith(".png"));

            // Create image elements and append them to the container
            imageSrcList.forEach(src => {
                const imgElement = document.createElement("img");
                imgElement.src = imagePath + src;
                container.appendChild(imgElement);
            });
        })
        .catch(error => console.error("Error fetching images:", error));
});
