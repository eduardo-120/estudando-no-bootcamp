// cria uma programa que caucula a média
// as notas entre os alunos e envia
// mensagem do cálculo da média.


const aluno01 = 'Duzão';
const notaaluno01 = 1.0;

const aluno02 = 'Duzilho';
const notaaluno02 = 1.5;

const aluno03 = 'Du';
const notaaluno03 = 1.0;

// se amédia for maior que 5, parabenizar a turma 

const média = (notaaluno01 + notaaluno02 + notaaluno03) / 3

if (média > 5) {
    console.log(`A nota foi de ${média}, Parabéns`)
} else {
    console.log('A média é menos que 5.')
}

console.log(aluno01, notaaluno01);
console.log(aluno02, notaaluno02);

console.log('Média dos alunos no total ', média);
