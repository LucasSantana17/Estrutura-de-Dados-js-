//Algoritmo de ordenação por inserção (INSERTION SORT);
 const input = require('prompt-sync')({sigint:true});

var array = [5,3,2,4,1];

console.log('Digite a sequencia de números que deseja ordenar.');

for(var i = 0; i < 5 ; i++){
    var numero = parseInt(input(': '))
    array.push(numero);
}

for( var x = 1; x < array.length; x ++){
     var j = x-1;
     var eleito = array[x];
    while(j >= 0 && array[j] > eleito ){
        array[j+1] = array [j];
        j = j - 1;
    }
    array[j+1] = eleito;
}

console.log(array);


