package Heranca;

public class Gerente  extends Funcionario {

	public Gerente(String nome, double salario) {
		super(nome, salario);
		// TODO Auto-generated constructor stub
	}
	
	public double calcularBonus() {
		return (this.salario*0.2);
	}
	
	@Override
	public void trabalhar() {
		System.out.println("O gerente "+ this.nome);
		System.out.println("Realiza os seguintes trabalhos:");
		System.out.println("Supervisiona os processos");
		System.out.println("Lidera a equipe");
	}

	@Override
	public String toString() {
		return "Gerente [nome=" + nome + ", salario=" + salario + "]";
	}
	
	

}
