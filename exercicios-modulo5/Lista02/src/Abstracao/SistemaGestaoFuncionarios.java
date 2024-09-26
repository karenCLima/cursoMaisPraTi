package Abstracao;

import java.util.ArrayList;
import java.util.List;

public class SistemaGestaoFuncionarios {
    private List<Funcionario> funcionarios;

    public SistemaGestaoFuncionarios() {
        this.funcionarios = new ArrayList<>();
    }

    public void adicionarFuncionario(Funcionario funcionario) {
        funcionarios.add(funcionario);
    }

    public void promoverFuncionario(Funcionario funcionario, Funcionario novoCargo) {
        int index = funcionarios.indexOf(funcionario);
        if (index != -1) {
            funcionarios.set(index, novoCargo);
            System.out.println(funcionario.getNome() + " foi promovido para " + novoCargo.getClass().getSimpleName() + "!");
        }
    }

    public void calcularFolhaPagamento() {
        double totalSalarios = 0;
        double totalBonus = 0;

        for (Funcionario funcionario : funcionarios) {
            double salario = funcionario.calcularSalario();
            double bonus = funcionario.calcularBonus();

            totalSalarios += salario;
            totalBonus += bonus;

            System.out.println(funcionario.getNome() + " - Salário: R$" + salario + ", Bônus: R$" + bonus);
        }

        System.out.println("Total de Salários: R$" + totalSalarios);
        System.out.println("Total de Bônus: R$" + totalBonus);
    }
}

