const prompt = require('prompt-sync')();

//Refazer: 16,19,20

//Exercício 1
// let quantidadeCigarrosPorDia = parseFloat(prompt('Insira quantos cigarros você fuma por dia: '));
// let anosFumando = parseFloat(prompt('Insira quantos anos você já fumou: '));
// console.log(reducaoDoTempoDeVida(quantidadeCigarrosPorDia, anosFumando));


// function reducaoDoTempoDeVida(quantidadeCigarro, anosFumantes){
//   let minutosPerdidosPorAno = quantidadeCigarro * 10 * 365;
//   let minutosPerdidosNoTotal = minutosPerdidosPorAno * anosFumantes;
//   let diasPerdidos = minutosPerdidosNoTotal * 1440;
//   if(diasPerdidos === 1 ){
//     return `Você perdeu ${diasPerdidos} dia de vida.`
//   }else{
//     return `Você perdeu um total de ${diasPerdidos} dias de vida.`
//   }
// }


//Exercicio 2

// let velocidadeDoCarro = parseFloat(prompt('Insira a velocidade do carro em KM/h: '));
// console.log(avaliaMulta(velocidadeDoCarro));

// function avaliaMulta(velocidade){
//   if(velocidade > 80.0){
//     let deltaVelocidade = (velocidade - 80.0)>1?(velocidade-80): 1;
//     let valorDaMulta = 5 * deltaVelocidade ;
//     return `Você está acima do limite permitido. Você será multado no valor de R$${valorDaMulta.toFixed(2)} reais!`
//   }else{
//     return `Você está dentro do limite de velocidade. Parabéns!`
//   }
// }


//Exercicio 3

// let distanciaDesejada = parseFloat(prompt('Insira a distancia que deseja percorrer em Km: '));
// console.log(calculaPreco(distanciaDesejada));

// function calculaPreco(distancia){
//   let preco;
//   if(distancia <= 200){
//     preco = 0.5*distancia;
//   }else{
//     preco = 0.45*distancia;
//   }

//   return`O preço da viagem será de R$ ${preco.toFixed(2)} reais.`
// }


//Exercicio 4
// let segmento1 = parseInt(prompt('Insira o valor do primeiro segmento de reta: '));
// let segmento2 = parseInt(prompt('Insira o valor do segundo segmento de reta: '));
// let segmento3 = parseInt(prompt('Insira o valor do terceiro segmento de reta: '));
// console.log(ehTriangulo(segmento1,segmento2,segmento3))

// function ehTriangulo(seg1, seg2, seg3){
//   if(seg1 < seg2+seg3 && seg2< seg1+seg3 && seg3 < seg1+seg2){
//     return 'É possível formar um triangulo';
//   }else{
//     return 'Não é possível formar um triângulo';
//   }
// }


//Exercício 5

// console.log('1-Pedra\n2-Papel\n3-Tesoura')
// let elementoEscolhido = parseInt(prompt('Insira o numero desejado: '));

// let escolhas = { 1: 'Pedra', 2: 'Papel', 3:'Tesoura'};
// jogarJoKenPo(elementoEscolhido);


// function jogarNumeroAletorio(){
//   let  numeroAleatorio = Math.floor(Math.random() * (3-1 + 1)+1);
//   return numeroAleatorio;
// }

// function comparaEscolhas(escolhaJogador, escolhaMaquina){
//   let resultado = '';
//   if(escolhaJogador == escolhaMaquina){
//     resultado = 'Empate!'
//   }else{
//     if(escolhaJogador ==1 && escolhaMaquina ==2){
//       resultado ='Vitória do Máquina';
//     }else if(escolhaJogador ==1 && escolhaMaquina==3){
//       resultado = 'Vitória da Jogador!';
//     }else if (escolhaJogador == 2 && escolhaMaquina == 3){
//       resultado = 'Vitória da Máquina';
//     }else if (escolhaJogador == 3 && escolhaMaquina == 2){
//       resultado ='Vitória do Jogador';
//     }else if(escolhaJogador ==3 && escolhaMaquina==1){
//       resultado = 'Vitória da Máquina';
//     }else if(escolhaJogador ==2 && escolhaMaquina==1){
//       resultado = 'Vitória da Jogador';
//     }
//   }

//   return resultado;
// }

// function jogarJoKenPo(escolhaDoJogador){
//   let escolhaDaMaquina = jogarNumeroAletorio();
//   let resultado = comparaEscolhas(escolhaDoJogador, escolhaDaMaquina);
//   console.log(`Você escolheu ${escolhas[escolhaDoJogador]}.`);
//   console.log(`A maquina escolheu ${escolhas[escolhaDaMaquina]}.`);
//   console.log(resultado);
// }


//Exercicio 6
//  const max = 5;
//  const min = 1;

// let  numeroAleatorio = Math.floor(Math.random() *(max-min + 1)+min);
// let adivinhacao = parseInt(prompt('Insira um número entre 1 e 5: '));
// achaNumeroAleatorio(adivinhacao);

// function achaNumeroAleatorio(adivinhacao){
//   while(adivinhacao != numeroAleatorio){
//     if(adivinhacao < numeroAleatorio){
//       console.log('O valor é maior!');
//       adivinhacao = parseInt(prompt('Insira um número entre 1 e 5: '));
//     }else{
//       console.log('O valor é menor');
//       adivinhacao = parseInt(prompt('Insira um número entre 1 e 5: '));
//     }
//   }

//   console.log(`Parabens! Você acertou, o número é ${numeroAleatorio}`)
// }


//Exercicio 7

// console.log('Tipos de Carro:\n 1-Popular\n 2-Luxo');
// let tipoDeCarro = parseInt(prompt('Insira o numero correspondente ao tipo de carro: '));
// let diasDeAluguel = parseInt(prompt('Insira a quantidade em dias de aluguel: '));
// let kmPercorridos = parseFloat(prompt('Insira a quantidade percorrida em Km: '));

