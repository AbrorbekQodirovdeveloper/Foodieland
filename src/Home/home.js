


window.addEventListener("load",homeData())




    async function homeData(){
        await fetch("https://66ab5539636a4840d7ca3261.mockapi.io/dcd/user")
        .then(res => res.json())
        .then(data => catigoriya(data))
    }





function catigoriya(homedata){
   
    let catigoriya = homedata[0][0];

    let catigoriyabox = document.getElementById("catigoriya");

    catigoriya.map((item) =>{
        let catigoriyacard = document.createElement("div");
        catigoriyabox.appendChild(catigoriyacard)
        let catigoriyaimg = document.createElement("img");
        catigoriyaimg.src = item.image;
        catigoriyacard.appendChild(catigoriyaimg);
        let catigoriyatitle = document.createElement("p");
        catigoriyatitle.innerText = item.title;
        catigoriyacard.appendChild(catigoriyatitle);
    })


}