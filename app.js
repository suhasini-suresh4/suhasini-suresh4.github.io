console.log("Hello!")

document.addEventListener("DOMContentLoaded", () => {

    // each image src should be new each time 

    // grab all image tags and save into a variable
    const images = document.querySelectorAll("img"); 

    // loop through images and for each image change src to something else
    for(const image of images) {
        // console.log(image)
        // make a new request
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {
            image.src = data.message
            image.width = 100;
            image.height = 100;
        })
    }

})