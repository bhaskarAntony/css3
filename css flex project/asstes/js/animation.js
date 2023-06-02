let card = document.querySelector(".cad");
card.addEventListener("mousemove", (e)=>{
    let xAxis = (window.innerWidth/2-e.pageX);
    let yAxis = (window.innerHeight/2-e.pageY);
    card.style.backgroundColor = 'black';
    card.style.backgroundColor = "black";
    card.style.transform = "rotateY(${yAxis}deg) rotateX(${xAxis}deg)";
})