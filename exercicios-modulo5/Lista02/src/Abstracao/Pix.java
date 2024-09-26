package Abstracao;

public class Pix extends FormaPagamento {
    
    private String chavePix;
    
    public Pix(String chavePix) {
        this.chavePix = chavePix;
    }
    
    @Override
    public void processarPagamento(double valor) {
        if (validarPagamento()) {
            System.out.println("Pagamento de R$" + valor + " processado via Pix.");
        } else {
            System.out.println("Falha na validação do Pix.");
        }
    }

    @Override
    public boolean validarPagamento() {
        return chavePix != null && !chavePix.isEmpty();
    }
}