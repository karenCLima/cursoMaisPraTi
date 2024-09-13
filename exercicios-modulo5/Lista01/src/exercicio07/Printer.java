package exercicio07;

import java.util.LinkedList;
import java.util.Queue;

public class Printer {
	
	private Queue<String> printerQueue;
	
	public Printer() {
		this.printerQueue = new LinkedList<>();
	}
	
	public Queue<String> getInQueue(String work){
		printerQueue.add(work);
		return printerQueue;
	}
	
	public String callNextWork() {
		if(printerQueue.peek() == null) {
			return "There is nothing to print";
		}
		return "printing " + printerQueue.poll() + "...";
	}

}
