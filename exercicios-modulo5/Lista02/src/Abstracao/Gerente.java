package Abstracao;

public class Gerente extends Funcionario {

    public Gerente(String nome, double salarioBase) {
        super(nome, salarioBase);
    }

    @Override
    public double calcularSalario() {
        return getSalarioBase() * 2;
    }

    @Override
    public double calcularBonus() {
        return getSalarioBase() * 0.2; 
    }
}

