//Estrategia melhor estratégia
function soma3(a=1, b=1, c=1){
    return a + b + c
}

//estrategia 1
//pode zerar erros quando o valor 0 é passado
function soma1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

//estrategia 2, 3, 4
function soma2(a, b, c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1 //dentro de arguments existe o index 1 
    c = isNaN(c) ? 1 : c   //mais segura depois da melhor estrategia

    return a + b + c 
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0, 0))
console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0, 0))
console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0, 0))
