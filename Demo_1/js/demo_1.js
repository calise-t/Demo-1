const cat = document.getElementById("cat");
const bear = document.getElementById("bear");
const rabbit = document.getElementById("rabbit");

function showAnimal(type, message, images) {
    type.addEventListener("click", function(event){ 
        event.preventDefault();
        document.querySelector(".viewing-section ").innerHTML = `Pick your ${message} buddy!`;
        const displayArea = document.querySelector(".display-area");
        displayArea.innerHTML = images.map(image => `
            <div class="col-6 col-md-4 col-lg-3 d-flex flex-column">
                <img src="img/${image.src}" alt="${image.alt}">
                <p class="text-center pt-2">${image.caption}</p>
                <button>View</button>
            </div>
        `).join('');
    });
}

showAnimal(cat, "cat", [
    { src: "blue-cat.jpg", alt: "cat", caption: "Blue Cat" },
    { src: "sad-cat.jpg", alt: "cat", caption: "Sad Cat" },
    { src: "purple-cat.jpg", alt: "cat", caption: "Purple Cat" }
]);

showAnimal(bear, "bear", [
    { src: "brown-bear.jpg", alt: "bear", caption: "Bear" },
    { src: "blue-bear.jpg", alt: "bear", caption: "Bear with blue hat" },
    { src: "teddy-242878_1280.jpg", alt: "bear", caption: "Raincoat bear" }
]);

showAnimal(rabbit, "rabbit", [
    { src: "rabbit.jpg", alt: "rabbit", caption: "Rabbit" },
    { src: "yellow-rabbit.jpg", alt: "rabbit", caption: "Rabbit with yellow coat" },
    { src: "white-rabbit.jpg", alt: "rabbit", caption: "Bunny" }
]);
