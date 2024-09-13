package exercicio04;

import java.util.LinkedList;
import java.util.List;


public class SimpleEditor {
	
	private String currentText;
	
	private List<String> versions;
	
	public SimpleEditor() {
		this.versions=new LinkedList<>();
		this.currentText="";
	}
	
	public String edit(String text) {
		versions.add(text);
		currentText=text;
		return versions.get(versions.size()-1);
	}
	
	public String undo() {
		int lastAction = versions.indexOf(currentText);
		currentText = versions.get(lastAction-1);
		return versions.get(lastAction-1);
	}
	
	public String redo() {
		int lastAction = versions.indexOf(currentText);
		if(versions.size()-1<lastAction+1) {
			return "Impossível realizar essa operação";
		}
		currentText = versions.get(lastAction+1);
		return versions.get(lastAction+1);
	}

	public List<String> getVersions() {
		return versions;
	}

	public void setVersions(List<String> versions) {
		this.versions = versions;
	}

}
