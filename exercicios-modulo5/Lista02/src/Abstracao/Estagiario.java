package Abstracao;

public class Estagiario extends Funcionario {

    public Estagiario(String nome, double salarioBase) {
        super(nome, salarioBase);
    }

    @Override
    public double calcularSalario() {
        return getSalarioBase() * 0.8; 
    }

    @Override
    public double calcularBonus() {
        return getSalarioBase() * 0.05; 
    }
}

