package Heranca;

public class Desenvolvedor extends Funcionario {

	public Desenvolvedor(String nome, double salario) {
		super(nome, salario);
	}
	
	public double calcularBonus() {
		return (this.salario*0.1);
	}
	
	@Override
	public void trabalhar() {
		System.out.println("O desenvolvedor(a) "+ this.nome);
		System.out.println("Realiza os seguintes trabalhos:");
		System.out.println("Supervisiona o código e corrige bugs");
		System.out.println("Cria novas aplicações");
		System.out.println("Faz testes");
		
	}

	@Override
	public String toString() {
		return "Desenvolvedor [nome=" + nome + ", salario=" + salario + "]";
	}
	
	

}
