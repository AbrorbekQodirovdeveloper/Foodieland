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

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (e == "") {
    alert("Your input empty 😔");
  } else {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    fetch("https://66b093ad6a693a95b53945a1.mockapi.io/postes/userdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

    alert("You succes sent your information 🎉");
  }
});

function subscribe() {
  let newInp = document.getElementById("newInp").value;

  if (newInp == "") {
    alert("Your input empty 😔");
  }else{
    alert("You succesfully subscribe 🎉")
  }
}
