document.addEventListener("DOMContentLoaded", function () {
    fetch('resources/json/posts.json')
        .then(response => response.json())
        .then(data => {
            for (var i = 0; i < data.length; i++){
                const dataDisplay = document.getElementById("dataDisplay");

                if (i == 0) {
                    const countElement = document.createElement("h3");
                    countElement.textContent = "(" + data.length + ") Pdf items";
    
                    dataDisplay.appendChild(countElement);
    
                    dataDisplay.appendChild(document.createElement("hr"));
                }

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


    fetch('resources/json/videos.json')
    .then(response => response.json())
    .then(data => {
        for (var i = 0; i < data.length; i++){
            const videoDisplay = document.getElementById("videoDisplay");

            if (i == 0) {
                const countElement = document.createElement("h3");
                countElement.textContent = "(" + data.length + ") Video items";

                videoDisplay.appendChild(countElement);

                videoDisplay.appendChild(document.createElement("hr"));
            }

            const titleElement = document.createElement("h3");
            titleElement.textContent = data[i].title;

            const dateElement = document.createElement("p");
            dateElement.textContent = data[i].date;

            videoDisplay.appendChild(titleElement);
            videoDisplay.appendChild(dateElement);

            if (data[i].link != "") {
                const playerElement = document.createElement("div");
                playerElement.className = "player";

                const linkElement = document.createElement("iframe");
                linkElement.setAttribute("src", data[i].link);
                linkElement.setAttribute("title", "YouTube video player");
                linkElement.setAttribute("frameborder", "0");
                linkElement.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
                linkElement.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
                linkElement.setAttribute("allowfullscreen", "true");
                linkElement.style.width = "320px";
                linkElement.style.height = "180px";

                playerElement.appendChild(linkElement)
                videoDisplay.appendChild(playerElement);
            }

            videoDisplay.appendChild(document.createElement("hr"));
        }
    })
    .catch(error => console.error("Error fetching JSON data:", error));


    fetch('resources/json/contactinfo.json')
    .then(response => response.json())
    .then(data => {
            const contactDisplay = document.getElementById("contactDisplay");

            const titleElement = document.createElement("h3");
            titleElement.textContent = "Contact";

            const divElement = document.createElement("div");
            divElement.className = "inlinetext";
            
            const labelElement = document.createElement("p");
            labelElement.textContent = "Email";

            const linkElement = document.createElement("a");
            linkElement.textContent = data.email;
            linkElement.href = data.email;

            divElement.appendChild(labelElement);
            divElement.appendChild(linkElement);

            //const textElement = document.createElement("p");
            //textElement.textContent = "...or just contact me in person";

            contactDisplay.appendChild(titleElement);
            contactDisplay.appendChild(divElement);
            contactDisplay.appendChild(document.createElement("hr"));
            //contactDisplay.appendChild(textElement);
    })
    .catch(error => console.error("Error fetching JSON data:", error));
});