//? Um determinado evento é permitido apenas para maiores de idade. Através de um lista com as idades dos potenciais participantes, seu objetivo é fazer um programa que determine qual a idade da pessoa mais nova, dentre os que podem participar (maiores de idade).

//? Input Format: A entrada é um array com as idades das pessoas que tentam participar.

//? Constraints: A lista contém de 1 a 1000 itens.

//? Output Format: Imprima na tela a idade da pessoa mais jovem que pode participar. Se ninguém puder participar, imprima na tela a mensagem CRESCA E APARECA.

//? Sample Input 0: 12 18 27.

//? Sample Output 0: 18.

const solucao = (lista) => {
    let maiores = lista.filter(item => item >= 18);
    if (maiores.length === 0) {
        console.log('CRESCA E APARECA');
    } else {
        console.log(Math.min(...maiores));
    }
};

//* Teste;
solucao([12, 18, 27]);
solucao([2, 20, 54, 6, 23, 65, 9, 34, 76, 3, 6]);
solucao([5, 55, 765, 456, 4534, 234, 234, 324, 4, 5567, 76]);
solucao([9, 347, 3, 65, 213, 656, 35, 46, 1, 57, 34, 87, 3]);
solucao([23, 5, 66, 1, 435, 7, 76, 345, 7, 5, 5, 9, 33, 78, 5, 25, 788, 99]);
solucao([5, 18, 45, 56]);
solucao([9999999999, 9999999999, 9999999999, 9999999999, 9999999999, 9999999999, 9999999999]);
solucao([5, 5, 5, 5, 5, 5]);
solucao([17, 17, 17, 17]);