// console.log(`O Preço a ser pago é de R$ ${calculaPreco(kmPercorridos, tipoDeCarro,diasDeAluguel)}`)

// function calculaPreco(distancia, tipoDeVeiculo,diasAlugado){
// let preco = 0;
//   switch(tipoDeVeiculo){
//     case 1:
//       if(distancia <= 100 ){
//         preco = 90 + (distancia * 0.2)*diasAlugado;
//       }else{
//         preco = 90 + (distancia * 0.10)*diasAlugado;
//       }
//       break;
//     case 2:
//       if(distancia <= 200){
//         preco = 150 + (distancia *0.30)*diasAlugado;
//       }else{
//         preco =150 + (distancia *0.25)*diasAlugado;
//       }
//       break;
//   }
//   return preco.toFixed(2);
// }

//Exercicio 8

// let horasDeAtividadePorMes = parseFloat(prompt('Insira a quantidade em horas de atividades feitas por mês: '));
// calculaValorRecebido(horasDeAtividadePorMes);

// function calculaPontos(horasAtividades){
//   let pontosAcumulados =0;
//   if(horasAtividades <= 10){
//     pontosAcumulados = 2* horasAtividades;
//   }else if (horasAtividades >10 && horasAtividades <= 20){
//     pontosAcumulados = 5* horasAtividades;
//   }else{
//     pontosAcumulados = 10*horasAtividades;
//   }
//   return pontosAcumulados;
// }

// function calculaValorRecebido(horas){
//   let pontosAcumulados = calculaPontos(horas);
//   let valorAGanhar  = pontosAcumulados * 0.05;

//   console.log(`O total de pontos acumulados no mês é: ${pontosAcumulados}\n O valor Recebido será de: R$ ${valorAGanhar.toFixed(2)} reais.`)
// }


//Exercicio 9

// let funcionarios =[];
// let continuar = 1;

// function calcularSalarioPorSexo(array){
//   let resultado = [];
//   let totalHomens =0;
//   let totalMulheres =0;
//   for(let funcionario of array){
//     if(funcionario[0]==1){
//       totalHomens+= funcionario[1];
//     }else{
//       totalMulheres+=funcionario[1];
//     }
//   }

//   resultado.push(totalHomens);
//   resultado.push(totalMulheres);
//   return resultado
// }

// while(continuar!= 0){
//   let sexoFuncionario = parseInt(prompt('Digite o sexo do funcionário. 1-Masculino 2-Feminino: '));
//   let salarioFuncionario =parseFloat(prompt('Digite o salario do funcionário: '));
//   let funcionario = [sexoFuncionario, salarioFuncionario];

//   funcionarios.push(funcionario);
//   continuar = parseInt(prompt('Deseja continuar? 1-Sim 0- Não: '));
// }

// let resultado = calcularSalarioPorSexo(funcionarios);
// console.log(`O Salário total dos homens: ${resultado[0].toFixed(2)}.\nO salário total das mulheres: ${resultado[1].toFixed(2)}.`);


//Exercicio 10

// let continuar = 1;
// let pares =0;
// let soma =0;
// let valores = [];
// while(continuar != 0){
//   let valor =parseInt(prompt('Insira um valor: '));
//   soma += valor;
//   if(valor %2 == 0){
//     pares += 1;
//   }
//   valores.push(valor);
//   continuar = parseInt(prompt('Deseja continuar? 1-Sim e 0-Não: '));
// }

// function achaMenorValor(array){
//   let menor = array[0];
//   for(let elemento of array){
//     if(elemento<menor){
//       menor = elemento;
//     }
//   }
//   return menor;
// }

// console.log(`A soma dos valores é: ${soma}.`);
// console.log(`O menor valor digitado foi ${achaMenorValor(valores)}.`);
// console.log(`A média dos valores é  ${(soma/valores.length).toFixed(2)}.`);
// console.log(`A quantidade de números pares é ${pares}.`);


//Exercicio 11

//an = a1 + (n-1)*r
//Sn = (a1+an)*n/2

// let a1 = parseInt(prompt('Insira o valor do primeiro tremo da P.A.: '));
// let r = parseInt(prompt("Insira a razão da P.A.: "));
// let n =10;

// let an = 0;
// let Sn = 0;
// for(let i=1; i<=n; i++){
//     an = a1 + (i-1)*r;
//     console.log(`a${i}: ${an}`);
// }
// Sn = ((a1 + an)*n)/2;

// console.log(`O somatório é: ${Sn}`);


//Exercício 12

// let f1 =1;
// let n = 10;
// let fibonacci = [];
// for(let i=1; i<=n; i++){
//     let fn;
//     let ultimoElemento = fibonacci.length-1!=-1?fibonacci.length-1:0;
//     let penultimoElemento = fibonacci.length-2;
//     if(fibonacci.length-2==-2 || fibonacci.length-2 ==-1){
//         penultimoElemento = -4;
//     }
//     if(ultimoElemento==0 && penultimoElemento==-4){
//         fn = f1;
//     }else{
//         fn = fibonacci[ultimoElemento] + fibonacci[penultimoElemento];
//     }
//     console.log(`f${i}: ${fn}`);
//     fibonacci.push(fn);
// }



//Exercicio 13

// let f1 = 1;
// let n = 15;
// let fibonacci = [];
// for(let i=1; i<=n; i++){
//     let fn;
//     let ultimoElemento = fibonacci.length-1!=-1?fibonacci.length-1:0;
//     let penultimoElemento = fibonacci.length-2;
//     if(fibonacci.length-2==-2 || fibonacci.length-2 ==-1){
//         penultimoElemento = -4;
//     }
//     if(ultimoElemento==0 && penultimoElemento==-4){
//         fn = f1;
//     }else{
//         fn = fibonacci[ultimoElemento] + fibonacci[penultimoElemento];
//     }
//     fibonacci.push(fn);
// }

// console.log(fibonacci);

