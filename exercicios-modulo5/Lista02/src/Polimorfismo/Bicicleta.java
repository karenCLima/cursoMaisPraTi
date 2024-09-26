package Polimorfismo;

public class Bicicleta implements IMeioDeTransporte{

	@Override
	public void acelerar() {
		System.out.println("Acelerando a  bicicleta...");
		
	}

	@Override
	public void frear() {
		System.out.println("Freiando a bicileta ...");
		
	}

}
