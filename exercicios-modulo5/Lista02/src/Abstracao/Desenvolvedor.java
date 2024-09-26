package Abstracao;

public class Desenvolvedor extends Funcionario {

    public Desenvolvedor(String nome, double salarioBase) {
        super(nome, salarioBase);
    }

    @Override
    public double calcularSalario() {
        return getSalarioBase(); 
    }

    @Override
    public double calcularBonus() {
        return getSalarioBase() * 0.1; 
    }
}

