let num =[1,1,1,1,1,1,1,1,1,1]
let posicion = parseInt(window.prompt("Dime un número entre 0 y 9"))
while(posicion>=0){
console.log(num[posicion])
num[posicion] = num[posicion]*2
console.log(num)
posicion = parseInt(window.prompt("Dime un número entre 0 y 9"))
}