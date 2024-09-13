package exercicio03;

import java.util.ArrayList;
import java.util.List;

public class Editor {

	private List<VersionControl> actions;
	
	public Editor() {
		this.actions = new ArrayList<>();
	}
	
	public VersionControl edit(String text) {
		saveAlterations(text);
		return actions.get(actions.size()-1);
	}
	
	public void saveAlterations(String text) {
		VersionControl action = new VersionControl(text);
		actions.add(action);
	}
	
	public VersionControl undo() {
		int lastAction = actions.size()-1;
		actions.remove(lastAction);
		return actions.get(lastAction-1);
		
	}

	public List<VersionControl> getActions() {
		return actions;
	}

	public void setActions(List<VersionControl> actions) {
		this.actions = actions;
	}
	
	
	
}
