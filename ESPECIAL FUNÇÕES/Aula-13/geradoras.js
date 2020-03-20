//Aula sobre funções geradoras
function* geradora1(){
    
    yield 'Valor 1';


    yield 'Valor 2';


    yield 'Valor 3';
}

function* contador(){
    let i = 0;
    while(i < 100){
       
       yield i
       i++;
        
    }

   
}

function* geradora2(){
    yield 0;
    yield 1;
    yield 2;
}


function* geradora4(){
    yield* geradora1()
    yield* geradora2();
    yield 3;
    yield 4;
    yield 5;
}

const oficinaG3 = geradora4();
for(let i of oficinaG3){
    console.log(i)
}