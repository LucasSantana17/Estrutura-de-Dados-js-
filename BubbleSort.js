
// Estrutura de Dados Bubble Sort js

const input = require('prompt-sync')({sigint:true});

console.log("Lista de números desordenados ");
var array = [];

    //Adição de números no vetor 
    for(var i=0;i < 5;i++){
         var numero = parseInt(input(": "));
        array.push(numero);
    }

    //Estrutra de ordenação bubble sort 
    var aux;
    for(let i=0;i < 5;i++){
        for(let x=0;x < array.length-1;x++){
            if(array[i]>array[x]){
                aux = array[x];
                array[x] = array[i];
                array[i] = aux;
            }
        }
    }

    //Mostrando os elementos do array
    console.log('Array ordenado: ')
    for(let z=0;z < 5;z++){
        console.log(`Bubble Sort: ${array[z]}`);
    }



