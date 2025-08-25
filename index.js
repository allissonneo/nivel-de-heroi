// Instruções para entrega

// # 1️⃣ Desafio Classificador de nível de Herói

// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões

// ## Objetivo

// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante

// ## Saída
// Ao final deve se exibir uma mensagem:
// "O Herói de nome **{nome}** está no nível de **{nivel}**"
const readline = require('readline-sync');

const niveis = [
    { min: 10001, nome: "Radiante" },
    { min: 9001, nome: "Imortal" },
    { min: 8001, nome: "Ascendente" },
    { min: 7001, nome: "Platina" },
    { min: 5001, nome: "Ouro" },
    { min: 2001, nome: "Prata" },
    { min: 1001, nome: "Bronze" },
    { min: 0, nome: "Ferro" }
];
while (true) {
    let nome = readline.question("Digite o nome do Heroi ou FIM para sair: \n")
    switch (nome.toUpperCase()) {
        case "FIM":
            console.log("Fim do Programa!");
            process.exit();
        default:
            break;
    }
    let xp = parseInt(readline.question("Digite a quantidade de XP do Heroi: \n"), 10);

    if (isNaN(xp)) {
        console.log("Resposta invalida");
        continue;
    }

    let nivel = niveis.find(n => xp >= n.min).nome
    console.log(`O herói de nome ${nome} está no nível ${nivel}`)
}