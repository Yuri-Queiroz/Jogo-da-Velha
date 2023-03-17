let escolha = window.location.search;
escolha = escolha.replace('?', '');

let casasRiscadas = 0;
let resultado;
let deNovo;
let vez = 'minha';

const quadrados = document.querySelectorAll('div.flutuar')

function mudar(event){
    let casaClicada;
    let elemento;
    let valor;
    elemento = event.target;
    casaClicada = elemento.id;
    
    if(elemento.className === 'flutuar' && vez === 'minha'){
        elemento.value = escolha;
        valor = elemento.value;
        let riscar = document.createElement('h1');
        riscar.innerText = valor;
        elemento.appendChild(riscar);
        casasRiscadas++;
        event.target.className = ' marcado';
        deNovo = false;
        vez = 'dele';
    }else{
        alert('Atenção: Espere sua vez e jogue em uma casa válida');
        deNovo = true;
    }
  

    switch(casaClicada){
        case 'um':
            if(quadrados[0].value == escolha && quadrados[1].value == escolha && quadrados[2].value == escolha){
                window.location.href = 'vitoria.html';
                resultado = 'venceu';
            }else if(quadrados[0].value == escolha && quadrados[3].value == escolha && quadrados[6].value == escolha){
                window.location.href = 'vitoria.html';
                resultado = 'venceu';
            }else if(quadrados[0].value === escolha && quadrados[4].value == escolha && quadrados[8].value == escolha){
                window.location.href = 'vitoria.html';
                resultado = 'venceu';
            }
            break;
        case 'dois':
            if((quadrados[1].value == escolha && quadrados[0].value == escolha && quadrados[2].value == escolha)){
                window.location.href = 'vitoria.html';
                resultado = 'venceu';
            }else if((quadrados[1].value == escolha && quadrados[4].value == escolha && quadrados[7].value)){
                window.location.href = 'vitoria.html';
                resultado = 'venceu';
            }
            break;
        case 'tres':
            if((quadrados[2].value == escolha && quadrados[1].value == escolha && quadrados[0].value == escolha)){
                window.location.href = 'vitoria.html';
                resultado = 'venceu';
            } else if((quadrados[2].value == escolha && quadrados[5].value == escolha && quadrados[8].value == escolha)){
                window.location.href = 'vitoria.html';
                resultado = 'venceu';
            }else if((quadrados[2].value == escolha && quadrados[4].value == escolha && quadrados[6].value === escolha)){
                window.location.href = 'vitoria.html';
                resultado = 'venceu';
            }
            break;
        case 'quatro':
            if((quadrados[3].value == escolha && quadrados[0].value == escolha && quadrados[6].value == escolha)){
                window.location.href = 'vitoria.html';
                resultado = 'venceu';
            }else if((quadrados[3].value == escolha && quadrados[4].value == escolha && quadrados[5].value == escolha)){
                window.location.href = 'vitoria.html';
                resultado = 'venceu';
            }
            break;
        case 'cinco':
            if((quadrados[4].value == escolha && quadrados[1].value == escolha && quadrados[7].value == escolha)){
                window.location.href = 'vitoria.html';
                resultado = 'venceu';
            } else if((quadrados[4].value == escolha && quadrados[0].value == escolha && quadrados[8].value == escolha)){
                window.location.href = 'vitoria.html';
                resultado = 'venceu';
            }else if((quadrados[4].value == escolha && quadrados[2].value == escolha && quadrados[6].value === escolha)){
                window.location.href = 'vitoria.html';
                resultado = 'venceu';
            } else if((quadrados[4].value == escolha && quadrados[3].value == escolha && quadrados[5].value === escolha)){
                window.location.href = 'vitoria.html';
                resultado = 'venceu';
            }
            break;
        case 'seis':
            if((quadrados[5].value == escolha && quadrados[2].value == escolha && quadrados[8].value == escolha)){
                window.location.href = 'vitoria.html';
                resultado = 'venceu';
            }else if((quadrados[5].value == escolha && quadrados[4].value == escolha && quadrados[3].value == escolha)){
                window.location.href = 'vitoria.html';
                resultado = 'venceu';
            }
            break;
        case 'sete':
            if((quadrados[6].value == escolha && quadrados[7].value == escolha && quadrados[8].value == escolha)){
                window.location.href = 'vitoria.html';
                resultado = 'venceu';
            }else if((quadrados[6].value == escolha && quadrados[3].value == escolha && quadrados[0].value == escolha)){
                window.location.href = 'vitoria.html';
                resultado = 'venceu';
            }else if((quadrados[6].value == escolha && quadrados[4].value == escolha && quadrados[2].value === escolha)){
                window.location.href = 'vitoria.html';
                resultado = 'venceu';
            }
            break;
        case 'oito':
            if((quadrados[7].value == escolha && quadrados[6].value == escolha && quadrados[8].value == escolha)){
                window.location.href = 'vitoria.html';
                resultado = 'venceu';
            }else if((quadrados[7].value == escolha && quadrados[4].value == escolha && quadrados[1].value == escolha)){
                window.location.href = 'vitoria.html';
                resultado = 'venceu';
            }
            break;
        case 'nove': 
        if((quadrados[8].value == escolha && quadrados[7].value == escolha && quadrados[6].value == escolha)){
            window.location.href = 'vitoria.html';
            resultado = 'venceu';
        }else if((quadrados[8].value == escolha && quadrados[5].value == escolha && quadrados[2].value == escolha)){
            window.location.href = 'vitoria.html';
            resultado = 'venceu';
        }else if((quadrados[8].value == escolha && quadrados[4].value == escolha && quadrados[0].value === escolha)){
            window.location.href = 'vitoria.html';
            resultado = 'venceu';
        }
            break;    
    }

    if(casasRiscadas == 9 && (resultado === undefined)){
        window.location.href = 'empatou.html';
    }

    if(casasRiscadas < 9 && deNovo !== true && vez === 'dele'){
        adversario();
    }
}

