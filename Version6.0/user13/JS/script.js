function changeText() {
    document.getElementById("textChange").innerHTML = "<u>That was very cash money of you</u>";
}

function changeText2() {
    document.getElementById("textChange").innerHTML = "<u>That wasn't very cash money of you</u>";
}

function redirect(event) {
    var x = event.keyCode;
    if (x == 31); window.location.replace("http://www.w3schools.com");
    
}
