


window.addEventListener("load",getHomeData())



function getHomeData(){
    async function homeData(){
        await fetch("https://66ab5539636a4840d7ca3261.mockapi.io/dcd/user")
        .then(res => res.json())
        .then(data => homeCreator(data))
    }
}

getHomeData()



function homeCreator(homedata){
    console.log(homedata);
}