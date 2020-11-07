var clase = document.getElementsByClassName("btn btn-primary");

for(i = 0;i<clase.length;i++){
    clase[i].onclick = function(){
        alert("gracias por su compra");
    }
}

