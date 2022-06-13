let edad = []
let suma = 0
for(let i=0; i<20; i++){
    edad[i] = parseInt(Math.random() * (35 - 18) + 18)
    suma+=edad[i]
}
console.log(parseInt(suma/20))