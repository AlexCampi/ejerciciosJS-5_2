let user = []
for(let i=0; i<3; i++){
    user[i]=parseInt(window.prompt("Dime un número"))
}

if(user[0]<user[1] && user[0]<user[2]){
    window.alert(user[0])
} else if(user[1]<user[0] && user[1]<user[2]){
    window.alert(user[1])
} else{
    window.alert(user[2])
}