//Exercico 14

// let nomes=[];
// let tamanho = 7
// for(let i=1; i<=tamanho; i++){
//     let nome = prompt('Digite um nome: ');
//     nomes.push(nome);
// }

// imprimeNomes(nomes);
// function imprimeNomes(array){
//     for(let i=tamanho-1; i>=0;i--){
//         console.log(nomes[i]);
//     }
// }


//Exercicio 15

// let numeros = [];

// for(let i=1; i<=10;i++){
//     let numero = parseInt(prompt('Insira um numero: '));
//     numeros.push(numero);
// }

// for(let i=0; i<=numeros.length;i++){
//     if(numeros[i]%2 == 0){
//         console.log(`O numero ${numeros[i]} é par e está na posição ${i}`);
//     }
// }


//Exercicio 16

//  const max = 0;
//  const min = 99;
//  let numeros =[];

//  for(let i=1; i<=20;i++){
//     let  numeroAleatorio = Math.floor(Math.random() *(max-min + 1)+min);
//     numeros.push(numeroAleatorio);
//  }
// console.log(`O vetor gerado é [${numeros}]`);

// let numerosOrdenados=[];

// for(let i=0; i<=numeros.length;i++){
//     let elemento = numeros[i];
   
//     for(let j=1; j<20;j++){
//         if(numeros[j]<elemento){
//             elemento = numeros[j];
//             numeros[j] = elemento;
//              console.log(elemento);
//         }
//     }
    
//     numerosOrdenados[i] = elemento;
// }

// console.log(`O vetor ordenado é [${numerosOrdenados}]`);


//Exercíco 17

// let nomes = [];
// let idades = [];

// for(let i=1; i<=9;i++){
//     let nome = prompt('Insira um nome: ');
//     nomes.push(nome);
//     let idade = parseInt(prompt('Insira uma idade: '));
//     idades.push(idade);
// }

// console.log('Lista dos menores de idade: ')
// for(let i=0; i<9;i++){
//     if(idades[i]<18){
//         console.log(`${nomes[i]} tem ${idades[i]} anos de idade.`);
//     }
// }


//Exercicio 18

// let registroFuncionario = {
//     nome: "",
//     cargo: "",
//     salario: 0
// }

// console.log(`Esse é o registro: {nome: ${registroFuncionario.nome}, cargo: ${registroFuncionario.cargo}, salário: ${registroFuncionario.salario}}`);
// let nomeFuncionario = prompt('Insira o nome do funcionário: ');
// let cargoFuncionário = prompt('Insira o cargo do funcionário: ');
// let salarioFuncionario = parseFloat(prompt('Insira o salio do funcionario: '));

// registroFuncionario.nome = nomeFuncionario;
// registroFuncionario.cargo = cargoFuncionário;
// registroFuncionario.salario = salarioFuncionario;

// console.log(`Esse é o registro: {nome: ${registroFuncionario.nome}, cargo: ${registroFuncionario.cargo}, salário: ${registroFuncionario.salario}}`);


//Exercicio 19



//Exercicio 20

// let funcionario = {
//     matricula: "",
//     nome: "",
//     salarioBruto: 0,
//     deducaoINSS: 0,
//     salárioLiquido: 0
// }
// console.log(funcionario[1]);

// for(let campo in funcionario){
//     if(campo.valueOf()==""){
//         let valor = prompt(`Insira ${campo} do funcionário: `);
//         campo = valor;
//     }else if(campo.localeCompare("salarioBruto")){
//         let valor = parseFloat(prompt(`Insira ${campo} do funcinario: `));
//         campo = valor;
//     }else if(campo.localeCompare("deducaoINSS")){
//         campo = funcionario.salarioBruto * 0.12;
//     }else{
//         campo = funcionario.salarioBruto - funcionario.deducaoINSS;
//     }
       
// }

// console.log(funcionario);


//Exercicio 21

// console.log(pesoIdeal(1.74, "M"));
// console.log(pesoIdeal(1.68, "F"));

// function pesoIdeal(altura, sexo){
//     let pesoIdeal =0;
//     if(sexo == "m" || sexo=="M"){
//         pesoIdeal = (72.7*altura) - 58;
//     }else if(sexo=="f" || sexo == "F"){
//         pesoIdeal = (62.1 * altura) - 44.7;
//     }

//     return pesoIdeal.toFixed(1);
// }


//Exercicio 22

// let continuar =1;
// let numPessoas = 0;
// let quantidadeDeFilhos =0;
// let somatorioSalario = 0;
// let salarios = [];

// while(continuar!= 0){
//     numPessoas +=1
//     let numeroDeFilhos = parseInt(prompt('Insira o numero de filhos: '));
//     quantidadeDeFilhos += numeroDeFilhos;
//     let salario = parseFloat(prompt('Insira o salario: '));
//     somatorioSalario += salario;
//     salarios.push(salario);
//     continuar = parseInt(prompt('Deseja continuar? 1-Sim, 0-Não: '));

// }

// analiandoDados(numPessoas,somatorioSalario,quantidadeDeFilhos,salarios);

// function AchaMaiorSalario(array){
//     let maior = 0;
//     for(let salario of array){
//         if(salario> maior){
//             maior = salario;
//         } 
//     }
//     return maior;
// }

// function analiandoDados(numeroDePessoas, SomatorioDoSalario,SomatorioDeFilhos,salarios){
//     let mediaDeSalario = SomatorioDoSalario / numeroDePessoas;
//     let mediaDeFilhos = SomatorioDeFilhos / numeroDePessoas;
//     let maiorSalario = AchaMaiorSalario(salarios);
//     let salarioIgual350 = 0;
//     for(let salario of salarios){
//         if(salario<= 350){
//             salarioIgual350 += 1;
//         }
//     }
//     let percentualAte350 = (salarioIgual350/numeroDePessoas) *100;

