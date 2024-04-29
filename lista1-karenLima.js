//Exercíco 1
// rode no terminal: npm install prompt-sync
const prompt = require('prompt-sync')();
//let temperaturaCelsius = prompt('Digite uma temperatura em graus celsius: ');
//let temperaturaFarenheit = (parseFloat(temperaturaCelsius)*(9/5)) + 32;
//console.log(`A Temperatura em Fareneit: ${temperaturaFarenheit}`);

//Exercicio 2
// let numeroEleitores = prompt('Digite o numero de eleitores: ');
// let votosBranco = prompt('Digite o numero de votos em branco: ');
// let votoNulo = prompt('Digite o numero de votos nulos: ');
// let votoValido = prompt('Digite a quantidade de votos validos: ')
// let percentualVotoBrancos = (votosBranco/numeroEleitores)*100;
// let percentualVotoNulo = (votoNulo/numeroEleitores)*100;
// let percentualVotoValidos = (votoValido/numeroEleitores)*100;

// console.log(`Percentual de voto brancos: ${percentualVotoBrancos}`);
// console.log(`Percentual de votos nulos: ${percentualVotoNulo}`);
// console.log(`Percentual de votos validos: ${percentualVotoValidos}`);

//Exercício 3
// let numero1 = parseInt(prompt("Digite um numero inteiro: "));

// let numero2 = parseInt(prompt("Digite um numero inteiro: "));

// let numero3 = parseInt(prompt("Digite um numero inteiro: "));

// let numero4 = parseInt(prompt("Digite um numero inteiro: "));
// numero4 = (numero1 + numero2 + numero3);

// numero1 += 25;
// console.log(`O numero 1: ${numero1}`);

// numero2 *= 3;
// console.log(`O numero 1: ${numero2}`);

// numero3 *= (12/100);
// console.log(`O numero 1: ${numero3}`);

// console.log(`O numero 1: ${numero4}`);

//Exercicio 4
// let nota1 = parseFloat(prompt('Digite a primeira nota: '));
// let nota2 = parseFloat(prompt('Digite a segunda nota: '));
// let media = (nota1+nota2)/2;
// if(media>= 6.0){
//     console.log('PARABÉNS! Você foi aprovado');
//     console.log(`Sua média foi: ${media}`);
// }else{
//     console.log(`Sua média foi: ${media}`);
// }

//Exercício 5
// let nota1 = parseFloat(prompt('Digite a primeira nota: '));
// let nota2 = parseFloat(prompt('Digite a segunda nota: '));
// let media = (nota1+nota2)/2;
// if(media>= 6.0){
//     console.log('PARABÉNS! Você foi aprovado');
//     console.log(`Sua média foi: ${media}`);
// }else{
//     console.log('Você foi REPROVADO! Estude mais');
//     console.log(`Sua média foi: ${media}`);
// }

//Exercício 6
// let ladoA = parseInt(prompt('Digite o valor do lado A: '));
// let ladoB = parseInt(prompt('Digite o valor do lado B: '));
// let ladoC = parseInt(prompt('Digite o valor do lado C: '));

// if(ladoA<(ladoB+ladoC) && ladoB<(ladoA+ladoC) && ladoC<(ladoA+ladoB)){
//     if(ladoA == ladoB && ladoB == ladoC && ladoA== ladoC){
//         console.log('É um Triangulo Equilátero!');
//     } else if (ladoA != ladoB && ladoB != ladoC && ladoA != ladoC ){
//         console.log('É um Triangulo Escaleno!');
//     }else if (ladoA == ladoB || ladoB == ladoC || ladoA== ladoC) {
//         console.log('É um Triangulo Isósceles!');
//     }
// }else{
//     console.log("Não é um triangulo!")
// }

//Exercicio 7
// let numeroMacas = parseInt(prompt('Digite o numero de maçãs: '));
// let totalCompra;
// if(numeroMacas> 12){
//     totalCompra = (0.25) * numeroMacas;
// }else{
//     totalCompra = (0.30) * numeroMacas;
// }
// console.log(`O Total da Compra foi de R$ ${totalCompra.toFixed(2)} reais.`);

//Exercício 8
// let numero1 = parseInt(prompt('Digite o primeiro valor: '));
// let numero2 = parseInt(prompt('Digite o segundo valor: '));

// if(numero1<numero2){
//     console.log(numero1,numero2);
// }else{
//     console.log(numero2, numero1);
// }

//Exercicio 9
// const codigo = parseInt(prompt('Digite o codigo do produto: '));

// if(codigo>= 1 && codigo<=9){
//     switch (codigo){
//         case 1:
//             console.log('Sul');
//             break;
//         case 2:
//             console.log('Norte');
//             break;
//         case 3:
//             console.log('Leste');
//             break;
//         case 4:
//             console.log('Oeste');
//             break;
//         case 5:
//         case 6:
//             console.log('Nordeste');
//             break;
//         case 7:
//         case 8:
//         case 9:
//             console.log('Sudeste'); 
//             break;
//         default:
//             break;
//     }
// }else if (codigo>= 10 && codigo<=20){
//     console.log('Centro-Oeste');
// }else if(codigo>= 25 && codigo<=50){
//     console.log('Nordeste');
// }else{
//     console.log('Produto Importado')
// }

//Exercício 10
// let numero = prompt('Digite um numero: ');
// for(i=1; i<=10; i++){
//     console.log(numero);
// }

//Exercício 11
// let num = parseInt(prompt('Digite um numero: '));
// while(num > 0){
//     if(num%2==0){
//         console.log(`${num} é Par!`);
//     }else{
//         console.log(`${num} é Impar!`);
//     }

//     num = parseInt(prompt('Digite um numero: '));
// }

//Exercicio 12
// for(i=1000; i<=1999; i++){
//     if(i%11 == 5){
//         console.log(i);
//     }
// }

//Exercício 13
// let contador=1;

// while(contador <=5){
//     let n= parseInt(prompt('Digite um numero: '));
//     for(let i=1; i<=n;i++){
//         console.log(`${i} x ${i} = ${i*i}`);
//     }
//     contador++; 
// }


//Exercício 14 
// let num = parseInt(prompt('Digite um numero: '));
// let sum = 0;
// let contador = 0;
// while(num != 0){
//     sum += num;
//     contador++;
//     num = parseInt(prompt('Digite um numero: '));

// }

// console.log(`A média é ${(sum/contador).toFixed(3)}`);

//Exercício 15
// let numero = parseFloat(prompt('Digite um numero: '));
// let sum =0;
// let contador =0;
// while(numero != 0){
//     let peso = parseInt(prompt('Digite o numero do peso: '));
//     sum += (numero*peso);
//     contador+= peso;
//     numero = parseFloat(prompt('Digite um numero: '));

// }

// console.log(`A média ponderada é ${(sum/contador).toFixed(3)}`);

//Exercício 16
// let contador = 0;
// let inicializador = 101;
// let primos = [];
// while(contador<=50){
//     let ehPrimo = true;
//     for(let i=2; i<= Math.sqrt(inicializador);i++){
//         if(inicializador % i == 0){
//             ehPrimo = false;
//             break;
//         }
//     }

//     if(ehPrimo){
//         primos.push(inicializador);
//         contador++;
//     }


//     inicializador++;

// }

// console.log(primos);