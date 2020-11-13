total = "";
document.getElementById("boton1").onclick = function(){
    total = total + "<img src='../imagenes/ropa_m/buzo.webp' style='height:100px; padding-bottom:10px;'> Buzo <br>"; 
    alert("Su compra se añadio al carrito");
    document.getElementById("carrito").innerHTML = total;
}

document.getElementById("boton2").onclick = function(){
    total = total + "<img src='../imagenes/ropa_m/jean.jpg' style='height:100px; padding-bottom:10px;'> Jean <br>"; 
    alert("Su compra se añadio al carrito");
    document.getElementById("carrito").innerHTML = total;
}

document.getElementById("boton4").onclick = function(){
    total = total + "<img src='../imagenes/ropa_m/blusa.jpg' style='height:100px; padding-bottom:10px;'> Blusa <br>"; 
    alert("Su compra se añadio al carrito");
    document.getElementById("carrito").innerHTML = total;
}

document.getElementById("boton5").onclick = function(){
    total = total + "<img src='../imagenes/ropa_m/falda.webp' style='height:100px; padding-bottom:10px;'> Falda <br>"; 
    alert("Su compra se añadio al carrito");
    document.getElementById("carrito").innerHTML = total;
}

document.getElementById("boton6").onclick = function(){
    total = total + "<img src='../imagenes/ropa_m/vestido.webp' style='height:100px; padding-bottom:10px;'> Vestido <br>"; 
    alert("Su compra se añadio al carrito");
    document.getElementById("carrito").innerHTML = total;
}

document.getElementById("boton3").onclick = function(){
    total = total + "<img src='../imagenes/ropa_m/camiseta.jpg' style='height:100px; padding-bottom:10px;'> Camiseta <br>"; 
    alert("Su compra se añadio al carrito");
    document.getElementById("carrito").innerHTML = total;
}