function adversario(){
    let minhaFigura;
    
    if(escolha === 'x'){
        minhaFigura = 'o';
    }else{
        minhaFigura = 'x';
    }

    let jogada = Math.floor(Math.random()*9);
    let element = quadrados[jogada];
    let casaEscolhida;

    setTimeout(() => {
        if(element.value !== undefined){
            while(element.value !== undefined){
                jogada = Math.floor(Math.random()*9);
                element = quadrados[jogada];
            }

            let riscar = document.createElement('h1');
            casaEscolhida = element.id;
            element.value = minhaFigura;
            riscar.innerText = minhaFigura;
            element.appendChild(riscar);
            casasRiscadas++;
            vez = 'minha';
            
            switch(casaEscolhida){
                case 'um':
                    if((quadrados[0].value !== escolha && quadrados[0].value !== undefined) && (quadrados[1].value !== escolha && quadrados[1].value !== undefined ) && (quadrados[2].value !== escolha && quadrados[2].value !== undefined)){
                        window.location.href = 'derrota.html';
                        resultado = 'perdeu';
                    }else if((quadrados[0].value !== escolha && quadrados[0].value !== undefined) && (quadrados[3].value !== escolha && quadrados[3].value !== undefined) && (quadrados[6].value !== escolha && quadrados[6].value !== undefined)){
                        window.location.href = 'derrota.html';
                        resultado = 'perdeu';
                    }else if((quadrados[0].value !== escolha && quadrados[0].value !== undefined) && (quadrados[4].value !== escolha && quadrados[4].value !== undefined) && (quadrados[8].value !== escolha && quadrados[8].value !== undefined)){
                        window.location.href = 'derrota.html';
                        resultado = 'perdeu';
                    }
                    break;
                    case 'dois':
                        if((quadrados[1].value !== escolha && quadrados[1].value !== undefined) && (quadrados[0].value !== escolha && quadrados[0].value !== undefined) && (quadrados[2].value !== escolha && quadrados[2].value !== undefined)){
                        window.location.href = 'derrota.html';
                        resultado = 'perdeu';
                    }else if((quadrados[1].value !== escolha && quadrados[1].value !== undefined) && (quadrados[4].value !== escolha && quadrados[4].value !== undefined) && (quadrados[7].value !== escolha && quadrados[7].value !== undefined)){
                        window.location.href = 'derrota.html';
                        resultado = 'perdeu';
                    }
                    break;
                    case 'tres':
                    if((quadrados[2].value !== escolha && quadrados[2].value !== undefined) && (quadrados[1].value !== escolha && quadrados[1].value !== undefined) && (quadrados[0].value !== escolha && quadrados[0].value !== undefined)){
                        window.location.href = 'derrota.html';
                        resultado = 'perdeu';
                    } else if((quadrados[2].value !== escolha && quadrados[2].value !== undefined) && (quadrados[5].value !== escolha && quadrados[5].value !== undefined) && (quadrados[8].value !== escolha && quadrados[8].value !== undefined)){
                        window.location.href = 'derrota.html';
                        resultado = 'perdeu';
                    }else if((quadrados[2].value !== escolha && quadrados[2].value !== undefined) && (quadrados[4].value !== escolha && quadrados[4].value !== undefined) && (quadrados[6].value !== escolha && quadrados[6].value !== undefined)){
                        window.location.href = 'derrota.html';
                        resultado = 'perdeu';
                    }
                    break;
                    case 'quatro':
                    if((quadrados[3].value !== escolha && quadrados[3].value !== undefined) && (quadrados[0].value !== escolha && quadrados[0].value !== undefined) && (quadrados[6].value !== escolha && quadrados[6].value !== undefined)){
                        window.location.href = 'derrota.html';
                        resultado = 'perdeu';
                    }else if((quadrados[3].value !== escolha && quadrados[3].value !== undefined) && (quadrados[4].value !== escolha && quadrados[4].value !== undefined) && (quadrados[5].value !== escolha && quadrados[5].value !== undefined)){
                        window.location.href = 'derrota.html';
                        resultado = 'perdeu';
                    }
                    break;
                    case 'cinco':
                        if((quadrados[4].value !== escolha && quadrados[4].value !== undefined) && (quadrados[3].value !== escolha && quadrados[3].value !== undefined) && (quadrados[5].value !== escolha && quadrados[5].value !== undefined)){
                            window.location.href = 'derrota.html';
                            resultado = 'perdeu';
                        }else if((quadrados[4].value !== escolha && quadrados[4].value !== undefined) && (quadrados[1].value !== escolha && quadrados[1].value !== undefined) && (quadrados[7].value !== escolha && quadrados[7].value !== undefined)){
                            window.location.href = 'derrota.html';
                            resultado = 'perdeu';
                        }else if((quadrados[4].value !== escolha && quadrados[4].value !== undefined) && (quadrados[2].value !== escolha && quadrados[2].value !== undefined) && (quadrados[6].value !== escolha && quadrados[6].value !== undefined)){
                            window.location.href = 'derrota.html';
                            resultado = 'perdeu';
                        }else if((quadrados[4].value !== escolha && quadrados[4].value !== undefined) && (quadrados[0].value !== escolha && quadrados[0].value !== undefined) && (quadrados[8].value !== escolha && quadrados[8].value !== undefined)){
                            window.location.href = 'derrota.html';
                            resultado = 'perdeu';
                        }
                        break;
                        case 'seis':
                            if((quadrados[5].value !== escolha && quadrados[5].value !== undefined) && (quadrados[2].value !== escolha && quadrados[2].value !== undefined) && (quadrados[8].value !== escolha && quadrados[8].value !== undefined)){
                        window.location.href = 'derrota.html';
                        resultado = 'perdeu';
                    }else if((quadrados[5].value !== escolha && quadrados[5].value !== undefined) && (quadrados[4].value !== escolha && quadrados[4].value !== undefined) && (quadrados[3].value !== escolha && quadrados[3].value !== undefined)){
                        window.location.href = 'derrota.html';
                        resultado = 'perdeu';
                    }
                    break;
                case 'sete':
                    if((quadrados[6].value !== escolha && quadrados[6].value !== undefined) && (quadrados[7].value !== escolha && quadrados[7].value !== undefined) && (quadrados[8].value !== escolha && quadrados[8].value !== undefined)){
                        window.location.href = 'derrota.html';
                        resultado = 'perdeu';
                    }else if((quadrados[6].value !== escolha && quadrados[6].value !== undefined) && (quadrados[3].value !== escolha && quadrados[3].value !== undefined) && (quadrados[0].value !== escolha && quadrados[0] !== undefined)){
                        window.location.href = 'derrota.html';
                        resultado = 'perdeu';
                    }else if((quadrados[6].value !== escolha && quadrados[6].value !== undefined) && (quadrados[4].value !== escolha && quadrados[4].value !== undefined) && (quadrados[2].value !== escolha && quadrados[2].value !== undefined)){
                        window.location.href = 'derrota.html';
                        resultado = 'perdeu';
                    }
                    break;
                    case 'oito':
                        if((quadrados[7].value !== escolha && quadrados[7].value !== undefined) && (quadrados[6].value !== escolha && quadrados[6].value !== undefined) && (quadrados[8].value !== escolha && quadrados[8].value !== undefined)){
                            window.location.href = 'derrota.html';
                            resultado = 'perdeu';
                        }else if((quadrados[7].value !== escolha && quadrados[7].value !== undefined) && (quadrados[4].value !== escolha && quadrados[4].value !== undefined) && (quadrados[1].value !== escolha && quadrados[1].value !== undefined)){
                            window.location.href = 'derrota.html';
                            resultado = 'perdeu';
                        }
                        break;
                        case 'nove': 
                        if((quadrados[8].value !== escolha && quadrados[8].value !== undefined) && (quadrados[7].value !== escolha && quadrados[7].value !== undefined) && (quadrados[6].value !== escolha && quadrados[6].value !== undefined)){
                            window.location.href = 'derrota.html';
                            resultado = 'perdeu';
                        }else if((quadrados[8].value !== escolha && quadrados[8].value !== undefined) && (quadrados[5].value !== escolha && quadrados[5].value !== undefined) && (quadrados[2].value !== escolha && quadrados[2].value !== undefined)){
                            window.location.href = 'derrota.html';
                            resultado = 'perdeu';
                        }else if((quadrados[8].value !== escolha && quadrados[8].value !== undefined) && (quadrados[4].value !== escolha && quadrados[4].value !== undefined) && (quadrados[0].value !== escolha && quadrados[0] !== undefined)){
                            window.location.href = 'derrota.html';
                            resultado = 'perdeu';
                        }
                        break;    
                    }

                    if(casasRiscadas == 9 && (resultado === undefined)){
                window.location.href = 'empatou.html';
            }
        }
        else{
            element.value = minhaFigura;
            let riscando = document.createElement('h1');
            casaEscolhida = element.id;
            riscando.innerHTML = minhaFigura;
            element.appendChild(riscando);
            casasRiscadas++;
            vez = 'minha';
            
            switch(casaEscolhida){
                case 'um':
                    if((quadrados[0].value !== escolha && quadrados[0].value !== undefined) && (quadrados[1].value !== escolha && quadrados[1].value !== undefined ) && (quadrados[2].value !== escolha && quadrados[2].value !== undefined)){
                        window.location.href = 'derrota.html';
                        resultado = 'perdeu';
                    }else if((quadrados[0].value !== escolha && quadrados[0].value !== undefined) && (quadrados[3].value !== escolha && quadrados[3].value !== undefined) && (quadrados[6].value !== escolha && quadrados[6].value !== undefined)){
                        window.location.href = 'derrota.html';
                        resultado = 'perdeu';
                    }else if((quadrados[0].value !== escolha && quadrados[0].value !== undefined) && (quadrados[4].value !== escolha && quadrados[4].value !== undefined) && (quadrados[8].value !== escolha && quadrados[8].value !== undefined)){
                        window.location.href = 'derrota.html';
                        resultado = 'perdeu';
                    }
                    break;
                    case 'dois':
                        if((quadrados[1].value !== escolha && quadrados[1].value !== undefined) && (quadrados[0].value !== escolha && quadrados[0].value !== undefined) && (quadrados[2].value !== escolha && quadrados[2].value !== undefined)){
                        window.location.href = 'derrota.html';
                        resultado = 'perdeu';
                    }else if((quadrados[1].value !== escolha && quadrados[1].value !== undefined) && (quadrados[4].value !== escolha && quadrados[4].value !== undefined) && (quadrados[7].value !== escolha && quadrados[7].value !== undefined)){
                        window.location.href = 'derrota.html';
                        resultado = 'perdeu';
                    }
                    break;
                    case 'tres':
                    if((quadrados[2].value !== escolha && quadrados[2].value !== undefined) && (quadrados[1].value !== escolha && quadrados[1].value !== undefined) && (quadrados[0].value !== escolha && quadrados[0].value !== undefined)){
                        window.location.href = 'derrota.html';
                        resultado = 'perdeu';
                    } else if((quadrados[2].value !== escolha && quadrados[2].value !== undefined) && (quadrados[5].value !== escolha && quadrados[5].value !== undefined) && (quadrados[8].value !== escolha && quadrados[8].value !== undefined)){
                        window.location.href = 'derrota.html';
                        resultado = 'perdeu';
                    }else if((quadrados[2].value !== escolha && quadrados[2].value !== undefined) && (quadrados[4].value !== escolha && quadrados[4].value !== undefined) && (quadrados[6].value !== escolha && quadrados[6].value !== undefined)){
                        window.location.href = 'derrota.html';
                        resultado = 'perdeu';
                    }
                    break;
                    case 'quatro':
                    if((quadrados[3].value !== escolha && quadrados[3].value !== undefined) && (quadrados[0].value !== escolha && quadrados[0].value !== undefined) && (quadrados[6].value !== escolha && quadrados[6].value !== undefined)){
                        window.location.href = 'derrota.html';
                        resultado = 'perdeu';
                    }else if((quadrados[3].value !== escolha && quadrados[3].value !== undefined) && (quadrados[4].value !== escolha && quadrados[4].value !== undefined) && (quadrados[5].value !== escolha && quadrados[5].value !== undefined)){
                        window.location.href = 'derrota.html';
                        resultado = 'perdeu';
                    }
                    break;
                    case 'cinco':
                        if((quadrados[4].value !== escolha && quadrados[4].value !== undefined) && (quadrados[3].value !== escolha && quadrados[3].value !== undefined) && (quadrados[5].value !== escolha && quadrados[5].value !== undefined)){
                            window.location.href = 'derrota.html';
                            resultado = 'perdeu';
                        }else if((quadrados[4].value !== escolha && quadrados[4].value !== undefined) && (quadrados[1].value !== escolha && quadrados[1].value !== undefined) && (quadrados[7].value !== escolha && quadrados[7].value !== undefined)){
                            window.location.href = 'derrota.html';
                            resultado = 'perdeu';
                        }else if((quadrados[4].value !== escolha && quadrados[4].value !== undefined) && (quadrados[2].value !== escolha && quadrados[2].value !== undefined) && (quadrados[6].value !== escolha && quadrados[6].value !== undefined)){
                            window.location.href = 'derrota.html';
                            resultado = 'perdeu';
                        }else if((quadrados[4].value !== escolha && quadrados[4].value !== undefined) && (quadrados[0].value !== escolha && quadrados[0].value !== undefined) && (quadrados[8].value !== escolha && quadrados[8].value !== undefined)){
                            window.location.href = 'derrota.html';
                            resultado = 'perdeu';
                        }
                        break;
                        case 'seis':
                            if((quadrados[5].value !== escolha && quadrados[5].value !== undefined) && (quadrados[2].value !== escolha && quadrados[2].value !== undefined) && (quadrados[8].value !== escolha && quadrados[8].value !== undefined)){
                        window.location.href = 'derrota.html';
                        resultado = 'perdeu';
                    }else if((quadrados[5].value !== escolha && quadrados[5].value !== undefined) && (quadrados[4].value !== escolha && quadrados[4].value !== undefined) && (quadrados[3].value !== escolha && quadrados[3].value !== undefined)){
                        window.location.href = 'derrota.html';
                        resultado = 'perdeu';
                    }
                    break;
                case 'sete':
                    if((quadrados[6].value !== escolha && quadrados[6].value !== undefined) && (quadrados[7].value !== escolha && quadrados[7].value !== undefined) && (quadrados[8].value !== escolha && quadrados[8].value !== undefined)){
                        window.location.href = 'derrota.html';
                        resultado = 'perdeu';
                    }else if((quadrados[6].value !== escolha && quadrados[6].value !== undefined) && (quadrados[3].value !== escolha && quadrados[3].value !== undefined) && (quadrados[0].value !== escolha && quadrados[0] !== undefined)){
                        window.location.href = 'derrota.html';
                        resultado = 'perdeu';
                    }else if((quadrados[6].value !== escolha && quadrados[6].value !== undefined) && (quadrados[4].value !== escolha && quadrados[4].value !== undefined) && (quadrados[2].value !== escolha && quadrados[2].value !== undefined)){
                        window.location.href = 'derrota.html';
                        resultado = 'perdeu';
                    }
                    break;
                    case 'oito':
                        if((quadrados[7].value !== escolha && quadrados[7].value !== undefined) && (quadrados[6].value !== escolha && quadrados[6].value !== undefined) && (quadrados[8].value !== escolha && quadrados[8].value !== undefined)){
                            window.location.href = 'derrota.html';
                            resultado = 'perdeu';
                        }else if((quadrados[7].value !== escolha && quadrados[7].value !== undefined) && (quadrados[4].value !== escolha && quadrados[4].value !== undefined) && (quadrados[1].value !== escolha && quadrados[1].value !== undefined)){
                            window.location.href = 'derrota.html';
                            resultado = 'perdeu';
                        }
                        break;
                        case 'nove': 
                        if((quadrados[8].value !== escolha && quadrados[8].value !== undefined) && (quadrados[7].value !== escolha && quadrados[7].value !== undefined) && (quadrados[6].value !== escolha && quadrados[6].value !== undefined)){
                            window.location.href = 'derrota.html';
                            resultado = 'perdeu';
                        }else if((quadrados[8].value !== escolha && quadrados[8].value !== undefined) && (quadrados[5].value !== escolha && quadrados[5].value !== undefined) && (quadrados[2].value !== escolha && quadrados[2].value !== undefined)){
                            window.location.href = 'derrota.html';
                            resultado = 'perdeu';
                        }else if((quadrados[8].value !== escolha && quadrados[8].value !== undefined) && (quadrados[4].value !== escolha && quadrados[4].value !== undefined) && (quadrados[0].value !== escolha && quadrados[0] !== undefined)){
                            window.location.href = 'derrota.html';
                            resultado = 'perdeu';
                        }
                        break;    
                    }
            
            if(casasRiscadas == 9 && (resultado === undefined)){
                window.location.href = 'empatou.html';
            }
            
        }
    }, 2000);
}

for(let i = 0; i < quadrados.length; i++){
    quadrados[i].addEventListener('click', mudar);
}