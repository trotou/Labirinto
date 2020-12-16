let map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
]

let labirinto = document.getElementById('labirinto')

let guia = document.getElementById('guia')

let jogador = document.createElement('div')
jogador.id = 'jogador'
labirinto.appendChild(jogador)

function criaMaze(){
    for(let i = 0; i < 15; i++){
        for(let q = 0; q < 21; q++){
            if(map[i][q] === 'W'){
                let parede = document.createElement('div')
                parede.className = 'W'
                parede.id = 'parede'
                labirinto.appendChild(parede)
            }
            if(map[i][q] === ' ' || map[i][q] === 'F' || map[i][q] === 'S'){
                let piso = document.createElement('div')
                piso.className = 'P' + i + q
                piso.id = 'piso'
                labirinto.appendChild(piso)
            }
        }
    }
    
}
criaMaze()

let onde = [9, 0]

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    if(keyName === 'ArrowDown'){
        if(map[onde[0]+1][onde[1]] != 'W' && map[onde[0]+1][onde[1]] != undefined){
            boxTop += 6.8
            onde[0] += 1
        }
    }
    if(keyName === 'ArrowUp'){
        if(map[onde[0]-1][onde[1]] != 'W' && map[onde[0]-1][onde[1]] != undefined){
            boxTop -= 6.8
            onde[0] -= 1
        }
    }
    if(keyName === 'ArrowLeft'){
        if(map[onde[0]][onde[1]-1] != 'W' && map[onde[0]][onde[1]-1] != undefined){
            boxLeft -= 4.8
            onde[1] -= 1
        }
    }
    if(keyName === 'ArrowRight'){
       if(map[onde[0]][onde[1]+1] != 'W' && map[onde[0]][onde[1]+1] != undefined){
           boxLeft += 4.8
           onde[1] += 1
           if(onde[0] === 8 && onde[1] === 20) {
            labirinto.style.display = 'none'
            guia.style.display = 'none'
            document.body.style.backgroundImage = 'url("comeu.jpg")'
        }
       }
    }

    jogador.style.top = boxTop + '%'
    jogador.style.left = boxLeft + '%'
    
  })
  
  let boxTop = 61.9
  let boxLeft = 0.9
