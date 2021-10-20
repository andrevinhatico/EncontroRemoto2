// Usando o laço WHILE com INTERPOLAÇÂO


let listaAlunos = ["Andre", "Alan", "Flavio", "Wagner", "Valnei", "Luis", "Lazaro", "Adriano" ]; //lista de alunos

alunos = listaAlunos.length; //variavel que recebe numero de alunos 

let count = 0; // Iniciando o contador para o laço
console.log(`Total de Alunos - ${alunos}`); // Exibição do total de alunos 

while (count < alunos) {

    if (count == 0) { // se o indice da lista 0 executar o laço
        const nomeAluno = listaAlunos[count]; // constante que irá conter o nome do aluno da posição 0 da lista
        console.log(`${count} : Zero - ${nomeAluno}`); // exibição do indice e nome do aluno com interpolação       
    } else if (count % 2 != 0) { // se o indice da lista numero impar, executar o laço
        const nomeAluno = listaAlunos[count]; // constante que irá conter o nome do aluno da posição numero impar da lista
        console.log(`${count} : Zero - ${nomeAluno}`); // exibição do indice e nome do aluno com interpolação 
    } else { // se o indice da lista nem zero nem impar, executar o laço
        const nomeAluno = listaAlunos[count]; // constante que irá conter o nome do aluno da posição numero impar da lista
        console.log(`${count} : Zero - ${nomeAluno}`); // exibição do indice e nome do aluno com interpolação 
    }
    count++;    
}