
//agrandar hombre
document.getElementById("hombre").onmouseover = function (){
    var hombre = document.getElementById("hombre").style.width="100%";
    var hombre = document.getElementById("hombre").style.height="100%";
    console.log("hecho");
}

//tamaño normal
document.getElementById("hombre").onmouseout = function (){
    var hombre = document.getElementById("hombre").style.width="500px";
    var hombre = document.getElementById("hombre").style.height="100%";

    console.log("fuera");
}


//Agrandar mujer
document.getElementById("mujer").onmouseover = function (){
    var hombre = document.getElementById("mujer").style.width="100%";
    var hombre = document.getElementById("hombre").style.height="100%";

    console.log("hecho");
}

//tamaño normal
document.getElementById("mujer").onmouseout = function (){
    var hombre = document.getElementById("mujer").style.width="500px";

    console.log("fuera");
}


//camisetas hombre
document.getElementById("camiseta").onmouseover = function (){
    var camiseta = document.getElementById("camiseta").src = "../imagenes/ropa_h/camiseta3.jpg";
    console.log("bien");

}

document.getElementById("camiseta").onmouseout = function (){
    var camiseta = document.getElementById("camiseta").src = "../imagenes/camiseta.jpg";
    console.log("bien");

}


//camisas hombre

document.getElementById("camisa").onmouseover = function (){
    var camiseta = document.getElementById("camisa").src = "../imagenes/ropa_h/camisa4.jpg";
    console.log("bien");

}

document.getElementById("camisa").onmouseout = function (){
    var camiseta = document.getElementById("camisa").src = "../imagenes/camisa.jpg";
    console.log("bien");

}


//Polo hombre

document.getElementById("polo").onmouseover = function (){
    var camiseta = document.getElementById("polo").src = "../imagenes/ropa_h/polo5.jpg";
    console.log("bien");

}

document.getElementById("polo").onmouseout = function (){
    var camiseta = document.getElementById("polo").src = "../imagenes/polo.jpg";
    console.log("bien");

}


//buzo hombre

document.getElementById("buzo").onmouseover = function (){
    var camiseta = document.getElementById("buzo").src = "../imagenes/ropa_h/chaqueta2.webp";
    console.log("bien");

}

document.getElementById("buzo").onmouseout = function (){
    var camiseta = document.getElementById("buzo").src = "../imagenes/buzo_hombre.jpg";
    console.log("bien");

}


//jean hombre

document.getElementById("jean").onmouseover = function (){
    var camiseta = document.getElementById("jean").src = "../imagenes/ropa_h/jean.webp";
    console.log("bien");

}

document.getElementById("jean").onmouseout = function (){
    var camiseta = document.getElementById("jean").src = "../imagenes/jean_hombre.jpg";
    console.log("bien");

}


//camiseta mujer

document.getElementById("camiseta_m").onmouseover = function (){
    var camiseta = document.getElementById("camiseta_m").src = "../imagenes/ropa_m/camiseta1.jpg";
    console.log("bien");

}

document.getElementById("camiseta_m").onmouseout = function (){
    var camiseta = document.getElementById("camiseta_m").src = "../imagenes/camiseta_mujer.jpg";
    console.log("bien");

}

//blusas

document.getElementById("blusa").onmouseover = function (){
    var camiseta = document.getElementById("blusa").src = "../imagenes/ropa_m/blusa2.jpg";
    console.log("bien");

}

document.getElementById("blusa").onmouseout = function (){
    var camiseta = document.getElementById("blusa").src = "../imagenes/blusa.jpg";
    console.log("bien");

}

//jean mujer

document.getElementById("jean_m").onmouseover = function (){
    var camiseta = document.getElementById("jean_m").src = "../imagenes/ropa_m/jean.jpg";
    console.log("bien");

}

document.getElementById("jean_m").onmouseout = function (){
    var camiseta = document.getElementById("jean_m").src = "../imagenes/jean_mujer.jpg";
    console.log("bien");

}


//buzos y chaquetas 
document.getElementById("buzo_m").onmouseover = function (){
    var camiseta = document.getElementById("buzo_m").src = "../imagenes/ropa_m/buzo6.jpg";
    console.log("bien");

}

document.getElementById("buzo_m").onmouseout = function (){
    var camiseta = document.getElementById("buzo_m").src = "../imagenes/buzo_mujer.jpg";
    console.log("bien");

}


//faldas y vestidos
document.getElementById("vestido").onmouseover = function (){
    var camiseta = document.getElementById("vestido").src = "../imagenes/ropa_m/falda7.jpg";
    
    console.log("bien");

}

document.getElementById("vestido").onmouseout = function (){
    var camiseta = document.getElementById("vestido").src = "../imagenes/vestido.jpg";
}