//     console.log(`A média Salarial é R$ ${mediaDeSalario.toFixed(2)} reais`);
//     console.log(`A média de filhos é ${mediaDeFilhos.toFixed(1)}`);
//     console.log(`O maior salário é R$ ${maiorSalario.toFixed(2)} reais`);
//     console.log(`O percentual de pessoas que ganham até 350 é ${percentualAte350.toFixed(1)}%`);

// }

//Exercicio 23

// function criarMatrizIdentidade(n) {
//   const matriz = [];

//   for (let i = 0; i < n; i++) {
//     matriz[i] = new Array(n).fill(0);
//   }

//   for (let i = 0; i < n; i++) {
//     matriz[i][i] = 1;
//   }

//   return matriz;
// }

// const matrizIdentidade = criarMatrizIdentidade(7);

// const linhas = matrizIdentidade.map(linha => linha.join(' '));
// const matrizString = linhas.join('\n');
// console.log(matrizString);


//Exercicio 24

// function contarNegativosPorLinha(matriz) {
//     const contagensNegativos = new Array(matriz.length).fill(0);
  
//     for (let i = 0; i < matriz.length; i++) {
//       let contagemNegativos = 0;
//       for (let j = 0; j < matriz[i].length; j++) {
//         if (matriz[i][j] < 0) {
//           contagemNegativos++;
//         }
//       }
  
//       contagensNegativos[i] = contagemNegativos;
//     }
  
//     return contage
//   nsNegativos;
//   }
  
//   const matriz = [
//     [-1, 2, 0, 4],
//     [3, -5, 1],
//     [0, -2, 7, -1],
//     [4, 0, 6],
//     [-3, 1, 5],
//     [2, -4, 0],
//   ];
  
//   const contagensNegativos = contarNegativosPorLinha(matriz);
//   console.log(contagensNegativos); 



//Exercicio 25

//   function calcularSomaColunas(matriz) {
//     const colunas = matriz[0].length; 
//     const somaColunas = new Array(colunas).fill(0); 
  
//     for (let j = 0; j < colunas; j++) { 
//     for (let i = 0; i < matriz.length; i++) { 
//         somaColunas[j] += matriz[i][j]; 
//       }
//     }
  
//     return somaColunas;
//   }
  
//   const matriz = [
//         [-1, 2, 0, 4,0,5,7,8,9,1,2,3,5,0,0,0,0,0,2,1],
//         [3, -5, 1, 0,5,7,8,9,1,2,3,5,0,0,0,0,0,2,1,5],
//         [0, -2, 7,-1,5,7,8,9,1,2,3,5,0,0,0,0,0,2,1,5],
//         [4, 0, 6,-1,5,7,8,9,1,2,3,5,0,0,0,0,0,2,1,5],
//         [-3, 1,5,-1,5,7,8,9,1,2,3,5,0,0,0,0,0,2,1,5],
//         [2, -4, 0,-1,5,7,8,9,1,2,3,5,0,0,0,0,0,2,1,5],
//         [-1, 2, 0, 4,-1,5,7,8,9,1,2,3,5,0,0,0,0,0,2,1],
//         [3, -5, 1, -1,5,7,8,9,1,2,3,5,0,0,0,0,0,2,1,5],
//         [0, -2, 7, -1,-1,5,7,8,9,1,2,3,5,0,0,0,0,0,2,1],
//         [4, 0, 6, -1,5,7,8,9,1,2,3,5,0,0,0,0,0,2,1,5],
//         [-3, 1, 5,-1,5,7,8,9,1,2,3,5,0,0,0,0,0,2,1,5],
//         [2, -4, 0,-1,5,7,8,9,1,2,3,5,0,0,0,0,0,2,1,5],
//         [4, 0, 6,-1,5,7,8,9,1,2,3,5,0,0,0,0,0,2,1,5],
//         [-3, 1, 5,-1,5,7,8,9,1,2,3,5,0,0,0,0,0,2,1,5],
//         [2, -4, 0,-1,5,7,8,9,1,2,3,5,0,0,0,0,0,2,1,5],
//       ];

//   const somaColunas = calcularSomaColunas(matriz);
  
//   console.log("Soma de cada coluna:");
//   for (let i = 0; i < 20; i++) {
//     console.log(`Coluna ${i + 1}: ${somaColunas[i]}`);
//   }


//Exercicio 26
// Para calcular o produto de duas matrizes numéricas A e B no JavaScript, você precisa garantir que a multiplicação de matrizes está correta. No entanto, dado que as matrizes A e B têm as mesmas dimensões (3x5), a multiplicação de matrizes conforme a definição matemática não seria aplicável diretamente. Em vez disso, estou assumindo que você deseja calcular o produto elemento por elemento, resultando em uma matriz P onde cada elemento é o produto de cada elemento da matriz A com a Matriz B.

// function criaMatrizProduto(matrizA,matrizB){
//     let matrizProduto = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
//     let produto = 0;
//     for(let i=0; i<matrizA.length; i++){
//         for(let j=0; j<matrizB[0].length;j++){
//             matrizProduto[i][j] = matrizA[i][j] * matrizB[i][j];
//         }
//     }

//     return matrizProduto;
// }

// const matrizA = [
//     [1,1,1,1,1],
//     [1,1,1,1,1],
//     [1,1,1,1,1]
// ];

// const matrizB = [
//     [1,2,1,0,1],
//     [1,1,1,1,1],
//     [0,0,0,1,1]
// ];

// const matrizProduto = criaMatrizProduto(matrizA,matrizB);
// const linhas = matrizProduto.map(linha => linha.join(' '));
// const matrizString = linhas.join('\n');
// console.log(matrizString);

//Exercicio 27

// function acharVetorV(matriz,numero){
//     const vetorV = new Array(36).fill(0);
//     let cont = 0;
//     for (let j = 0; j < matriz.length; j++) { 
//         for (let i = 0; i < matriz.length; i++) { 
//             vetorV[cont] = matriz[j][i] * numero; 
//             cont++;
//         }
//     }

