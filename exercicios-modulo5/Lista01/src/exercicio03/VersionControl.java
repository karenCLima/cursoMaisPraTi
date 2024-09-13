package exercicio03;

public class VersionControl {
	
	private String action;

	public VersionControl(String action) {
		super();
		this.action = action;
	}

	public String getAction() {
		return action;
	}

	public void setAction(String action) {
		this.action = action;
	}

	@Override
	public String toString() {
		return action;
	}
	
	

}
