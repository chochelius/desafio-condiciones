
//change border when you click on the image

const element = document.getElementById("iBorde");
let borderStatus = false;
console.log(borderStatus);

function changeBorder() {
    if ( borderStatus == false ) {
        element.style.border = "2px solid red";
        borderStatus = true;
        console.log("border changed");
        console.log(borderStatus);

    }
    else {
        element.style.border = "none";
        borderStatus = false;
        console.log("border removed");
        console.log(borderStatus);
    }
};


element.addEventListener("click", changeBorder);

