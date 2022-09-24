//? Um novo cofre foi desenvolvido com a mais moderna tecnologia em segurança e criptografia. Na porta do cofre há um teclado com todas as letras do alfabeto em que a pessoa pode digitar a senha predefinida para abrir a porta.

//? Durante alguns testes de rotina foi descoberto um bug na hora de validar a senha: O cofre ignora letras erradas durante a digitação da senha, desde que todas as letras da senha tenham sido digitadas na ordem correta.

//? Por exemplo, se a senha for “cubos” e for digitado “cuggbyos”, o cofre irá abrir.

//? Input Format: A entrada consistirá em duas linhas, na primeira linha estará a senha correta, de até S caracteres. Na segunda linha estará a palavra digitada pela pessoa, de até N caracteres.

//? Constraints: S ≤ 10^3 N ≤ 10^5

//? Output Format: Imprima “SIM” caso o cofre abra. Caso contrário, imprimir “NAO”.

//? Sample Input: cubos | cuggbyos

//? Sample Output 0: SIM

//? Sample Input 1: cubos | ewvelrabsocaeln

//? Sample Output 1: NAO


const processData = (input) => {
    input = input.trim().toLowerCase().split('\n');
    let senhaCorreta = input[0],
        senhaTentada = input[1],
        SenhaValida = 'SIM';

    senhaCorreta = Array.from(senhaCorreta);

    senhaCorreta.forEach(function(value) {
        if (senhaTentada.indexOf(value) == -1) {
            SenhaValida = 'NAO';
        } else {
            senhaTentada = senhaTentada.slice(senhaTentada.indexOf(value) + 1);
        }
    });

    console.log(SenhaValida);
};

processData('cubos\ncuggbyos');
processData('cubos\newvelrabsocaeln');