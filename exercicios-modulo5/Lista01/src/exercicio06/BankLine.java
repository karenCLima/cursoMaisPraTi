package exercicio06;

import java.util.LinkedList;
import java.util.Queue;

public class BankLine {
	
	private Queue<String> line;
	
	public BankLine() {
		this.line = new LinkedList<>();
	}
	
	public Queue<String> getInLine(String name){
		line.add(name);
		return line;
	}
	
	public String callNextInLine() {
		if(line.peek() == null) {
			return "The line is over";
		}
		return line.poll();
	}
	
	

}
