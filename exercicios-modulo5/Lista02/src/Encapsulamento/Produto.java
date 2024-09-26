package Encapsulamento;

public class Produto {
	
	private String nome;
	private int quantidade;
	private double preco;
	
	
	public Produto(String nome, int quantidade, double preco) throws Exception {
		if(quantidade<0 || preco<0) {
			throw new Exception("Quantidade e Preço não podem ser negativos!");
		}else {
			this.nome = nome;
			this.quantidade = quantidade;
			this.preco = preco;
		}
		
	}


	public String getNome() {
		return nome;
	}


	public void setNome(String nome) {
		this.nome = nome;
	}


	public int getQuantidade() {
		return quantidade;
	}


	public void setQuantidade(int quantidade) throws Exception {
		
		if(quantidade<0) {
			throw new Exception("Quantidade não pode ser negativa!");
		}else {
			this.quantidade = quantidade;
		}
		
	}


	public double getPreco() {
		return preco;
	}


	public void setPreco(double preco) throws Exception {
		if(preco<0) {
			throw new Exception("Quantidade não pode ser negativa");
		}else {
			this.preco = preco;
		}
		
	}
	
	public double aplicarDesconto(double porcentagem) throws Exception {
		
		double novoPreco =this.preco;
		
		if(porcentagem>0.5) {
			throw new Exception("A porcentagem não pode ser maior que 50%");
		}else {
			novoPreco = this.preco - (this.preco*porcentagem);
		}
		
		return novoPreco;
		
	}


	@Override
	public String toString() {
		return "Produto [nome=" + nome + ", quantidade=" + quantidade + ", preco=" + preco + "]";
	}
	
	
	
	
	
	

}
