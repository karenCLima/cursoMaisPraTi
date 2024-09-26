package Polimorfismo;

public class Trem implements IMeioDeTransporte {

	@Override
	public void acelerar() {
		System.out.println("Acelerando o trem...");
		
	}

	@Override
	public void frear() {
		System.out.println("Freiando o trem...");
		
	}

}
