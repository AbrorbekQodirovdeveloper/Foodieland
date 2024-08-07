


window.addEventListener("load",homeData())




    async function homeData(){
        await fetch("https://66ab5539636a4840d7ca3261.mockapi.io/dcd/user")
        .then(res => res.json())
        .then(data => header(data))
    }





function header(homedata){
   
    let header = homedata[1][0];
    let video = document.getElementById("video");
     
    header.map((item) => {
        let videoImg = document.createElement("img");
        videoImg.src = item.image;
        video.appendChild(videoImg);
    })
    let h2 = document.getElementById("miniminimini")
    h2.style.display = 'block';
    let h22 = document.getElementById("miniminimini2")
    h22.style.display = 'block';
    let h23 = document.getElementById("miniminimini3")
    h23.style.display = 'block';
    let h24 = document.getElementById("miniminimini4")
    h24.style.display = 'block';
    let h25 = document.getElementById("miniminimini5")
    h25.style.display = 'block';

    let mainmain = homedata[1][2].id="2";
    let womanimg = document.getElementById("womanImg");
    mainmain.map((item) => {
        let bla = item(1);
        womanimg.src = bla.image

    })
}













let sml1 = document.getElementById("sml1");
let sml2 = document.getElementById("sml2");
let sml3 = document.getElementById("sml3");
let sml4 = document.getElementById("sml4");
let sml5 = document.getElementById("sml5");
let sml6 = document.getElementById("sml6");
let sml7 = document.getElementById("sml7");
let sml8 = document.getElementById("sml8");


function small1(){
    sml1.style.textDecoration = "line-through"
}
function small2(){
    sml2.style.textDecoration = "line-through"
}
function small3(){
    sml3.style.textDecoration = "line-through"
}
function small4(){
    sml4.style.textDecoration = "line-through"
}
function small5(){
    sml5.style.textDecoration = "line-through"
}
function small6(){
    sml6.style.textDecoration = "line-through"
}
function small7(){
    sml7.style.textDecoration = "line-through"
}
function small8(){
    sml8.style.textDecoration = "line-through"
}






//passage2



// window.addEventListener("load", recData());

// async function recData(){
//     await fetch("https://66ab5539636a4840d7ca3261.mockapi.io/dcd/user")
//     .then(res => res.json())
//     .then(data => header(data))
// }

// function header(recData){
//     let header = recData[1][1];
//     let div1 = document.getElementById("RecipeDiv1")
     
//     header.map((item) => {
//         div1.src = item[0].image;
//     })
// }
// function header2(recData){
//     let header2 = recData[1][1];
//     let div2 = document.getElementById("RecipeDiv2")
     
//     header2.map((item) => {
//         div2.src = item[1].image;
//     })
// }
// function header3(recData){
//     let header3 = recData[1][1];
//     let div3 = document.getElementById("RecipeDiv3")
     
//     header3.map((item) => {
//         div3.src = item[2].image;
//     })
// }



//section 4








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