//     return vetorV;
// }

// const matriz = [
//     [1,2,1,0,1,1],
//     [1,1,1,1,1,0],
//     [0,0,0,1,1,1],
//     [1,2,1,0,1,1],
//     [1,1,1,1,1,0],
//     [0,0,0,1,1,1],
// ];

// let numero = 2;

// const vetorV = acharVetorV(matriz, numero);
// console.log(vetorV);


//Exercicio 28

// function somaAcimaDiagonal(matriz){
//     let soma = 0;
//     for(let i=0; i<matriz.length;i++){
//         for(let j=0; j<matriz[i].length; j++){
//             if(j>i){
//                 soma += matriz[i][j];
//             }
//         }
//     }

//     return soma;
// }

// function somaAbaixoDiagonal(matriz){
//     let soma = 0;
//     for(let i=0; i<matriz.length;i++){
//         for(let j=0; j<matriz[i].length; j++){
//             if(j<i){
//                 soma += matriz[i][j];
//             }
//         }
//     }

//     return soma;
// }

// const matriz = [
//     [2, 1, 0, 1, 1, 0, 0, 1, 0,0],
//     [2, 1, 0, 1, 1, 0, 0, 1, 0,0],
//     [2, 1, 0, 1, 1, 0, 0, 1, 0,0],
//     [2, 1, 0, 1, 1, 0, 0, 1, 0,0],
//     [2, 1, 0, 1, 1, 0, 0, 1, 0,0],
//     [2, 1, 0, 1, 1, 0, 0, 1, 0,0],
//     [2, 1, 0, 1, 1, 0, 0, 1, 0,0],
//     [2, 1, 0, 1, 1, 0, 0, 1, 0,0],
//     [2, 1, 0, 1, 1, 0, 0, 1, 0,0],
//     [2, 1, 0, 1, 1, 0, 0, 1, 0,0]
// ];

// let somaAcimaDiagonalPrincipal = somaAcimaDiagonal(matriz);
// let somaAbaixoDiagonalPrincipal = somaAbaixoDiagonal(matriz);

// console.log(`A soma dos valores acima da diagonal principal é ${somaAcimaDiagonalPrincipal}`);
// console.log(`A soma dos valores abaixo da diagonal principal é ${somaAbaixoDiagonalPrincipal}`);


//Exercício 29

// const matriz = [
//     [1,1,1,1,1],
//     [0,0,0,0,0],
//     [1,0,1,0,1],
//     [1,1,1,1,1],
//     [0,0,0,0,0]
// ];

// let somaLinha4 =0;
// let somaColuna2 =0;
// let somaDiagonalPrincipal = 0;
// let somaTodosElementos = 0;

// for(let i=0; i<matriz.length;i++){
//     for(let j=0; j<matriz[i].length; j++){
//        somaTodosElementos += matriz[i][j];
//        if(i==3){
//         somaLinha4 += matriz[i][j];
//        }
//        if(j==1){
//         somaColuna2 += matriz[i][j];
//        }
//        if(i==j){
//         somaDiagonalPrincipal += matriz[i][j];
//        }
//     }
// }

// console.log(`O somatório da linha 4 é: ${somaLinha4}`);
// console.log(`O somatório da coluna 2 é: ${somaColuna2}`);
// console.log(`O somatório da diagonal principal é: ${somaDiagonalPrincipal}`);
// console.log(`O somatório de todos os elemntos é: ${somaTodosElementos}`);


//Exercício 30

// const matriz = [
//     [1,1,1,1,1],
//     [0,0,0,0,0],
//     [1,0,1,0,1],
//     [1,1,1,1,1],
//     [0,0,0,0,0]
// ];

// let somaLinha =[0,0,0,0,0];
// let somaColuna =[0,0,0,0,0];

// for(let i=0; i<matriz.length;i++){
//     for(let j=0; j<matriz[i].length; j++){
//        somaLinha[i] += matriz[i][j];
//        somaColuna[i] += matriz[j][i];
//     }
// }

// console.log('A matriz (5,5):')
// console.log(matriz);
// console.log('O vetor soma linha: ')
// console.log(somaLinha);
// console.log('O vetor soma coluna: ');
// console.log(somaColuna);


//Exercício 31

// const matriz = [];
// const max = 5;
// const min = 0;

// function geraMatriz(matriz, max,min){
//     for(let j=0; j< 30; j++){
//         const submatriz = new Array(30).fill(0);
//         for(let i=0; i<submatriz.length;i++){
//             submatriz[i] = Math.floor(Math.random() *(max-min + 1)+min); 
//         }
//         matriz.push(submatriz);
//     }
//     return matriz;
// }

// console.log('A matriz gerada é: ')
// const matrizGerada = geraMatriz(matriz, max,min);
// const linhas = matrizGerada.map(linha => linha.join(' '));
// const matrizString = linhas.join('\n');
// console.log(matrizString);


// function achaValoresNaMatriz(matriz, valor){
//     let soma = 0;
//     for(let j=0; j< matriz.length; j++){
//         for(let i=0; i<matriz[j].length;i++){
//             if(matriz[i][j] == valor){
//                 soma += 1;
//             }
//         }
//     } 

//     return soma;
// }

// function retornaMatrizX(matriz, valor){
//     const matrizX = [];
    
//     for (const subarray of matriz) {
//         const subarrayMatrizX = subarray.filter(element => element !== valor);
//         matrizX.push(subarrayMatrizX);
//     }

//     return matrizX;
// }

// let valor = 1;
// const matrizX = retornaMatrizX(matrizGerada, valor);

// console.log(`Existem na matriz  ${achaValoresNaMatriz(matrizGerada,valor)} elementos iguais ao valor ${valor}`);
// console.log('A matriz X é : ');
// const linhasX = matrizX.map(linha => linha.join(' '));
// const matrizStringX = linhasX.join('\n');
// console.log(matrizStringX);


//Exercício 32

