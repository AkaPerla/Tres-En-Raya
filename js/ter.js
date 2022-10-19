onload=principal;

 let combinacionesGanadoras = [
    [0,1,2], //top row
    [3,4,5], //middle row
    [6,7,8], //bottom row
    [0,3,6], //left column
    [1,4,7], //middle column
    [2,5,9], //right column
    [0,4,8],    
    [2,4,6]
]

let fin = false
let casillas = [0,0,0,0,0,0,0,0,0]

let jug1 = true
let cont = 0
function principal(){
    dibujaTablero();
}

function dibujaTablero() {
    let tablero = document.getElementById("tableroId");

    for (let index = 0; index < 9; index++) {
        let casilla = document.createElement("div");
        casilla.class="casilla";
        let imagen = document.createElement("img");
        imagen.setAttribute("src","img/blanco.png");
        imagen.setAttribute("onclick","pinchado(this,"+index+")");

        casilla.appendChild(imagen);
        tablero.appendChild(casilla);
    }
}

function pinchado(imagen,pos) {
    if(!fin){
        if (jug1 && casillas[pos]===0 ){
            imagen.setAttribute("src","img/X.png");
            jug1 = false
            casillas[pos] = 1
            comprobarCasilla(pos)
            comprobarGanador(cont)     
        }else if(jug1 === false & casillas[pos]===0){
            imagen.setAttribute("src","img/o.png");
            casillas[pos] = 2
            comprobarCasilla(pos)
            jug1 = true
            comprobarGanador(cont)
            
        }
    }
    console.log(cont)
}

function comprobarCasilla(pos){
    let casillaVacia = true   
    if(casillas[pos] === 1 || casillas[pos] === 2 ){
        casillaVacia = false
    }
    cont++
    return casillaVacia
}

function comprobarGanador(cont) {
    if((casillas[0] === 1 && casillas[1]===1 && casillas[2]==1 ) || 
    (casillas[3] === 1 && casillas[4]==1 && casillas[5]==1 ) ||
    (casillas[6] === 1 && casillas[7]==1 && casillas[8]==1 ) ||
    (casillas[0] === 1 && casillas[3]==1 && casillas[6]==1 ) ||
    (casillas[1] === 1 && casillas[4]==1 && casillas[7]==1 ) ||
    (casillas[2] === 1 && casillas[5]==1 && casillas[9]==1 ) ||
    (casillas[0] === 1 && casillas[4]==1 && casillas[8]==1 ) ||
    (casillas[2] === 1 && casillas[4]==1 && casillas[6]==1 )){
       mensaje("Gana X")
       fin = true
    }
    
    if((casillas[0] === 2 && casillas[1]===2 && casillas[2]===2 ) || 
    (casillas[3] === 2 && casillas[4]==2 && casillas[5]==2 ) ||
    (casillas[6] === 2 && casillas[7]==2 && casillas[8]==2 ) ||
    (casillas[0] === 2 && casillas[3]==2 && casillas[6]==2 ) ||
    (casillas[1] === 2 && casillas[4]==2 && casillas[7]==2 ) ||
    (casillas[2] === 2 && casillas[5]==2 && casillas[9]==2 ) ||
    (casillas[0] === 2 && casillas[4]==2 && casillas[8]==2 ) ||
    (casillas[2] === 2 && casillas[4]==2 && casillas[6]==2 )){
        console.log()
        mensaje("Gana O")
        fin = true
    }
    
    if(cont >= 9){
        mensaje("Empate")
        fin=true
    }   
}

function mensaje(message){
    let tablero = document.getElementById("tableroId");

    let banner = document.createElement('div')
    banner.setAttribute("id","banner")

    let titulo = document.createElement('h1')
    titulo.setAttribute("id","titulo")
    titulo.innerText = message

    banner.appendChild(titulo)
    tablero.appendChild(banner)
}