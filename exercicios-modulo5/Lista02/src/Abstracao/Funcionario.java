package Abstracao;

public abstract class Funcionario {
    private String nome;
    private double salarioBase;

    public Funcionario(String nome, double salarioBase) {
        this.nome = nome;
        this.salarioBase = salarioBase;
    }

    public String getNome() {
        return nome;
    }

    public double getSalarioBase() {
        return salarioBase;
    }

    // Método abstrato para cálculo de salário (deve ser implementado pelas subclasses)
    public abstract double calcularSalario();

    // Método abstrato para cálculo de bônus (deve ser implementado pelas subclasses)
    public abstract double calcularBonus();
}

