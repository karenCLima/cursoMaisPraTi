package Polimorfismo;

public class Carro implements IMeioDeTransporte {

	@Override
	public void acelerar() {
		System.out.println("Acelerando o carro...");
		
	}

	@Override
	public void frear() {
		System.out.println("Freiando o carro...");
		
	}

}
