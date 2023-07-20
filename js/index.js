let icons=document.querySelectorAll(".icon")
let image=document.querySelector(".image")
let body=document.querySelector("body")

console.log(icons);
for(let i=0;i<icons.length;i++){
    icons[i].addEventListener("click",()=>{
        let newsrc=icons[i].getAttribute("src");
        change(newsrc);


    })

}
function change(newsrc){
    image.setAttribute("src",newsrc);
}
function changebg(color){
    console.log("kkk")
    body.style.backgroundColor=color;
}