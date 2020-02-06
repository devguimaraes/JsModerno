/*

//Exercicio 1 - JS Enlouquent 

let contador = 0;
let msg = "#";

for(contador = 0; contador <= 6; contador++){
    console.log(msg);
    msg += "#";
}

//Exercicio 2

for(let contar = 1; contar <= 100; contar++){
    if(contar % 3 == 0 && contar % 5 == 0){
        console.log("FizzBuzz");
    }else if (contar % 3 == 0) {
       console.log("Fizz");
    }else if (contar % 5 == 0) {
        console.log("Buzz");
     }else{
        console.log(contar);
    }
}



let size = 8;
let board = "";

for(let x = 0; x < size; x++){
    for(y = 0; y < size; y++){
        if((x + y) % 2 == 0){
            board += " ";
        }else {
            board += "#";
        }
    }
    board += "\n";
}

console.log(board);
*/
