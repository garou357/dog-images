const DOG_URL = "https://dog.ceo/api/breeds/image/random";


function addNewDoggo() {

    const promise = fetch(DOG_URL);
    const doggos = document.querySelector(".doggos");
    promise
        .then(function (response) {
            const processPromise = response.json();
            return processPromise;
        })
        .then(function (processedPromise) {
            const img = document.querySelector(".img");
            img.src = processedPromise.message;
            img.alt = "Cute doggo";
            doggos.appendChild(img);
        });
}
document.querySelector(".doggo-button").addEventListener("click", addNewDoggo);