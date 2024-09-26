package Abstracao;

public class CartaoCredito extends FormaPagamento {
    
    private String numeroCartao;
    private String validade;
    private String cvv;
    
    public CartaoCredito(String numeroCartao, String validade, String cvv) {
        this.numeroCartao = numeroCartao;
        this.validade = validade;
        this.cvv = cvv;
    }

	@Override
	public void processarPagamento(double valor) {
		if (validarPagamento()) {
            System.out.println("Pagamento de R$" + valor + " processado com Cartão de Crédito.");
        } else {
            System.out.println("Falha na validação do Cartão de Crédito.");
        }
		
	}

	@Override
	public boolean validarPagamento() {
		return numeroCartao.length() == 16 && validade.length() == 5 && cvv.length() == 3;
	}
    
    
}
