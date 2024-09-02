async function getData() {
    const response = await fetch("https://api.github.com/users/lithium-lamp");

    return await response.json();
}

document.addEventListener("DOMContentLoaded", function () {
    getData().then(data => {
        const gitDisplay = document.getElementById("gitDisplay");

        const profileButtonElement = document.createElement("a");
        profileButtonElement.className = "profile-button";

        const imgElement = document.createElement("img");
        imgElement.className = "profile-pic";
        imgElement.setAttribute("src", data.avatar_url);

        const spanElement = document.createElement("span");
        spanElement.className = "profile-name";
        spanElement.textContent = "github: " + data.login;

        profileButtonElement.appendChild(imgElement);
        profileButtonElement.appendChild(spanElement);

        profileButtonElement.href = data.html_url;

        gitDisplay.appendChild(profileButtonElement);
    })
    .catch(error => console.error("Error fetching JSON data:", error));
});


/*
{
  "login": "lithium-lamp",
  "id": 125816815,
  "node_id": "U_kgDOB3_P7w",
  "avatar_url": "https://avatars.githubusercontent.com/u/125816815?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/lithium-lamp",
  "html_url": "https://github.com/lithium-lamp",
  "followers_url": "https://api.github.com/users/lithium-lamp/followers",
  "following_url": "https://api.github.com/users/lithium-lamp/following{/other_user}",
  "gists_url": "https://api.github.com/users/lithium-lamp/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/lithium-lamp/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/lithium-lamp/subscriptions",
  "organizations_url": "https://api.github.com/users/lithium-lamp/orgs",
  "repos_url": "https://api.github.com/users/lithium-lamp/repos",
  "events_url": "https://api.github.com/users/lithium-lamp/events{/privacy}",
  "received_events_url": "https://api.github.com/users/lithium-lamp/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Victor Lindholm",
  "company": "Linköpings universitet",
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 7,
  "public_gists": 0,
  "followers": 0,
  "following": 3,
  "created_at": "2023-02-19T15:56:42Z",
  "updated_at": "2024-08-26T13:08:53Z"
}
*/