// const matriz = [];
// const max = 5;
// const min = -4;

// function geraMatriz(matriz, max,min){
//     for(let j=0; j< 12; j++){
//         const submatriz = new Array(13).fill(0);
//         for(let i=0; i<submatriz.length;i++){
//             submatriz[i] = Math.floor(Math.random() *(max-min + 1)+min); 
//         }
//         matriz.push(submatriz);
//     }
//     return matriz;
// }

// console.log('A matriz gerada é: ')
// const matrizGerada = geraMatriz(matriz, max,min);
// const linhas = matrizGerada.map(linha => linha.join(' '));
// const matrizString = linhas.join('\n');
// console.log(matrizString);

// function achaMaiorValor(array){
//     let maior =-10000; 
//     for(let i=0; i<array.length;i++){
//         if(Math.abs(array[i])> maior){
//             maior = array[i];
//         }
//     }

//     return maior === 0 ? 1 : maior;
// }

// function retornaMatrizComDivisao(matriz){
//     const matrizComDivisão =[];
    
//     for(let i=0; i<matriz.length;i++){
//         matrizComDivisão[i] = [];
//         for(let j=0; j<matriz[i].length; j++){
//             matrizComDivisão[i][j] = (matriz[i][j]/achaMaiorValor(matriz[i])).toFixed(1);
//         }
//     }

//     return matrizComDivisão;
// }

// const matrizDividida = retornaMatrizComDivisao(matrizGerada);
// console.log('A matriz com Divisão é : ');
// const linhasD = matrizDividida.map(linha => linha.join(' '));
// const matrizStringD = linhasD.join('\n');
// console.log(matrizStringD);


//Exercicio 33

// const matriz = [
//     [1,0,2],
//     [2,2,1],
//     [2,2,4]
// ];

// function mediaDiagonalSecundaria(matriz){
//     let soma = 0;
//     for(let i=0; i<matriz.length; i++){
//         for(let j=0; j<matriz[i].length; j++){
//             if((i==0 && j==2) || (i==1 && j==1) || (i==2 && j==0)){
//                 soma +=  matriz[i][j];
//             }
//         }
//     }

//     return soma/3;
// }

// function multiplicaDiagonalPrincipal(matriz){
//     let media = mediaDiagonalSecundaria(matriz);
//     for(let i=0; i<matriz.length; i++){
//         for(let j=0; j<matriz[i].length; j++){
//             if(i==j){
//                 matriz[i][j] = matriz[i][j] * media;
//             }
//         }
//     }

//     return matriz;
// }

// console.log('Matriz original: ');
// console.log(matriz);
// const matrizTransformada = multiplicaDiagonalPrincipal(matriz);
// console.log('Matriz Transformada: ');
// console.log(matrizTransformada);


//Exercício 34

// const matriz = [];
// const max = 5;
// const min = 0;

// function geraMatriz(matriz, max,min){
//     for(let j=0; j< 50; j++){
//         const submatriz = new Array(50).fill(0);
//         for(let i=0; i<submatriz.length;i++){
//             submatriz[i] = Math.floor(Math.random() *(max-min + 1)+min); 
//         }
//         matriz.push(submatriz);
//     }
//     return matriz;
// }

// console.log('A matriz gerada é: ')
// const matrizGerada = geraMatriz(matriz, max,min);
// const linhas = matrizGerada.map(linha => linha.join(' '));
// const matrizString = linhas.join('\n');
// console.log(matrizString);

// function multiplicaLinhaPorElementoDaDiagonal(matriz){
//     for(let i=0; i<matriz.length;i++){
//         let elementoDaDiagonal = matriz[i][i];
//         for(let j=0; j<matriz[i].length;j++){
//             matriz[i][j] = matriz[i][j] *elementoDaDiagonal;
//         }
//     }

//     return matriz;
// }

// console.log('A matriz Transformada é: ')
// const matrizTransformada = multiplicaLinhaPorElementoDaDiagonal(matrizGerada);
// const linhasT = matrizGerada.map(linha => linha.join(' '));
// const matrizStringT = linhasT.join('\n');
// console.log(matrizStringT);


//Exercico 35

// const vetor =[]
// const max = 5;
// const min = 0;

// function geraVetor(max,min,vetor){
//     for(let j=0; j<30; j++){
//         vetor = new Array(30).fill(0);
//     }

//     for(let i=0; i<vetor.length;i++){
//         vetor[i] = Math.floor(Math.random() *(max-min + 1)+min); 
//     }
//     return vetor;
// }

// console.log('O vetor gerado é: ')
// const vetorGerado = geraVetor(max,min,vetor);
// console.log(vetorGerado);

// function imprimeParEImpar(vetor){
//     let pares =[];
//     let impares =[];
//     for(let elemento of vetor){
//         if(elemento%2==0){
//             pares.push(elemento);
//             if(pares.length == 5){
//                 console.log(`Esses são pares: ${pares}`);
//                 pares = [];
//             }
//         }else{
//             impares.push(elemento);
//             if(impares.length==5){
//                 console.log(`Esses são Ímpares: ${impares}`);
//                 impares = [];
//             }
//         }
        
//     }

//     console.log(`Esses são pares: ${pares}`);
//     console.log(`Esses são Ímpares: ${impares}`);
// }

// console.log("Esses são os numeros pares e ímpares: ");
// imprimeParEImpar(vetorGerado);


//exercicio 36
// const max=10;
// const min = 0;

// function geraVetorResposta(max, min){

//     let vetor = new Array(13).fill(0);

        
//     for(let i=0; i<vetor.length;i++){
//         vetor[i] = Math.floor(Math.random() *(max-min + 1)+min); 
//     }
            
//     return vetor;
// }

// const gabarito = geraVetorResposta(max,min);
// console.log('O  gabarito é: ');
// console.log(gabarito);

// const apostadores = new Array(100).fill(0);

