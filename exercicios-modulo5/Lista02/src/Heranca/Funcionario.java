package Heranca;

public class Funcionario {
	
	protected String nome;
	protected double salario;
	
	
	public Funcionario(String nome, double salario) {
		this.nome = nome;
		this.salario = salario;
	}
	
	public void trabalhar() {
		System.out.println("O funcionário " + this.nome+ " realiza um trabalho na empresa");
	}

	
	
	

}
