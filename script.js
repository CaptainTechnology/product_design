
function circlemousefollower() {

    window.addEventListener("mousemove", function (elm) {
        document.querySelector("#circlepoint").style.transform = `translate(${elm.clientX}px, ${elm.clientY}px)`;



    })
}
circlemousefollower();


let elem = document.getElementsByClassName("elem");
console.log(elem);

elem[0].addEventListener("mousemove", (p) => {
    elem[0].children[0].style.display = "block";
    let v=p.clientX/5;
    elem[0].children[0].style.transform = `translate(${p.clientX-v}px)`;

})
elem[0].addEventListener("mouseleave", () => {
    elem[0].children[0].style.display = "none";
})
elem[1].addEventListener("mousemove", (p) => {
    elem[1].children[0].style.display = "block";
    let vi=p.clientX/5;
    elem[1].children[0].style.transform = `translate(${p.clientX-vi}px)`;
})
elem[1].addEventListener("mouseleave", () => {
    elem[1].children[0].style.display = "none";
})
elem[2].addEventListener("mousemove", (p) => {
    elem[2].children[0].style.display = "block";
    let vi=p.clientX/5;
    elem[2].children[0].style.transform = `translate(${p.clientX-vi}px)`;
})
elem[2].addEventListener("mouseleave", () => {
    elem[2].children[0].style.display = "none";
})