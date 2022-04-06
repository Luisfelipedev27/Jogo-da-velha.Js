const campos = document.querySelectorAll(".campo");
let checarTurno = true;

const PLAYER_X = "X";
const PLAYER_O = "O";
const COMBINACOES = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

document.addEventListener("click", (event) => {
    if(event.target.matches(".campo")) {
     jogar(event.target.id);
}
})
function jogar(id) {
    
    const campo = document.getElementById(id);
    turno = checarTurno ? PLAYER_X : PLAYER_O;
    campo.textContent = turno;
    campo.classList.add(turno);
    checarVencedor(turno);
}

function checarVencedor(turno) {
    const vencedor = COMBINACOES.some((comb) => {
        return comb.every((index) => {
            return campos[index].classList.contains(turno);
        })
    })
    
    if (vencedor) {
        encerrarJogo(turno)
    } else if (checarEmpate()) {
        encerrarJogo()
    } else {
        checarTurno = !checarTurno
    }

    function checarEmpate() {
        let x = 0
        let o = 0

        for (index in campos) {
            if(!isNaN(index)) {
            if(campos[index].classList.contains(PLAYER_X)) {
                x++
            }
            if(campos[index].classList.contains(PLAYER_O)) {
                o++
            }
            }
        }
        return x + o === 9 ? true : false
    }
    
    function encerrarJogo(vencedor = null) {
        if (vencedor) {
            console.log('O vencedor é ' + vencedor);
        } else {
            console.log('empatou')
        }
    }    }