window.addEventListener("load", contact());

async function contact() {
  await fetch("https://66ab5539636a4840d7ca3261.mockapi.io/dcd/user")
    .then((res) => res.json())
    .then((data) => foods(data));
}

function foods(contact) {
  let item = contact[3][0];

  console.log(item);

  let recipe = document.getElementById("recipe");
  item.map((e) => {
    recipe.innerHTML += `<div class="food">
    <img
    class="food_img"
    src="${e.image}"
    alt=""
    />
    <h1>${e.title}</h1>
    <div class="food_icons">
     <div>
      <img
      class="food_icon"
      src="${e.timer_img}"
      alt=""
    />
    <h3>${e.timer_title}</h3>
     </div>
     <div>
      <img
      class="food_icon"
      src="${e.fork_knife_img}"
      alt=""
    />
    <h3>${e.fork_knife_title}</h3>
     </div>
    </div>
  </div>`;
  });
}
