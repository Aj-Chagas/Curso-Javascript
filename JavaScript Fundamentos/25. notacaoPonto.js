console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
//obj1['nome'] = 'Bola2'
console.log(obj1.nome)

function obj(nome){
    this.nome = nome
    this.exec  = function(){
        console.log('Exec..')
    }
}

const obj2 = new obj('Cadeira')
const obj3 = new obj('Mesa')
const obj4 = new obj()

console.log(obj2.nome)
console.log(obj3.nome)
obj4.exec()
