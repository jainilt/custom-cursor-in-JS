let main = document.querySelector("#main")
let curs = document.querySelector(".cursor")
 
main.addEventListener("mousemove",function(dets){
    curs.style.left = dets.x+"px"
    curs.style.top = dets.y+"px"
})