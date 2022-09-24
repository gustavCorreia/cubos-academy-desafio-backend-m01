//? Numa mesa de poker existe um valor mínimo de dinheiro que você precisa ter para poder jogar naquela mesa. Contudo, há também um limite máximo, pois jogadores com muito mais dinheiro na mesa levam vantagem. Faça um programa que selecione dentre um lista de valores, apenas aqueles que são permitidos para se jogar numa determiada mesa de poker.

//? Input Format: A entrada é costituida de 3 variáveis:

//?     min é o mínimo necessário para se poder jogar nesta mesa. É necessário ter o mínimo ou mais.
//?     max é o máximo permitido para se poder jogar nesta mesa. É necessário ter o máximo, ou menos.
//?     valores é um array que contém os valores com os quais o jogadores estão tentando sentar na mesa para jogar

//? Constraints: A lista tem de 1 a 1000 itens.

//? Output Format: Imprima na tela a lista contendo apeas os valores que são autorizados a jogar nessa mesa, mantendo a mesma ordem da entrada.

//? Sample Input 0: 2 | 10 | 0 5 6 10 11.

//? Sample Output 0: [ 5, 6, 10 ];

//? Sample Input 1: 1 | 1 | 1 2 3 4 5 6 7 8 9;

//? Sample Output 1: [ 1 ];


//* Resposta;
const solucao = (min, max, valores) => {
    valores = valores.filter(valor => { return valor >= min && valor <= max && valor !== 0; });
    console.log(valores);
};

//* Testes;

solucao(2, 10, [0, 5, 6, 10, 11]);
solucao(1, 1, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
solucao(5, 10, [0, 11, 23, 3, 5, 9, 8, 0, 3, 4]);
solucao(1, 3, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
solucao(50, 100, [30, 20, 55, 89, 99, 100, 123]);