package exercicio08;

import java.util.LinkedList;
import java.util.Queue;

public class ProcessManager {
	
private Queue<String> processQueue;
	
	public ProcessManager() {
		this.processQueue = new LinkedList<>();
	}
	
	public Queue<String> getInQueue(String process){
		processQueue.add(process);
		return processQueue;
	}
	
	public String callNext() {
		if(processQueue.peek() == null) {
			return "Process finished. There is nothing to process";
		}
		return "Processing " + processQueue.poll() + "...";
	}

}
