document.addEventListener("DOMContentLoaded", function () {
    fetch('resources/json/posts.json')
        .then(response => response.json())
        .then(data => {
            for (var i = 0; i < data.length; i++){
                const dataDisplay = document.getElementById("dataDisplay");

                const titleElement = document.createElement("h3");
                titleElement.textContent = data[i].title;

                const dateElement = document.createElement("p");
                dateElement.textContent = data[i].date;

                dataDisplay.appendChild(titleElement);
                dataDisplay.appendChild(dateElement);

                if (data[i].link != "") {
                    const linkElement = document.createElement("a");
                    linkElement.textContent = data[i].link;
                    linkElement.href = data[i].link;

                    dataDisplay.appendChild(linkElement);
                }

                dataDisplay.appendChild(document.createElement("hr"));
            }
        })
        .catch(error => console.error("Error fetching JSON data:", error));
});