console.log('Busca binária');

let indice = 18;

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function buscaBinaria(indice, lista) {
    let inicio = 0;
    let fim = lista.length - 1;

    while (inicio <= fim) {
        let meio = Math.floor((inicio + fim) / 2);

        if (lista[meio] === indice) {
            return meio;
        } else if (lista[meio] < indice) {
            inicio = meio + 1;
        } else {
            fim = meio - 1;
        }
    }

    return -1;
}

const posicao = buscaBinaria(indice, lista);

if (posicao !== -1) {
    console.log(`O número ${indice} está na posição ${posicao}`);
} else {
    console.log(`O número ${indice} não foi encontrado na lista`);
}
