package exercicio01;

import java.util.ArrayList;
import java.util.List;

public class TaskManager {
	
	private List<Task> tasks;
	
	
	public TaskManager() {
		this.tasks = new ArrayList<>();
	}

	public Integer findId(List<Task> tasks) {
		Integer id=0;
		if (tasks == null) {
			id =1;
		}else {
			for(Task task : tasks) {
				if(task.getId()>id) {
					id = task.getId();
				}
			}
		}
		
		return id + 1;
	}
	
	public List<Task> addTask(String task){
		Integer id = findId(tasks);
		Task newTask = new Task(id, task, Status.TO_DO);
		this.tasks.add(newTask);
		
		return this.tasks;
	}
	
	public void removeTask(int id) {
		Task taskToRemove= tasks.get(0);
		for (Task task :tasks) {
			if(task.getId()==id) {
				taskToRemove=task;
			}
		}
		
		tasks.remove(taskToRemove);
	}
	
	public List<Task> updateTask(int id){
		for(Task task:tasks) {
			if(task.getId()==id) {
				task.setStatus(Status.COMPLETED);
			}
		}
		
		return tasks;
	}

	@Override
	public String toString() {
		return "TaskManager [tasks=" + tasks + "]";
	}

	public List<Task> getTasks() {
		return tasks;
	}

	public void setTasks(List<Task> tasks) {
		this.tasks = tasks;
	}
	
	

}
