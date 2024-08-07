window.addEventListener("load", blogData())


let searchVids = [];


async function blogData() {
    await fetch("https://66ab5539636a4840d7ca3261.mockapi.io/dcd/user")
        .then(res => res.json())
        .then(data => {
            projectVids(data);
            tastyFoods(data);
        });
}

const projectVids = (blogdata) => {
    let projectVids = blogdata[2][0];

    let videos = document.getElementById("videos");

    projectVids.map((item) => {
        videos.innerHTML += `
        <div class="projectVids">
        <img id="vidImg" src="${item.image}">
        <div class="row">
        <h2 id="vidTitle">${item.title}</h2>
        <p id="vidContent">${item.content}</p>
        <div class="profile">
        <img id="profileImg" src="${item.profile.img}">
        <h3 id="profileName">${item.profile.name}</h3>
        <h4 id="profilePosted">${item.profile.posted_in}</h4>
        </div>
        </div>
        </div>
        `;
    })
}

const tastyFoods = (blogdata) => {
    let tastyData = blogdata[2][1];

    let tastyRecipes = document.getElementById("tastyRecipes");

    tastyData.map((item) => {
        tastyRecipes.innerHTML += `
        <div class="tastyFoods">
        <img style="height: 20vh;" width="200px"  id="tastyImg" src="${item.image}">
        <div class="row">
        <h2 id="tastyTitle">${item.title}</h2>
        <h4 id="tastyFoodBy">${item.cooked_by}</h4>
        </div>
        </div>
        `;
    });
}