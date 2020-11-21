function changeColor1() {
    let color=document.getElementById("colorInputColor1").value;
    var x=document.getElementsByClassName("border")[0]
    x.style.borderRightColor=color;
    x.style.borderBottomColor=color;
 }

 function changeColor2() {
    let color=document.getElementById("colorInputColor2").value;
    var x=document.getElementsByClassName("border")[0]
    x.style.borderLeftColor=color;
    x.style.borderTopColor=color;
 }

  function reverseSpinner() {
     var x=document.getElementsByClassName("border")[0]
     console.log(x);
     if (x.classList.contains("linear-animation")) {
         x.classList.remove("linear-animation")
         x.classList.add("reverse-animation")
     }
     else {
         x.classList.add("linear-animation")
         x.classList.remove("reverse-animation")
     }
 }