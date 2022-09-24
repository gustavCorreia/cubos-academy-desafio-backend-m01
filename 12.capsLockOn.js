//? vOCÊ ESTÁ DESENVOLVENDO UM FORMULÁRIO DE CADASTRO E NOS PRIMEIROS TESTES DE USABILIDADE COM USUÁRIOS REAIS NOTOU ALGO PECULIAR: mUITOS USUÁRIOS PREENCHEM O FORMULÁRIO TODO COM A TECLA cAPS lOCK ATIVA, DEIXANDO TUDO BEM MENOS AGRADÁVEL DE LER. a SOLUÇÃO ESCOLHIDA NO dAILY DO DIA SEGUINTE FOI DE DETECTAR QUANDO O USUÁRIO ESTÁ ESCREVENDO DESSA FORMA E CORRIGIR AUTOMATICAMENTE. vOCÊ DEVE AGORA ESCREVER ESSE ALGORITMO.

//? cONSIDERAMOS QUE UMA PALAVRA FOI ESCRITA COM cAPS lOCK SE OU TODAS AS SUAS LETRAS FOREM MAIÚSCULAS OU SE A PRIMEIRA FOR MINÚSCULA E TODAS AS OUTRAS MAIÚSCULAS. a CORREÇÃO NESSES CASOS É INVERTER TODAS AS LETRAS.

//? Input Format: a ENTRADA CONSISTE DE UMA ÚNICA PALAVRA CONTENDO APENAS LETRAS LATINAS (A-Z), MINÚSCULAS OU MAIÚSCULAS.

//? Constraints: uMA PALAVRA POSSUI NO MÁXIMO 100 LETRAS.

//? Output Format: iMPRIMA A PALAVRA CORRIGIDA, CASO O ALGORITMO TENHA DETECTADO QUE ELA FOI ESCRITA COM cAPS lOCK ATIVO.

//? Sample Input 0: cAPS

//? Sample Output 0: Caps

//? Sample Input 1: lock

//? Sample Output 1: lock

const processData = (input) => {
    if (input == input.toUpperCase()) {
        palavra = input.toLowerCase();
    } else if (input[0] == input[0].toLowerCase() && input.substr(1) == input.substr(1).toUpperCase()) {
        palavra = input[0].toUpperCase() + input.substring(1).toLowerCase();
    } else if (input[0] == input[0].toUpperCase() && input.substr(1) == input.substr(1).toLowerCase()) {
        palavra = input;
    } else {
        palavra = input;
    }
    console.log(palavra);
};

processData('cAPS');
processData('lock');
processData('FZZQVEYVZUSRLOZXGIBCHVXLIPOVXLSLUWZGVXLXQMKANQWTJBALFFNBDTXNDITTHCFBUGLWCKKCBUFQZDDNSBUBBVRQEIMROAHT');