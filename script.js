var a = document.querySelector("h3");

// var r = document.getElementById("review").value;
// console.log(r);

// document.querySelector("#add").addEventListener("click", function(){
//     a.innerHTML = r;
//     // console.log("hello");
//     a.style.color = "red";
//     add.style.color = "red";

// })

 function myFunction(){
    var r = document.getElementById("review").value;
console.log(r);

document.querySelector("#add").addEventListener("click", function(){
    a.innerHTML = r;
    // console.log("hello");
    a.style.color = "white";
    // add.style.color = "red";

})
}