// function geraApostadores(max,min, apostadores){
//     for(let i=0; i<100;i++){
//         let apostador = new Array(2).fill(0);
//         let respostas = new Array(13).fill(0);
//         apostador[0] = i+1;
//         apostador[1] = respostas
        
//         for(let j=0; j<13;j++){
        
//             apostador[1][j] = Math.floor(Math.random() *(max-min + 1)+min);
        
//         }

//         apostadores[i] = apostador;
//     }

//     return apostadores
    
// }

// console.log('A lista de apostadores: ')
// const listaDeApostadores = geraApostadores(max, min, apostadores);
// listaDeApostadores.forEach(element => {
//     console.log(element);
// });

// function verificaAcertos(gabarito, listaApostadores){
//     for(let apostador of listaApostadores ){
//         let acertos = 0;
//         for(let i=0; i<gabarito.length;i++){
//             if(apostador[1][i]==gabarito[i]){
//                 acertos++;
//             }
//         }

//         console.log(`O apostador ${apostador[0]} acertou ${acertos} resultados`)

//         if(acertos == 13){
//             console.log('Parabéns, tu foi o GANHADOR !')
//         }

//     }
// }

// verificaAcertos(gabarito, listaDeApostadores);


//Exercicio 37
// const letras= ['A','B', 'C', 'D', 'E'];
// const max = 4;
// const min = 0;

// function geraVetorResposta(max, min, vetorLetras){
    
//     let vetor = new Array(20).fill(0);
    
//     for(let i=0; i<vetor.length;i++){
//         vetor[i] = vetorLetras[Math.floor(Math.random() *(max-min + 1)+min)]; 
//     }
            
//     return vetor;
// }

// const gabarito = geraVetorResposta(max,min, letras);
// console.log('O  gabarito é: ');
// console.log(gabarito);

// const alunos =new Array(50).fill(0);

// function geraAlunos(max,min, alunos, vetorLetras){
//     for(let i=0; i<50;i++){
//         let aluno = new Array(2).fill(0);
//         let respostas = new Array(20).fill(0);
//         aluno[0] = i+1;
//         aluno[1] = respostas;
        
//         for(let j=0; j<20;j++){
            
//             aluno[1][j] = vetorLetras[Math.floor(Math.random() *(max-min + 1)+min)];

//         }

//         alunos[i] = aluno;
//     }

//     return alunos;
    
// }

// console.log('A lista de alunos: ')
// const listaDeAlunos = geraAlunos(max, min, alunos, letras);
// listaDeAlunos.forEach(element => {
//     console.log(element);
// });

// function verificaAcertos(gabarito, listaAlunos){
//     for(let aluno of listaAlunos ){
//         let acertos = 0;
//         for(let i=0; i<gabarito.length;i++){
//             if(aluno[1][i]==gabarito[i]){
//                 acertos++;
//             }
//         }

        

//         if(acertos >= 12){
//             console.log(`O aluno ${aluno[0]} acertou ${acertos} perguntas. APROVADO!`);
//         }else{
//             console.log(`O aluno ${aluno[0]} acertou ${acertos} perguntas. REPROVADO!`);
//         }

//     }
// }

// verificaAcertos(gabarito, listaDeAlunos);


//Exercicio 38

//CASO QUEIRA CONSTRUIR SEU PRÓPRIO VETOR- DESCOMENTE AS LINHAS ABAIXO

// const vetor = new Array(6).fill(0);

// for(let elemento of vetor){
//     elemento = parseInt(prompt('Digite um elemento para o vetor: '));
// }

// let identificador = parseInt(prompt('Escolha uma operação:\n1-soma dos elementos\n2-produto dos elementos\n3-média dos elementos\n4-ordene os elementos\n5-mostre o valor'));

//CASO NÃO QUEIRA CONSTRUIR SEU PRÓPRIO VETOR- DESCOMENTE AS LINHAS ABAIXO
// const  array = [6,5,4,3,2,1];
// selecionaOperacao(1, array);
// selecionaOperacao(2, array);
// selecionaOperacao(3, array);
// selecionaOperacao(4, array);
// selecionaOperacao(5, array);

//AQUI COMEÇA O CODIGO
// function somaElementos(array){
//     let soma=0;
//     for(let elemento of array){
//         soma += elemento;
//     }
//     return soma;
// }

// function produtoDosElementos(array){
//     let produto=1;

//     for(let elemento of array){
//         produto *= elemento;
//     }
//     return produto;
// }

// function mediaDosElementos(array){
//     let soma=0;
//     for(let elemento of array){
//         soma += elemento;
//     }
//     return soma/array.length;
// }

// function ordemCrescente(array){
//     return array.sort((a,b) => a-b)
// }

// function selecionaOperacao(identificador, vetor){
//     switch (identificador){
//         case 1:
//             console.log(`A soma dos elementos é: ${somaElementos(vetor)}`);
//             break;
//         case 2:
//             console.log(`O produto dos elementos é: ${produtoDosElementos(vetor)}`); 
//             break;
//         case 3:
//             console.log(`A média dos elementos é: ${mediaDosElementos(vetor)}`);
//             break;
//         case 4:
//             console.log(`Os elementos ordenados: ${ordemCrescente(vetor)}`);
//             break;
//         case 5:
//             console.log(`O vetor é: ${vetor}`);
//             break;
//     }
        

// }


//Exercicio 39

// const max = 5;
// const min = -5; 

// const vetor = new Array(100).fill(0);

// for(let i=0; i<vetor.length;i++){
//     vetor[i] = Math.floor(Math.random() *(max-min + 1)+min); 
// }

// console.log(`O vetor original:\n[${vetor}]`);

// console.log(`O vetor sem nulos e  negativos:\n[${vetor.filter(elemento => elemento > 0)}]`);

//Exercicio 40

// const max = 99;
// const min = 1;

// function geraVetorResposta(max, min){
    
//     let vetor = new Array(5).fill(0);
    
