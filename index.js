// Usando o laço FOR com CONCATENAÇÃO 

let listaAlunos = ["Andre", "Alan", "Flavio", "Wagner", "Valnei", "Luis", "Lazaro", "Adriano" ]; //lista de alunos

alunos = listaAlunos.length; //variavel que recebe numero de alunos 

console.log("Total de Alunos "+ "- "+ alunos); // Exibição do total de alunos 

for (let i = 0; i < alunos; i++) {

    if (i == 0) { // se o indice da lista 0 executar o laço
        const nomeAluno = listaAlunos[i]; // constante que irá conter o nome do aluno da posição 0 da lista
        console.log(i + ": Zero - " + nomeAluno); // exibição do indice e nome do aluno com concatenação       
    } else if (i % 2 != 0) { // se o indice da lista numero impar, executar o laço
        const nomeAluno = listaAlunos[i]; // constante que irá conter o nome do aluno da posição numero impar da lista
        console.log(i + ": Impar - " + nomeAluno); // exibição do indice e nome do aluno com concatenação 
    } else { // se o indice da lista nem zero nem impar, executar o laço
        const nomeAluno = listaAlunos[i]; // constante que irá conter o nome do aluno da posição numero impar da lista
        console.log(i + ": Par - " + nomeAluno); // exibição do indice e nome do aluno com concatenação 
    }
    
}





