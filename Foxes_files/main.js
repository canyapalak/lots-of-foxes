
function getData() {
    fetch("https://randomfox.ca/floof/")
        .then((response) => {
            console.log("response :>> ", response);
            return response.json();
        })
        .then((result) => {
            console.log("result :>> ", result);
            controller(result);
        });
}

getData();;
document.getElementById("fox-button").addEventListener("click", getData);

function controller(result) {
  displayImage(result);
}

function displayImage(result) {

    const imagePlace = document.getElementById("image-here");
    imagePlace.innerHTML = "";

    const foxImage = document.createElement("img");
    foxImage.setAttribute("class", "fox");
    foxImage.setAttribute("src", result.image);
    foxImage.setAttribute("alt", "a random fox image");

    imagePlace.appendChild(foxImage);
}