//     for(let i=0; i<vetor.length;i++){
//         vetor[i] = Math.floor(Math.random() *(max-min + 1)+min); 
//     }
            
//     return vetor;
// }

// const resultado = geraVetorResposta(max,min);
// console.log('O  resultado oficial é: ');
// console.log(resultado);

// const apostadores =new Array(50).fill(0);

// function geraApostadores(max,min, apostadores){
//     for(let i=0; i<50;i++){
//         let apostador = new Array(5).fill(0);
        
//         for(let j=0; j<5;j++){
            
//             apostador[j] = Math.floor(Math.random() *(max-min + 1)+min);

//         }

//         apostadores[i] = apostador;
//     }

//     return apostadores;
    
// }

// console.log('A lista de apostadores: ')
// const listaDeApostadores = geraApostadores(max, min, apostadores);
// listaDeApostadores.forEach(element => {
//     console.log(element);
// });

// function verificaAcertos(resultado, listaApostadores){
//     let apostadorCont = 1;
//     for(let apostador of listaApostadores ){
//         let acertos = 0;
//         for(let i=0; i<resultado.length;i++){
//             if(apostador[i]==resultado[i]){
//                 acertos++;
//             }
//         }

        

//         if(acertos == 5){
//             console.log(`O Apostador ${apostadorCont} acertou ${acertos} numeros. Parabéns Ganhador!`);
//         }else{
//             console.log(`O apostador ${apostadorCont}  acertou ${acertos} perguntas. Tente novamente!`);
//         }
//         apostadorCont++;

//     }
// }

// verificaAcertos(resultado, listaDeApostadores);



//Exercicio 41

// let pessoa = {
//     nome:'Ana Souza',
//     idade: '18'
// }

// console.log(pessoa.idade);

// pessoa.email = 'ana@teste.com';

// console.log(pessoa);


//Exercicio 42

// let dados = {
//     nome: 'Ana Souza',
//     idade: 18,
//     formada: true,
//     faculdade:'PUC-Minas',
//     linguagensQueSabe: ['Java', 'Javascript', 'Python'],
//     linguagensAprendendo: ['C#', 'Ruby'],
//     frameworks: ['Spring', 'Angular', 'React'],
//     acertosNoTeste: 38
// }

// function achaArray(objeto){
//     novoObjeto = {}
//     for(let prop in objeto){
//         if(Array.isArray(objeto[prop])){
//             novoObjeto[prop] = objeto[prop];
//         }
//     }

//     return novoObjeto;
// }

// let dadosArrays = achaArray(dados);
// console.log(dadosArrays);


//exercicio 43

// let gabarito1 = {1:'A', 2:'C', 3:'B', 4:'E', 5:'A'}
// let gabarito2 = {1:'C', 3:'E', 6:'B', 7:'E', 8:'A', 9:'A', 10:'B'}

// function mergeObjetos(obj1, obj2){
//     return {...obj1, ...obj2};
// }

// let juntcaoObjetos = mergeObjetos(gabarito1,gabarito2);
// console.log(juntcaoObjetos);


//Exercicio 44

// let dados = {
//     nome: 'Ana Souza',
//     idade: 18,
//     formada: true,
//     faculdade:'PUC-Minas',
//     curso: 'Engenharia de Software',
//     linguagensQueSabe: ['Java', 'Javascript', 'Python'],
//     linguagensAprendendo: ['C#', 'Ruby'],
//     frameworks: ['Spring', 'Angular', 'React'],
//     acertosNoTeste: 38
// }

// function contaString(objeto){
//     let contador =0;
//     for(let prop in objeto){
//         if(typeof objeto[prop] == 'string'){
//             contador++;
//         }
//     }

//     return contador;
// }

// console.log(contaString(dados));


//Exercicio 45

// const array = ['Java', 'Javascript', 'Python', 'C#', 'Java', 'C#', 'C#', 'Javascript', 'Ruby', 'Go','Python', 'Go', 'Ruby', 'C#', 'Java', 'Javascript', 'Go', 'Java'];

// let contagemElemento ={}

// array.forEach(valor => {
//     if(contagemElemento[valor]){
//         contagemElemento[valor]++;
//     }else{
//         contagemElemento[valor] = 1;
//     }
// });

// console.log(contagemElemento);



//Exercicio 46

// let vendas = [
//     {'vendedor': 'Jose Carneiro', 'valor': 400.0},
//     {'vendedor': 'Jose Carneiro', 'valor': 150.0},
//     {'vendedor': 'Ana Souza', 'valor': 200.0},
//     {'vendedor': 'Maria Paula', 'valor': 500.0},
//     {'vendedor': 'Ana Souza', 'valor': 300.0},
//     {'vendedor': 'Jose Carneiro', 'valor': 320.0},
//     {'vendedor': 'Maria Paula', 'valor': 300.0},
//     {'vendedor': 'Ana Souza', 'valor': 300.0}
// ];

// function resumoVendas(array){

//     let resumo = {};

//     for(let venda of vendas){
//         if(resumo[venda.vendedor]){
//             resumo[venda.vendedor]+= venda.valor;
//         }else{
//             resumo[venda.vendedor] = venda.valor;
//         }
//     }

//     for(let vendedor in resumo){
//         console.log(`O  vendedor(a) ${vendedor} vendeu R$ ${resumo[vendedor]} reais no total`)
//     }
// }

// resumoVendas(vendas);



//exercicio 47

// let compras = {
//     'Ana':540.0,
//     'Maria': 1320.0,
//     'Gustavo': 454.50,
//     'Renato': 520.0,
//     'Teresa': 542.0,
//     'Marcos': 1000.0
// }

// function desconto(valor){
//     return valor - (valor*0.10);
// }

// function comprasComDesconto(objeto){
//     let resultados = {}
    
//     for(let propriedade in objeto){
//         resultados[propriedade] = desconto(objeto[propriedade]);
//     }

//     return resultados;
// }

// console.log(comprasComDesconto(compras));





