//Algoritimo de ordenação SelectionSort

var array = [ 4 , 5 , 3, 1 , 2 ];

console.log(`Array desordenado: ${array}`);


for(var i = 0; i < array.length-1; i ++){
    var Eleito = array[i];
    for(var x = i + 2; x <= array.length; x ++){
        if(Eleito > array[x]){
            Eleito = array[x];
            array[x] = array[i];
            array[i] = Eleito;
        }
    }
}
//[][][][][][]
console.log(array);