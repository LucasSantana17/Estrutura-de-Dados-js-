//Algoritimo de ordenação SelectionSort


var array = [ 4 , 5 , 3, 1 , 2 ];

console.log(`Array desordenado: ${array}`);


for(var i = 0; i < array.length; i ++){
    var Eleito = array[i];
    for(var x = i + 1; x <= array.length-1 ; x ++){
        if(Eleito > array[x]){
            Eleito = array[x];
            array[x] = array[i];
            array[i] = Eleito;
        }
    }
}

console.log(`Array ordenado: ${array}`);