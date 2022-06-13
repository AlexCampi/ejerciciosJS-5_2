let num = [0,0,0,0,0,0,0,0,0,0,0]
let posicion = parseInt(window.prompt("Dime un numero entre 0 y 10"))
do{
        if(posicion>=0 && posicion<=10){
        num[posicion] = num[posicion]+1
        for(let i=0;i<11;i++){
            console.log(`${i}     ${num[i]}`)
        }
        posicion = parseInt(window.prompt("Dime un numero entre 0 y 10"))
    }else if(posicion>10){
        window.alert("Ese número no es correcto")
        posicion = parseInt(window.prompt("Dime un numero entre 0 y 10"))
    } else if(posicion<0){
        for(let i=0;i<11;i++){
            console.log(`${i}     ${num[i]}`)
        }
    }
} while(posicion>=0)