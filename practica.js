var nombre = prompt("Ingresa tu nombre, Este es un cuestionario sobre las olimpiadas");
var c = 0;
var i = 0;

var p1= prompt("¿Cuándo se realizará la inauguración de las Olimpiadas?\nA: Lunes 02 de octubre\nB: Viernes 29 de setiembre\nC:  Jueves 28 de setiembre");



if(p1 == "B"){
    var c = c + 1;
}else if(p1 == "A"){
    var i = i + 1; 
}else if (p1 == "C"){
    var i = i + 1;
}else{
    alert("Elige una de las opciones")
} 


var p2= prompt("¿De qué color es la promoción de 2do de secundaria? \nA: Celeste o Turquesa\nB:Rojo\nC:morado");
if(p2 == "A"){
    var c = c + 1;
}else if(p2 == "B"){
    var i = i + 1; 
}else if (p2 == "C"){
    var i = i + 1;
}else{
    alert("Elige una de lsa opciones")
} 




var p3= prompt("¿Cuál es el nuevo deporte incluido en este año?\nA: Futsal femenino\nB:Balonmano\nC:Marcha atlética")

if(p3 == "c"){
    var c = c + 1;
}else if(p3 == "A"){
    var i = i + 1; 
}else if (p3 == "B"){
    var i = i + 1;
}else{
    alert("Elige una de las opciones")
}


if(c > i){
    document.write(nombre + "¡Lo has hecho bien!<br>")
    document.write("Correctas: "+c);
    document.write("Incorrectas: " +i);
}else if(c < i){
    document.write(nombre + "Vuelve a intentarlo<br>")
    document.write("Correctas: "+c);
    document.write("Incorrectas: " +i);
}else{
    document.write(nombre + "Puedes hacerlo mejor<br>")
    document.write("Correctas: "+c);
    document.write("Incorrectas: " +i);
}