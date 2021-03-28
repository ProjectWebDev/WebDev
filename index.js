function ChangeColor(){
    let body = document.getElementsByTagName("body")[0];
    let sun = document.getElementById("sun");
    let moon = document.getElementById("moon");
    let circle = document.getElementById('circle');
    let circleBox = document.getElementById("circle-box");
    let card = document.getElementById('card');
    let contenuto = document.getElementById('contenuto');
    let title = document.getElementById('title');

    const cardColor = () =>{
        if ((moon.style.display == "none") || (moon.style.display == "")){
            card.style.backgroundColor = '#000';
            title.style.color ='#fff';
            contenuto.style.color ='#fff';
            card.classList.add("act");
            
        }else {
            card.style.backgroundColor = '#fff';
            title.style.color ='#000';
            contenuto.style.color ='#000';
            card.style.transform = 'rotateY(360deg), translateY(30%)';
        }
    }

    cardColor()

    if (moon.style.display == "none" || moon.style.display == ""){
        moon.style.display = "block";
        sun.style.display = "none";
        circle.style = []
        circle.style.right = "0px";
        body.style.backgroundColor = "#000"
        circle.style.backgroundColor = "#000";
        circleBox.style.backgroundColor = "#fff";
        
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
