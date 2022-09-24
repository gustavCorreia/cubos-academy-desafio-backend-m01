//? Quando precisa-se escolher apenas uma pessoa aleatoriamente dentro de um grupo, é comum jogar "zerinho ou um" para sortear alguém. O jogo é muito simples: cada jogador joga 0 ou 1 com as mão. Aquele que for o único(a) a jogar zero ou um é o sorteado. Faça um programa que imprima o nome da pessoa que foi sorteada, ou NINGUEM, caso ninguém tenha sido sorteado(a).

//? Input Format:  A entrada será sempre um vetor de objetos chamado jogadores, em que cada objeto é uma pessoa, com o seguinte formato:

//? {
//?     nome: "Herbert",
//?     jogada: 0 //?será sempre 0 ou 1
//? }

//? Constraints: Pode-se assumir que sempre haverá pelo menos 3 pessoas jogando, ou seja, a entrada será sempre um vetor com pelo menos 3 itens. Você não precisa fazer nenhum código para checar isso.

//? Output Format: Imprima na tela o nome do jogador que foi sorteado.

//? Sample Input:

//? [
//?   {
//?     "nome": "Herman",
//?     "jogada": 1
//?   },
//?   {
//?     "nome": "Rhodes",
//?     "jogada": 0
//?   },
//?   {
//?     "nome": "Beach",
//?     "jogada": 0
//?   },
//?   {
//?     "nome": "Laurel",
//?     "jogada": 0
//?   },
//?   {
//?     "nome": "Beatrice",
//?     "jogada": 0
//?   },
//?   {
//?     "nome": "Alison",
//?     "jogada": 0
//?   },
//?   {
//?     "nome": "Saundra",
//?     "jogada": 0
//?   },
//?   {
//?     "nome": "Klein",
//?     "jogada": 0
//?   }
//? ]

//? Sample Output 0 :Herman

//* Resposta;

const solucao = (jogadores) => {
    let zero = jogadores.filter(jogador => jogador.jogada === 0),
        um = jogadores.filter(jogador => jogador.jogada === 1);

    if (um.length === 1) {
        console.log(um[0].nome);
    } else if (zero.length === 1) {
        console.log(zero[0].nome);
    } else { console.log('NINGUEM'); }
};

solucao([{
        "nome": "Mona",
        "jogada": 0
    },
    {
        "nome": "Mullins",
        "jogada": 0
    },
    {
        "nome": "Dolly",
        "jogada": 1
    },
    {
        "nome": "Wiley",
        "jogada": 1
    },
    {
        "nome": "Florence",
        "jogada": 0
    }
]);
solucao([{
        "nome": "Bette",
        "jogada": 0
    },
    {
        "nome": "Alexandra",
        "jogada": 1
    },
    {
        "nome": "Queen",
        "jogada": 1
    },
    {
        "nome": "Evelyn",
        "jogada": 1
    },
    {
        "nome": "Langley",
        "jogada": 0
    },
    {
        "nome": "Hansen",
        "jogada": 0
    },
    {
        "nome": "Madeline",
        "jogada": 0
    },
    {
        "nome": "Wendi",
        "jogada": 1
    }
]);
solucao([{
        "nome": "Herman",
        "jogada": 1
    },
    {
        "nome": "Rhodes",
        "jogada": 0
    },
    {
        "nome": "Beach",
        "jogada": 0
    },
    {
        "nome": "Laurel",
        "jogada": 0
    },
    {
        "nome": "Beatrice",
        "jogada": 0
    },
    {
        "nome": "Alison",
        "jogada": 0
    },
    {
        "nome": "Saundra",
        "jogada": 0
    },
    {
        "nome": "Klein",
        "jogada": 0
    }
]);
solucao([{
        "nome": "Kerri",
        "jogada": 1
    },
    {
        "nome": "Margaret",
        "jogada": 0
    },
    {
        "nome": "Erna",
        "jogada": 0
    },
    {
        "nome": "Mari",
        "jogada": 0
    },
    {
        "nome": "Kristy",
        "jogada": 1
    }
]);
solucao([{
        "nome": "Denise",
        "jogada": 1
    },
    {
        "nome": "Bowen",
        "jogada": 1
    },
    {
        "nome": "Brianna",
        "jogada": 0
    },
    {
        "nome": "Terry",
        "jogada": 0
    },
    {
        "nome": "Nolan",
        "jogada": 1
    },
    {
        "nome": "Davidson",
        "jogada": 1
    },
    {
        "nome": "Sheena",
        "jogada": 1
    },
    {
        "nome": "Henson",
        "jogada": 0
    },
    {
        "nome": "Bradley",
        "jogada": 1
    }
]);
solucao([{
        "nome": "Patterson",
        "jogada": 1
    },
    {
        "nome": "Olivia",
        "jogada": 0
    },
    {
        "nome": "Santana",
        "jogada": 0
    },
    {
        "nome": "Hillary",
        "jogada": 0
    }
]);
solucao([{
        "nome": "Natalia",
        "jogada": 1
    },
    {
        "nome": "Misty",
        "jogada": 1
    },
    {
        "nome": "Lorie",
        "jogada": 0
    },
    {
        "nome": "Theresa",
        "jogada": 1
    }
]);
solucao([{
        "nome": "Griffith",
        "jogada": 1
    },
    {
        "nome": "Viola",
        "jogada": 1
    },
    {
        "nome": "Leticia",
        "jogada": 0
    },
    {
        "nome": "Dixon",
        "jogada": 1
    },
    {
        "nome": "Young",
        "jogada": 1
    },
    {
        "nome": "Erickson",
        "jogada": 0
    },
    {
        "nome": "Maddox",
        "jogada": 1
    },
    {
        "nome": "Berg",
        "jogada": 1
    },
    {
        "nome": "Valencia",
        "jogada": 0
    }
]);
solucao([{
        "nome": "Calhoun",
        "jogada": 0
    },
    {
        "nome": "Giles",
        "jogada": 1
    },
    {
        "nome": "Avis",
        "jogada": 0
    }
]);
solucao([{
        "nome": "Melanie",
        "jogada": 1
    },
    {
        "nome": "Katherine",
        "jogada": 1
    },
    {
        "nome": "Karla",
        "jogada": 1
    },
    {
        "nome": "Farmer",
        "jogada": 0
    },
    {
        "nome": "Harmon",
        "jogada": 0
    },
    {
        "nome": "Elvia",
        "jogada": 0
    },
    {
        "nome": "Livingston",
        "jogada": 0
    }
]);
solucao([{
        "nome": "Paula",
        "jogada": 1
    },
    {
        "nome": "Bullock",
        "jogada": 0
    },
    {
        "nome": "Klein",
        "jogada": 0
    },
    {
        "nome": "Jana",
        "jogada": 1
    },
    {
        "nome": "Deana",
        "jogada": 1
    },
    {
        "nome": "Bass",
        "jogada": 1
    },
    {
        "nome": "Walker",
        "jogada": 0
    }
]);
solucao([{
        "nome": "Joy",
        "jogada": 0
    },
    {
        "nome": "Boyle",
        "jogada": 1
    },
    {
        "nome": "Fitzgerald",
        "jogada": 1
    },
    {
        "nome": "Cathryn",
        "jogada": 0
    },
    {
        "nome": "Linda",
        "jogada": 1
    }
]);
solucao([{
        "nome": "Marla",
        "jogada": 1
    },
    {
        "nome": "Sonia",
        "jogada": 0
    },
    {
        "nome": "Rivas",
        "jogada": 1
    }
]);