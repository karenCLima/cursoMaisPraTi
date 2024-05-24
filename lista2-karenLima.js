const prompt = require('prompt-sync')();

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
