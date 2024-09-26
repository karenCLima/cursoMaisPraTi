import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

import Encapsulamento.Produto;
import Heranca.*;
import Polimorfismo.*;
import Abstracao.*;
import Abstracao.Desenvolvedor;
import Abstracao.Funcionario;
import Abstracao.Gerente;

public class Main {

	public static void main(String[] args) throws Exception {
		
		//Encapsulamento
		
		// Exercício- 1
		
//		Produto produto1 = new Produto("Computador", 1, 3000.00);
//		System.out.println(produto1);
		
		//Produto produto2 = new Produto("mesa", -1, 120.00);
		
		//Produto produto3 = new Produto("cadeira", 4, -30.0);
		
		
		//Exercício 2
		
//		Produto produto4 = new Produto("Computador", 1, 1000.00);
//		System.out.println(produto4);
//		System.out.println("Produto antes do desconto: "+ produto4.getPreco());
//		System.out.println("Produto depois do desconto: "+ produto4.aplicarDesconto(0.4));
//		
//		produto1.aplicarDesconto(0.7);
		
		
		
		//Herança
		
		//Exercício 3
		
//		Gerente gerente1 = new Gerente("John", 5000.00);
//		System.out.println(gerente1);
//		System.out.println("Calculo do bonus: " + gerente1.calcularBonus());
//		
//		Desenvolvedor desenvolvedor1 = new Desenvolvedor("Marie", 4000.00);
//		System.out.println(desenvolvedor1);
//		System.out.println("Calculo do bonus: " + desenvolvedor1.calcularBonus());
		
		//Exercicio 4
		
//		Funcionario funcionario1 = new Funcionario("Qualquer", 0);
//		Gerente gerente2 = new Gerente("Paul", 5000.00);
//		Desenvolvedor desenvolvedor2 = new Desenvolvedor("Anne", 4000.00);
//		
//		funcionario1.trabalhar();
//		System.out.println();
//		gerente2.trabalhar();
//		System.out.println();
//		desenvolvedor2.trabalhar();
		
		
		
		
		//Polimorfismo
		
		//Exercicio 5
		
//		Carro carro = new Carro();
//		Bicicleta bicicleta = new Bicicleta();
//		Trem trem = new Trem();
//		
//		IMeioDeTransporte[] meiosDeTransportes = {carro, bicicleta, trem};
//		
//		for(IMeioDeTransporte meioDeTransporte: meiosDeTransportes) {
//			meioDeTransporte.acelerar();
//			meioDeTransporte.frear();
//		}
		
		//Exercicio 6
		
//		Cachorro cachorro = new Cachorro();
//		Gato gato = new Gato();
//		Vaca vaca = new Vaca();
//		
//		List<Animal> animals = Arrays.asList(cachorro, gato, vaca);
//		
//		animals.forEach(animal -> animal.emitirSom());
		
		
		
		//Abstração
		
		//Exercício 7
		
		// CartaoCredito("1234567812345678", "12/25", "123");
        //Boleto("12345678901234567890123456789012345678901234567");
        //Pix("chavepix@example.com");

//        double valor = 0.0;
//        
//        Scanner scanner = new Scanner(System.in);
//        
//        System.out.println("Bem-vindo ao Sistema de Pagamentos!");
//        
//        System.out.println("Digite o valor a ser pago: ");
//        valor = scanner.nextDouble();
//        System.out.println("O valor a ser pago é: R$" + valor);
//        
//        System.out.println("Escolha a forma de pagamento:");
//        System.out.println("1 - Cartão de Crédito");
//        System.out.println("2 - Boleto");
//        System.out.println("3 - Pix");
//
//        int escolha = scanner.nextInt();
//        scanner.nextLine(); 
//
//        FormaPagamento formaPagamento = null;
//
//        switch (escolha) {
//            case 1:
//        
//                System.out.println("Digite o número do cartão de crédito (16 dígitos):");
//                String numeroCartao = scanner.nextLine();
//
//                System.out.println("Digite a validade (MM/AA):");
//                String validade = scanner.nextLine();
//
//                System.out.println("Digite o CVV (3 dígitos):");
//                String cvv = scanner.nextLine();
//
//                formaPagamento = new CartaoCredito(numeroCartao, validade, cvv);
//                break;
//
//            case 2:
//                // Pedir informações do boleto
//                System.out.println("Digite o código de barras do boleto (47 dígitos):");
//                String codigoBarras = scanner.nextLine();
//
//                formaPagamento = new Boleto(codigoBarras);
//                break;
//
//            case 3:
//                // Pedir informações do Pix
//                System.out.println("Digite a chave Pix:");
//                String chavePix = scanner.nextLine();
//
//                formaPagamento = new Pix(chavePix);
//                break;
//
//            default:
//                System.out.println("Opção inválida.");
//                scanner.close();
//                return;
//        }
//
        // Processa o pagamento escolhido
//        if (formaPagamento != null) {
//            formaPagamento.processarPagamento(valor);
//        }
//
//        scanner.close();
//    
//
		
		//Exercício 8
		
		SistemaGestaoFuncionarios sistema = new SistemaGestaoFuncionarios();

        Funcionario gerente = new Gerente("João", 5000);
        Funcionario desenvolvedor = new Desenvolvedor("Maria", 4000);
        Funcionario estagiario = new Estagiario("Pedro", 2000);

        sistema.adicionarFuncionario(gerente);
        sistema.adicionarFuncionario(desenvolvedor);
        sistema.adicionarFuncionario(estagiario);

        // Cálculo inicial da folha de pagamento
        System.out.println("---- Folha de Pagamento Inicial ----");
        sistema.calcularFolhaPagamento();

        // Promoção de funcionário
        Funcionario novoGerente = new Gerente(desenvolvedor.getNome(), desenvolvedor.getSalarioBase());
        sistema.promoverFuncionario(desenvolvedor, novoGerente);

        // Cálculo da folha de pagamento após promoção
        System.out.println("\n---- Folha de Pagamento Após Promoção ----");
        sistema.calcularFolhaPagamento();
    
	}

}
