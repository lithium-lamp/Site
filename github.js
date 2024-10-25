

async function getData() {
    const response = await fetch("https://api.github.com/users/lithium-lamp");

    return await response.json();
}

document.addEventListener("DOMContentLoaded", function () {
    getData().then(data => {
        for (let i = 0; i < 4; i++) {
            const gitDisplay = document.getElementById("gitDisplay");

            const profileButtonElement = document.createElement("a");
            profileButtonElement.className = "profile-button";

            const imgElement = document.createElement("img");
            imgElement.className = "profile-pic";
            imgElement.setAttribute("src", data.avatar_url);

            //const spanElement = document.createElement("span");
            //spanElement.className = "profile-name";
            //spanElement.textContent = "github: " + data.login;

            profileButtonElement.appendChild(imgElement);
            //profileButtonElement.appendChild(spanElement);

            profileButtonElement.href = data.html_url;

            gitDisplay.appendChild(profileButtonElement);
        }
    })
    .catch(error => console.error("Error fetching JSON data:", error));
});