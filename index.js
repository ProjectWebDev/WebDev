function ChangeColor(){
    let body = document.getElementsByTagName("body")[0];
    let sun = document.getElementById("sun");
    let moon = document.getElementById("moon");
    let circle = document.getElementById('circle');
    let circleBox = document.getElementById("circle-box");
    if (moon.style.display == "none"){
        moon.style.display = "block";
        sun.style.display = "none";
        circle.style = []
        circle.style.right = "0px";
        body.style.backgroundColor = "#000"
        circle.style.backgroundColor = "#000";
        circleBox.style.backgroundColor = "#fff"
    }
    else if (moon.style.display == ""){
        moon.style.display = "block";
        sun.style.display = "none";
        circle.style = []
        circle.style.right = "0px";
        body.style.backgroundColor = "#000"
        circle.style.backgroundColor = "#000";
        circleBox.style.backgroundColor = "#fff"
    }
    else{
        sun.style.display = "block";
        moon.style.display = 'none';
        circle.style = []
        circle.style.left = "0px";
        body.style.backgroundColor = "#fff"; 
        circle.style.backgroundColor = "#fff";
        circleBox.style.backgroundColor = "#000"
    }
}
